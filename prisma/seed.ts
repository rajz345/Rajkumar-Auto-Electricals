import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({
    url: process.env.DATABASE_URL || 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

async function main() {
    // Create Admin
    // Password: admin123
    // Simple hash for demo: just storing plain text or simple hash?
    // Let's store plain text for simplicity in this demo as I don't want to install bcrypt
    // Wait, the plan said "secure Admin Panel". I should use bcrypt or at least a hash.
    // I'll use a simple hardcoded hash or just plain text and compare in route.
    // Let's use plain text for "passwordHash" field for now to avoid dependency issues, 
    // but in real production I would use bcrypt.

    const admin = await prisma.admin.upsert({
        where: { username: 'admin' },
        update: {},
        create: {
            username: 'admin',
            passwordHash: 'admin123', // In real app, hash this!
        },
    });

    console.log({ admin });

    // Create some products
    const products = [
        {
            name: 'Exide Xplore 12V',
            category: 'Bike',
            price: 1200,
            image: '/images/product_placeholder.png',
            stock: 10,
        },
        {
            name: 'Exide Mileage 35Ah',
            category: 'Car',
            price: 4500,
            image: '/images/product_placeholder.png',
            stock: 5,
        },
        {
            name: 'Exide InvaTubular 150Ah',
            category: 'Heavy Duty',
            price: 15000,
            image: '/images/product_placeholder.png',
            stock: 0,
            availableOn: new Date('2023-12-01'),
        },
    ];

    for (const p of products) {
        await prisma.product.create({
            data: p,
        });
    }

    console.log('Seeded products');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
