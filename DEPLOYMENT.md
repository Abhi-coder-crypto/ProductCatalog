# Netlify Deployment Guide

This guide will walk you through deploying your Forever Living Products application to Netlify.

## Prerequisites

1. A GitHub account
2. A Netlify account (free tier works)
3. A MongoDB Atlas account (or another MongoDB hosting service)

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier M0 works fine)
3. Create a database user with read/write permissions
4. Whitelist all IP addresses (0.0.0.0/0) in Network Access since Netlify uses dynamic IPs
5. Get your connection string (it should look like: `mongodb+srv://username:password@cluster.mongodb.net/database`)

## Step 2: Push to GitHub

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Netlify

1. Log in to [Netlify](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify to access your repositories
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Functions directory**: `netlify/functions`

6. Click "Show advanced" and add environment variables:
   - **Key**: `MONGODB_URI`
   - **Value**: Your MongoDB connection string from Step 1

7. Click "Deploy site"

## Step 4: Seed the Database

After the first deployment, you need to seed your database with categories and products:

### Option 1: Run Locally and Connect to Atlas
```bash
MONGODB_URI="your-mongodb-connection-string" npm run seed
```

### Option 2: Use MongoDB Compass or mongosh
1. Connect to your MongoDB Atlas cluster
2. Import the seed data from `server/seed.ts` manually

## Step 5: Verify Deployment

1. Once deployment completes, click on the site URL provided by Netlify
2. Your application should now be live!
3. Test the following:
   - Homepage loads correctly
   - Categories are displayed
   - Products load when clicking on categories
   - Search functionality works

## Troubleshooting

### Functions not working
- Check the Netlify Functions logs in your Netlify dashboard
- Verify the `MONGODB_URI` environment variable is set correctly
- Make sure your MongoDB Atlas allows connections from all IPs

### Build fails
- Check the build logs in Netlify
- Ensure all dependencies are listed in `package.json`
- Verify Node version is 20.x (set in `netlify.toml`)

### Database connection issues
- Verify your MongoDB connection string is correct
- Check that your MongoDB user has proper permissions
- Ensure Network Access allows all IPs (0.0.0.0/0)

## Environment Variables

Make sure these environment variables are set in Netlify:

- `MONGODB_URI` - Your MongoDB connection string (required)

## Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## Continuous Deployment

Netlify automatically redeploys your site when you push to the main branch on GitHub. Simply:

```bash
git add .
git commit -m "Your commit message"
git push
```

Your site will rebuild and redeploy automatically!

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Serverless Functions Guide](https://docs.netlify.com/functions/overview/)
