import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET_STR = process.env.JWT_SECRET;
if (!JWT_SECRET_STR) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

export interface JWTPayload {
    id: string;
    username: string;
    role: 'admin' | 'bidding' | 'marketing';
}

/**
 * Verifies a JWT token and returns the payload if valid.
 */
export async function verifyJWT(token: string): Promise<JWTPayload> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as unknown as JWTPayload;
    } catch (error) {
        throw new Error('Invalid token');
    }
}

/**
 * Retrieves the current admin session from cookies.
 * Server-side only.
 */
export async function getServerSession(): Promise<JWTPayload | null> {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('admin_token')?.value;

        if (!token) return null;

        return await verifyJWT(token);
    } catch (error) {
        return null;
    }
}
