import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    try {
        const cookie = cookies();
        const cookieValue = cookie.get('userId');

        return NextResponse.json({
            message: 'It is get cookies request.',
            value: cookieValue,
        });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
