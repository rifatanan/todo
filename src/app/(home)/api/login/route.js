import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

export async function POST(req, res) {
    try {
        let reqBody = await req.json();
        let email = reqBody.email;

        const prisma = new PrismaClient();
        const result = await prisma.user.findFirst({
            where: { email },
        });

        console.log('result: ', result);

        const cookie = cookies();
        cookie.set('auth', result.auth);
        cookie.set('userId', result.id);
        cookie.set('role', result.role);
        return NextResponse.json({ status: 'success', data: result });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
