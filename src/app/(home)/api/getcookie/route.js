import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const cookie = cookies();
        const cookieValue = cookie.get('userId');

        return NextResponse.json({
            value: cookieValue,
        });
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error });
    }
}
