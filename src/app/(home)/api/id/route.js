import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req, res) {
    try {
        const requestBody = await req.json();
        const id = requestBody.id;
        const prisma = new PrismaClient();
        const result = await prisma.task.findFirst();
        return NextResponse.json({ status: 'success', data: result });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
