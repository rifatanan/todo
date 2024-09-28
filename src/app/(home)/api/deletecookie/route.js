import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    try {
        const cookie = cookies();
        cookie.delete('userId');
        cookie.delete('auth');
        return NextResponse.json({ status: 'success' });
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error });
    }
}
