# 🚀 Quick Deployment Reference

## Prerequisites
- Node.js installed ✅
- Project builds successfully ✅

## Installation Commands

```bash
# 1. Install Turso CLI
curl -sSfL https://get.tur.so/install.sh | bash

# 2. Install Vercel CLI
npm install -g vercel
```

## Turso Setup (5 minutes)

```bash
# Login/Signup
turso auth signup

# Create database
turso db create rajkumar-auto-electricals

# Get credentials
turso db show rajkumar-auto-electricals --url
turso db tokens create rajkumar-auto-electricals

# Migrate & seed
npx prisma db push
npx tsx prisma/seed.ts
```

## Vercel Deployment (3 minutes)

```bash
# Login
vercel login

# Deploy
cd "/home/raj/Rajkumar Auto Electricals"
vercel

# Set environment variables in Vercel dashboard:
# - DATABASE_URL
# - DATABASE_AUTH_TOKEN

# Deploy to production
vercel --prod
```

## Environment Variables

Add these in Vercel dashboard (Settings → Environment Variables):

```
DATABASE_URL=libsql://rajkumar-auto-electricals-[your-org].turso.io
DATABASE_AUTH_TOKEN=eyJhbGc...
```

## Verification URLs

After deployment, test these pages:
- `/` - Homepage with Exide logo
- `/products` - Products from database
- `/admin/login` - Admin panel (admin/admin123)
- `/warranty` - Warranty checker
- `/contact` - Contact page

## Quick Troubleshooting

**Database errors?** → Check environment variables in Vercel
**Build fails?** → Run `npm run build` locally first
**No products?** → Re-run `npx tsx prisma/seed.ts`

---

📖 **Full Guide:** See [DEPLOYMENT.md](file:///home/raj/Rajkumar%20Auto%20Electricals/DEPLOYMENT.md)
📋 **Detailed Walkthrough:** See deployment walkthrough artifact
