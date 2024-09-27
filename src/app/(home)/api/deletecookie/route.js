import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

export async function GET(request, response) {
    try {
        const cookie = cookies();
        cookie.delete('userId');
        cookie.delete('auth');
        return NextResponse.json({ status: 'success' });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
