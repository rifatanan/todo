import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req, res) {
    try {
        let reqBody = await req.json();
        let id = parseInt(reqBody.user_id);

        const prisma = new PrismaClient();
        const result = await prisma.task.findMany({
            where: { user_id: reqBody },
        });
        return NextResponse.json({ status: 'success', data: result });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
