import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

const JWT_SECRET_STR = process.env.JWT_SECRET;
if (!JWT_SECRET_STR) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

import { LoginSchema } from '@/app/lib/schemas';

export async function POST(req: Request) {
    try {
        await connectDB();
        const json = await req.json();

        // Validate with Zod
        const validation = LoginSchema.safeParse(json);
        if (!validation.success) {
            return NextResponse.json({
                message: 'Invalid input',
                errors: validation.error.format()
            }, { status: 400 });
        }

        const { username, password } = validation.data;

        const admin = await Admin.findOne({ username });
        if (!admin) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, admin.passwordHash);
        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        // Create JWT
        const token = await new SignJWT({
            id: admin._id.toString(),
            username: admin.username,
            role: admin.role
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(JWT_SECRET);

        const response = NextResponse.json({
            message: 'Login successful',
            token,
            user: { username: admin.username, role: admin.role }
        }, { status: 200 });

        // Set cookie
        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
