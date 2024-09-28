import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function DELETE(request) {
    try {
        let requestBody = await request.json();
        const prisma = new PrismaClient();
        const result = await prisma.task.delete({
            where: { id: requestBody },
        });
        return NextResponse.json({ status: 'success', data: result });
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error });
    }
}
