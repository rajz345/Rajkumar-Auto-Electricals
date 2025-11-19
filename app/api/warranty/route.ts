import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const warranties = await prisma.warranty.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(warranties);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch warranties' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { customerName, batteryId, saleDate, durationMonths } = body;

        const warranty = await prisma.warranty.create({
            data: {
                customerName,
                batteryId,
                saleDate: new Date(saleDate),
                durationMonths: parseInt(durationMonths),
            },
        });

        return NextResponse.json(warranty);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create warranty' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID required' }, { status: 400 });
        }

        await prisma.warranty.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete warranty' }, { status: 500 });
    }
}
