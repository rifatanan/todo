import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(request) {
    try {
        let requestBody = await request.json();
        let name = requestBody.newName;
        let task = requestBody.newTask;
        let Id = parseInt(requestBody.Id);

        const prisma = new PrismaClient();
        const result = await prisma.task.update({
            where: { id: Id },
            data: { name: name, task: task },
        });
        return NextResponse.json({ status: 'success', data: result });
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error });
    }
}
