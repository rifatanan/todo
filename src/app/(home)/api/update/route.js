import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req, res) {
    try {
        let reqBody = await req.json();
        let name = reqBody.newName;
        let task = reqBody.newTask;
        let Id = parseInt(reqBody.Id);

        const prisma = new PrismaClient();
        const result = await prisma.task.update({
            where: { id: Id },
            data: { name: name, task: task },
        });
        return NextResponse.json({ status: 'success', data: result });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
