import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST() {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.task.findFirst();
        return NextResponse.json({ status: 'success', data: result });
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error });
    }
}
