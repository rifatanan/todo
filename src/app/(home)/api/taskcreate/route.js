import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(request) {
    try {
        let requestBody = await request.json();
        let name = requestBody.name;
        let task = requestBody.task;
        let user_id = parseInt(requestBody.user_id);
        const prisma = new PrismaClient();
        const result = await prisma.task.create({
            data: { user_id, name, task },
        });
        return NextResponse.json({ status: 'success', data: result });
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error });
    }
}
