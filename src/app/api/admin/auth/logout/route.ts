import { NextResponse } from 'next/server';

export async function POST() {
    try {
        const response = NextResponse.json({ message: 'Logout successful' }, { status: 200 });
        
        // Remove the cookie
        response.cookies.set('admin_token', '', {
            httpOnly: true,
            expires: new Date(0),
            path: '/',
            sameSite: 'strict'
        });

        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
