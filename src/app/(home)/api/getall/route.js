import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req, res) {
    try {
        const prisma = new PrismaClient();
        const result1 = await prisma.task.findMany({});
        const result2 = await prisma.user.findMany({});
        return NextResponse.json({
            status: 'success',
            data: { result1, result2 },
        });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
