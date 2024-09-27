import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req, res) {
    try {
        let reqBody = await req.json();
        let name = reqBody.name;
        let task = reqBody.task;
        let user_id = parseInt(reqBody.user_id);

        console.log('task ', reqBody);

        const prisma = new PrismaClient();
        const result = await prisma.task.create({
            data: { user_id, name, task },
        });
        return NextResponse.json({ status: 'success', data: result });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
