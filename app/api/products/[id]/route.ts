import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const body = await request.json();
        const { name, category, price, image, description, stock, availableOn } = body;
        const { id } = await params;

        const product = await prisma.product.update({
            where: { id: parseInt(id) },
            data: {
                name,
                category,
                price: parseFloat(price),
                image,
                description,
                stock: parseInt(stock),
                availableOn: availableOn ? new Date(availableOn) : null,
            },
        });

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await prisma.product.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }
}
