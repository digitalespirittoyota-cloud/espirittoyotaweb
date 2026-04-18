import { jwtVerify } from 'jose';

const JWT_SECRET_STR = process.env.JWT_SECRET;
if (!JWT_SECRET_STR) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

export interface JWTPayload {
    id: string;
    username: string;
    role: string;
}

/**
 * Verifies a JWT token and returns the payload if valid.
 * Throws an error if the token is invalid or expired.
 */
export async function verifyJWT(token: string): Promise<JWTPayload> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as unknown as JWTPayload;
    } catch (error) {
        throw new Error('Invalid token');
    }
}
