const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createAdmin() {
    try {
        // Check if admin already exists
        const existing = await prisma.admin.findUnique({
            where: { username: 'admin' }
        });

        if (existing) {
            console.log('Admin user already exists');
            return;
        }

        // Create admin user
        const admin = await prisma.admin.create({
            data: {
                username: 'admin',
                passwordHash: 'admin123'
            }
        });

        console.log('Admin user created successfully:', admin);
    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        await prisma.$disconnect();
    }
}

createAdmin();
