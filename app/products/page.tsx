import { prisma } from '@/lib/prisma';
import ProductsClient from './ProductsClient';

export const dynamic = 'force-dynamic';

export default async function Products({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const params = await searchParams;
    const category = params.category;
    const where = category ? { category } : {};

    const products = await prisma.product.findMany({
        where,
        orderBy: { createdAt: 'desc' },
    });

    return <ProductsClient products={products} category={category} />;
}
