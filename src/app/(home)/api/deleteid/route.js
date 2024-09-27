import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function DELETE(req, res) {
    try {
        let reqBody = await req.json();
        let id = reqBody;

        const prisma = new PrismaClient();
        const result = await prisma.task.delete({
            where: { id: id },
        });
        return NextResponse.json({ status: 'success', data: result });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
