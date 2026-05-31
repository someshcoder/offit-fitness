# Vercel Deployment Guide for OFFFIT Fitness

## What Changed

Your project is now configured for Vercel deployment with the following changes:

### New Files Created
- **`vercel.json`** - Vercel configuration for build and rewrite rules
- **`api/` folder** - Contains serverless functions that replace the Express server
  - `api/health.js` - Health check endpoint
  - `api/inquiry.js` - Inquiry form endpoint
  - `api/plans.js` - Pricing plans endpoint
  - `api/slots.js` - Time slots endpoint
  - `api/stats.js` - Stats endpoint
- **`.vercelignore`** - Excludes unnecessary files from deployment

### Updated Files
- **`package.json`** - Added `build` script

## Deployment Steps

### 1. Push to Git
```bash
git add .
git commit -m "Configure for Vercel deployment"
git push
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

#### Option B: Using Vercel Dashboard
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your repository from GitHub/GitLab/Bitbucket
4. Click "Deploy"

### 3. Environment Variables (if needed)
In Vercel dashboard → Project Settings → Environment Variables, add:
```
NODE_ENV = production
PORT = 5000
```

## API Endpoints

All API endpoints are now serverless functions:
- `GET /api/health` - Health check
- `POST /api/inquiry` - Submit inquiry form
- `GET /api/plans` - Get pricing plans
- `GET /api/slots` - Get available time slots
- `GET /api/stats` - Get statistics

## Frontend Configuration

No changes needed! Your React frontend will automatically work with the new API setup.

## Troubleshooting

### 404 Errors
- Make sure `vercel.json` is in the root directory
- Ensure rewrite rules are correct
- Check that `client/dist` is built properly

### API Not Responding
- Verify serverless functions are deployed correctly
- Check Vercel function logs: Vercel Dashboard → Deployments → Function logs

### Build Failure
- Ensure `client/package.json` has all dependencies listed
- Check that `npm run build` works locally

## Local Development

Continue using the local setup:
```bash
npm run client    # Terminal 1
npm run server    # Terminal 2
```

The local Express server still works for development.
