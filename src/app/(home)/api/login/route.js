import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

export async function POST(request) {
    try {
        let requestBody = await request.json();
        let email = requestBody.email;

        const prisma = new PrismaClient();
        const result = await prisma.user.findFirst({
            where: { email },
        });

        const cookie = cookies();
        cookie.set('auth', result.auth);
        cookie.set('userId', result.id);
        cookie.set('role', result.role);
        return NextResponse.json({ status: 'success', data: result });
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error });
    }
}
