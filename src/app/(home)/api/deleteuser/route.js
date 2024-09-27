import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function DELETE(req, res) {
    try {
        let reqBody = await req.json();
        let id = reqBody;

        const prisma = new PrismaClient();
        const result1 = await prisma.user.delete({
            where: { id: id },
        });
        const result2 = await prisma.task.delete({
            where: { user_id: id },
        });
        return NextResponse.json({ status: 'success', data: result });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
