# Rajkumar Auto Electricals - Official Website

Official website for Rajkumar Auto Electricals, an authorized Exide Battery dealer in Balangir, Odisha.

## 🚀 Features

- **Modern Design**: Responsive website with Exide brand colors (Red, White, Grey)
- **Product Catalog**: Browse batteries for Bikes, Cars, and Heavy Duty vehicles
- **Warranty Checker**: Check warranty status using battery serial number
- **Admin Dashboard**: Manage products and warranty records
- **Service Information**: Details about battery installation and services
- **Contact Page**: Google Maps integration and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: SQLite with Prisma ORM
- **Styling**: Vanilla CSS
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🔧 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd "Rajkumar Auto Electricals"

# Install dependencies
npm install

# Set up environment variables
echo 'DATABASE_URL="file:./dev.db"' > .env

# Run database migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate

# Start development server
npm run dev
```

Visit http://localhost:3000 to view the website.

## 🔐 Admin Access

**URL**: http://localhost:3000/admin/login

**Credentials**:
- Username: `admin`
- Password: `admin123`

> ⚠️ **Security Note**: Change these default credentials in production!

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── components/        # Reusable components
│   ├── products/          # Products page
│   ├── services/          # Services page
│   ├── warranty/          # Warranty checker
│   └── contact/           # Contact page
├── prisma/                # Database schema and migrations
├── lib/                   # Utility functions
└── public/                # Static assets

```

## ⚠️ Known Issues

### Prisma v7 Compatibility
The Products page currently has compatibility issues with Prisma v7. 

**Workaround**: Downgrade to Prisma v6
```bash
npm install prisma@6 @prisma/client@6
npx prisma generate
```

## 🎯 Features Status

✅ Home Page  
✅ Services Page  
✅ Contact Page with Google Maps  
✅ Warranty Checker  
✅ Admin Authentication  
✅ Admin Dashboard  
⚠️ Products Page (Prisma v7 issue)

## 📞 Contact

**Rajkumar Auto Electricals**  
Near Ramai Talkies, Balangir, Odisha  
Phone: +91 98765 43210  
Email: info@rajkumarauto.com

## 📄 License

This project is proprietary software for Rajkumar Auto Electricals.

---

Built with ❤️ for Rajkumar Auto Electricals
