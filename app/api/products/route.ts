import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');

        const where = category ? { category } : {};

        const products = await prisma.product.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, category, price, image, description, stock, availableOn } = body;

        const product = await prisma.product.create({
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
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
