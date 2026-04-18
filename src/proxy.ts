import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = process.env.JWT_SECRET;
if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}
const JWT_SECRET = new TextEncoder().encode(secret);

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only protect /admin routes, but ignore the login page itself
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
        const token = request.cookies.get('admin_token')?.value;

        if (!token) {
            // No token, redirect to login
            const url = request.nextUrl.clone();
            url.pathname = '/admin/login';
            return NextResponse.redirect(url);
        }

        try {
            // Verify token
            await jwtVerify(token, JWT_SECRET);
            return NextResponse.next();
        } catch (error) {
            // Invalid token, redirect to login
            console.error('Middleware JWT Error:', error);
            const url = request.nextUrl.clone();
            url.pathname = '/admin/login';
            return NextResponse.redirect(url);
        }
    }

    // Also prevent logged-in users from visiting login page
    if (pathname === '/admin/login') {
        const token = request.cookies.get('admin_token')?.value;
        if (token) {
            try {
                await jwtVerify(token, JWT_SECRET);
                const url = request.nextUrl.clone();
                url.pathname = '/admin'; // Redirect to dashboard
                return NextResponse.redirect(url);
            } catch (err) {
                // Token invalid, allow login page
            }
        }
    }

    // Also protect /api/admin routes, except for login and setup
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

export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
};
