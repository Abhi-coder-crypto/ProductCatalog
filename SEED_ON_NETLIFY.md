# How to Seed Your Database on Netlify

## Quick Fix: Seed Via Netlify Function

I've created a special one-time function to seed your database directly on Netlify.

### Steps:

1. **Push the new seed function to GitHub:**
   ```bash
   git add .
   git commit -m "Add database seed function"
   git push
   ```

2. **Wait for Netlify to redeploy** (usually takes 1-2 minutes)

3. **Call the seed endpoint ONCE:**
   
   Visit this URL in your browser:
   ```
   https://your-site-name.netlify.app/.netlify/functions/seed-database
   ```
   
   Or use curl:
   ```bash
   curl https://your-site-name.netlify.app/.netlify/functions/seed-database
   ```

4. **You should see:**
   ```json
   {
     "message": "Database seeded successfully!",
     "success": true
   }
   ```

5. **Refresh your site** - Products should now appear!

## Troubleshooting

### If you see "Failed to seed database":

1. **Check your MongoDB connection string format:**
   Should look like: `mongodb+srv://username:password@cluster.mongodb.net/database`

2. **MongoDB Atlas IP Whitelist:**
   - Go to MongoDB Atlas → Network Access
   - Make sure `0.0.0.0/0` (all IPs) is whitelisted
   - Netlify uses dynamic IPs so you can't whitelist specific ones

3. **Check the function logs:**
   - Netlify Dashboard → Functions → `seed-database`
   - Look for the error message

### Common MongoDB Connection String Mistakes:

❌ Wrong: `mongodb://localhost:27017/database` (local only)
✅ Right: `mongodb+srv://user:pass@cluster.mongodb.net/database`

❌ Wrong: Missing database name at the end
✅ Right: Include `/databasename` after the host

## After Seeding

Once you see success, you can:
1. Delete the seed function (optional - it's safe to leave)
2. Your products and categories are now in MongoDB
3. The app will load them automatically

## Alternative: Seed Locally

If you prefer to seed from your local machine:

```bash
MONGODB_URI="your-mongodb-uri" npm run seed
```

This connects to your Atlas database and seeds it from your computer.
