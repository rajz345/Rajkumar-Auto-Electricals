# PostgreSQL + Vercel Deployment Guide

## 🎯 Quick Start

Your application is now configured for PostgreSQL and ready to deploy to Vercel!

## Step 1: Create Vercel Account & Install CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login
```

## Step 2: Create PostgreSQL Database on Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click "Storage" → "Create Database"
3. Select "Postgres"
4. Choose a name: `rajkumar-auto-db`
5. Select region closest to your users
6. Click "Create"
7. Copy the `DATABASE_URL` (it will be automatically added to your project)

### Option B: Using Vercel CLI

```bash
vercel postgres create rajkumar-auto-db
```

## Step 3: Deploy to Vercel

```bash
# Navigate to project directory
cd "/home/raj/Rajkumar Auto Electricals"

# Deploy (first time)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? [Your account]
# - Link to existing project? No
# - Project name? rajkumar-auto-electricals
# - Directory? ./
# - Override settings? No
```

## Step 4: Link Database to Project

In Vercel Dashboard:
1. Go to your project
2. Settings → Environment Variables
3. The `DATABASE_URL` should already be set (from Step 2)
4. If not, add it manually from your Postgres database settings

## Step 5: Run Database Migrations

After deployment, run migrations:

```bash
# Using Vercel CLI
vercel env pull .env.local
npx prisma migrate deploy

# Or use Vercel's built-in migration support
# Add to package.json scripts:
# "vercel-build": "prisma migrate deploy && next build"
```

## Step 6: Seed Production Database

```bash
# Pull production environment variables
vercel env pull .env.production

# Run seed script
npx tsx prisma/seed.ts
```

## Step 7: Deploy to Production

```bash
vercel --prod
```

Your site will be live at: `https://rajkumar-auto-electricals.vercel.app`

## Alternative: Use Other PostgreSQL Providers

### Supabase

1. Create account at https://supabase.com
2. Create new project
3. Get connection string from Settings → Database
4. Add to Vercel environment variables:
   ```
   DATABASE_URL="postgresql://postgres:[password]@[host]:5432/postgres?sslmode=require"
   ```

### Neon

1. Create account at https://neon.tech
2. Create new project
3. Copy connection string
4. Add to Vercel environment variables

### Railway

1. Create account at https://railway.app
2. Create PostgreSQL database
3. Copy connection string
4. Add to Vercel environment variables

## Verification Checklist

After deployment, verify:

- [ ] Homepage loads with Exide logo
- [ ] Products page displays items from database
- [ ] Admin login works (admin/admin123)
- [ ] Warranty checker functions
- [ ] Contact page loads
- [ ] All navigation links work

## Troubleshooting

### Database Connection Errors

**Error:** `Can't reach database server`
- Check `DATABASE_URL` is set correctly in Vercel
- Ensure database is running
- Verify SSL mode is correct (`?sslmode=require` for most providers)

### Migration Errors

**Error:** `Migration failed`
- Run `npx prisma migrate reset` locally
- Then `npx prisma migrate deploy` in production

### Build Errors

**Error:** `Module not found: @prisma/adapter-pg`
- Ensure all dependencies are in `package.json`
- Run `npm install` locally
- Redeploy

## Environment Variables

Required in Vercel:

```env
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"
NODE_ENV="production"
```

## Useful Commands

```bash
# View deployments
vercel ls

# View logs
vercel logs

# Pull environment variables
vercel env pull

# Run migrations
npx prisma migrate deploy

# Seed database
npx tsx prisma/seed.ts

# Redeploy
vercel --prod
```

## Automatic Deployments

Connect your GitHub repository to Vercel for automatic deployments:

1. Go to Vercel Dashboard → Your Project
2. Settings → Git
3. Connect to GitHub repository
4. Every push to `main` will auto-deploy

## Custom Domain

Add a custom domain in Vercel Dashboard:

1. Go to your project
2. Settings → Domains
3. Add your domain (e.g., `rajkumarauto.com`)
4. Follow DNS configuration instructions

## Production Checklist

Before going live:

- [ ] Change admin password from default
- [ ] Add real product data
- [ ] Test all features thoroughly
- [ ] Set up monitoring/analytics
- [ ] Configure custom domain (optional)
- [ ] Enable HTTPS (automatic with Vercel)

---

**Estimated deployment time: 15-20 minutes**

Your website will be live and accessible worldwide! 🚀
