import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';
import { getServerSession } from '@/app/lib/auth';
import { ChangePasswordSchema } from '@/app/lib/schemas';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();
        const json = await req.json();

        // Validate with Zod
        const validation = ChangePasswordSchema.safeParse(json);
        if (!validation.success) {
            return NextResponse.json({
                message: 'Invalid input',
                errors: validation.error.format()
            }, { status: 400 });
        }

        const { oldPassword, newPassword } = validation.data;

        // Find current admin - Ensure ID is a string if it came back as an object from JWT
        // Use username as fallback if ID format is problematic
        const adminId = typeof session.id === 'object' ? (session.id as any).id || String(session.id) : session.id;

        // Use findOne to avoid CastError if adminId is not a valid ObjectId
        // We look up by either _id (if it looks somewhat valid) or username
        const isValidId = /^[0-9a-fA-F]{24}$/.test(adminId);

        const admin = await Admin.findOne({
            $or: [
                ...(isValidId ? [{ _id: adminId }] : []),
                { username: session.username }
            ]
        });

        if (!admin) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Verify old password
        const isMatch = await bcrypt.compare(oldPassword, admin.passwordHash);
        if (!isMatch) {
            return NextResponse.json({ message: 'Incorrect old password' }, { status: 400 });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const newPasswordHash = await bcrypt.hash(newPassword, salt);

        // Update password
        admin.passwordHash = newPasswordHash;
        await admin.save();

        const response = NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });

        // Clear session cookie to force logout
        response.cookies.set('admin_token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 0 // Set to 0 to delete the cookie
        });

        return response;
    } catch (error: any) {
        console.error('Change password error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
