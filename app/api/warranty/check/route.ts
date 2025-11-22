import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { saleDate } = body;

        if (!saleDate) {
            return NextResponse.json({ error: 'Sale date is required' }, { status: 400 });
        }

        // Search for warranty by sale date
        const warranty = await prisma.warranty.findFirst({
            where: {
                saleDate: new Date(saleDate),
            },
        });

        if (!warranty) {
            return NextResponse.json({ found: false, message: 'Warranty not found' });
        }

        const saleDateObj = new Date(warranty.saleDate);
        const expiryDate = new Date(saleDateObj);
        expiryDate.setMonth(expiryDate.getMonth() + warranty.durationMonths);

        const now = new Date();
        const isValid = now <= expiryDate;

        return NextResponse.json({
            found: true,
            isValid,
            customerName: warranty.customerName,
            batteryId: warranty.batteryId,
            saleDate: warranty.saleDate,
            expiryDate: expiryDate,
            durationMonths: warranty.durationMonths,
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to check warranty' }, { status: 500 });
    }
}
