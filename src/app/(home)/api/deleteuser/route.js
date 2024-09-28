import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function DELETE(request) {
    try {
        let requestBody = await request.json();
        const prisma = new PrismaClient();
        const result1 = await prisma.user.delete({
            where: { id: requestBody },
        });
        const result2 = await prisma.task.deleteMany({
            where: { user_id: requestBody },
        });
        return NextResponse.json({
            status: 'success',
            data: { result1, result2 },
        });
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error });
    }
}
