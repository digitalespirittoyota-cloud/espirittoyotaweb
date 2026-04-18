import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = process.env.JWT_SECRET;
if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}
const JWT_SECRET = new TextEncoder().encode(secret);

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Protect /admin routes (Pages)
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
        const token = request.cookies.get('admin_token')?.value;

        if (!token) {
            const url = request.nextUrl.clone();
            url.pathname = '/admin/login';
            return NextResponse.redirect(url);
        }

        try {
            await jwtVerify(token, JWT_SECRET);
            return NextResponse.next();
        } catch (error) {
            console.error('Middleware JWT Error:', error);
            const url = request.nextUrl.clone();
            url.pathname = '/admin/login';
            return NextResponse.redirect(url);
        }
    }

    // 2. Prevent logged-in users from visiting login page
    if (pathname === '/admin/login') {
        const token = request.cookies.get('admin_token')?.value;
        if (token) {
            try {
                await jwtVerify(token, JWT_SECRET);
                const url = request.nextUrl.clone();
                url.pathname = '/admin';
                return NextResponse.redirect(url);
            } catch (err) {
                // Token invalid, allow login page
            }
        }
    }

    // 3. Protect /api/admin routes
    if (pathname.startsWith('/api/admin') && 
        pathname !== '/api/admin/auth/login' && 
        pathname !== '/api/admin/setup') {
        const token = request.cookies.get('admin_token')?.value;
        if (!token) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
        try {
            await jwtVerify(token, JWT_SECRET);
        } catch (error) {
            return NextResponse.json({ message: 'Invalid session' }, { status: 401 });
        }
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
};
