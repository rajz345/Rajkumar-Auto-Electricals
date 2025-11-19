import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { query } = body; // Can be batteryId or saleDate (though saleDate is not unique, usually Serial Number)

        // We assume query is the Battery ID (Serial Number)
        const warranty = await prisma.warranty.findFirst({
            where: {
                batteryId: query,
            },
        });

        if (!warranty) {
            return NextResponse.json({ found: false, message: 'Warranty not found' });
        }

        const saleDate = new Date(warranty.saleDate);
        const expiryDate = new Date(saleDate);
        expiryDate.setMonth(expiryDate.getMonth() + warranty.durationMonths);

        const now = new Date();
        const isValid = now <= expiryDate;

        return NextResponse.json({
            found: true,
            isValid,
            customerName: warranty.customerName,
            saleDate: warranty.saleDate,
            expiryDate: expiryDate,
            durationMonths: warranty.durationMonths,
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to check warranty' }, { status: 500 });
    }
}
