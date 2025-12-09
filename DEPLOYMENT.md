# Deployment Guide - Rajkumar Auto Electricals

## Platform: Vercel + Turso Database

This guide will walk you through deploying your website to Vercel with Turso as the database.

## Step 1: Set Up Turso Database

### Install Turso CLI
```bash
curl -sSfL https://get.tur.so/install.sh | bash
```

### Create a Turso Account and Database
```bash
# Sign up/login to Turso
turso auth signup
# or if you already have an account
turso auth login

# Create a new database
turso db create rajkumar-auto-electricals

# Get your database URL
turso db show rajkumar-auto-electricals --url

# Create an auth token
turso db tokens create rajkumar-auto-electricals
```

### Update Local Environment
Copy the database URL and auth token, then update your local `.env` file:
```env
DATABASE_URL="libsql://[your-database-url].turso.io"
DATABASE_AUTH_TOKEN="your-auth-token-here"
```

### Migrate Database Schema
```bash
npx prisma db push
```

### Seed Production Database
```bash
npx tsx prisma/seed.ts
```

## Step 2: Deploy to Vercel

### Install Vercel CLI
```bash
npm i -g vercel
```

### Login to Vercel
```bash
vercel login
```

### Deploy the Project
```bash
# First deployment (preview)
vercel

# After testing, deploy to production
vercel --prod
```

### Set Environment Variables in Vercel

During the deployment, Vercel will ask about environment variables. Set:
- `DATABASE_URL` - Your Turso database URL
- `DATABASE_AUTH_TOKEN` - Your Turso auth token

Or set them manually in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add both variables for Production, Preview, and Development

## Step 3: Verify Deployment

After deployment, Vercel will provide a URL. Visit it and test:
- [ ] Homepage loads with Exide logo
- [ ] Products page displays items
- [ ] Warranty check works
- [ ] Contact page loads
- [ ] Admin login works

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` and `DATABASE_AUTH_TOKEN` are set correctly in Vercel
- Check Turso database is active: `turso db list`

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify `npm run build` works locally

### Missing Data
- Re-run seed script: `npx tsx prisma/seed.ts`
- Check database has data: `turso db shell rajkumar-auto-electricals`

## Useful Commands

```bash
# View Turso databases
turso db list

# Access database shell
turso db shell rajkumar-auto-electricals

# View Vercel deployments
vercel ls

# View deployment logs
vercel logs [deployment-url]
```

## Production URLs

After deployment, your site will be available at:
- Production: `https://[your-project].vercel.app`
- Custom domain: (can be configured in Vercel dashboard)

## Updating the Site

To deploy updates:
```bash
git add .
git commit -m "Your update message"
git push  # If connected to Git
# or
vercel --prod  # Direct deployment
```
