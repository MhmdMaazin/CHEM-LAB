# Security Fix: Exposed API Keys

## 🚨 URGENT: API Keys Exposed in Repository

Your API keys have been exposed in your GitHub repository. Follow these steps immediately to secure your application.

## Immediate Actions Required

### 1. Revoke Exposed API Keys
- **Gemini API**: Go to [Google AI Studio](https://makersuite.google.com/app/apikey) and revoke the exposed key, then create a new one
- **Firebase**: Go to [Firebase Console](https://console.firebase.google.com) → Project Settings → Service Accounts → Generate new private key

### 2. Add .env to .gitignore
The `.env` file is already in `.gitignore`, but verify it contains:
```
# Environment variables
.env
.env.local
.env.production
.env.staging
```

### 3. Update Environment Variables

1. **Create a new .env file** (if you haven't already):
   ```bash
   cp .env.example .env
   ```

2. **Add your new API keys** to `.env`:
   ```
   # Gemini API Key
   VITE_GEMINI_API_KEY=your_new_gemini_api_key_here
   
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_new_firebase_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

### 4. Clean Git History (Optional but Recommended)

To completely remove the exposed keys from git history:

```bash
# Install git-filter-repo (if not installed)
pip install git-filter-repo

# Remove sensitive files from history
git filter-repo --path .env --invert-paths
git filter-repo --path src/firebase.ts --invert-paths
git filter-repo --path src/utils/geminiApi.ts --invert-paths

# Force push to remote (⚠️ This rewrites history)
git push origin --force --all
```

### 5. Update Vercel Environment Variables

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add the following variables:
   - `VITE_GEMINI_API_KEY` = your_new_gemini_api_key
   - `VITE_FIREBASE_API_KEY` = your_new_firebase_api_key
   - All other Firebase variables

### 6. Redeploy

After setting environment variables in Vercel, redeploy your application.

## Files Updated

- ✅ `.env` - Removed actual keys, added placeholders
- ✅ `.env.example` - Created template file
- ✅ `src/firebase.ts` - Updated to use environment variables
- ✅ `src/utils/geminiApi.ts` - Updated to use environment variables and removed debug logging

## Security Best Practices

1. **Never commit API keys to git**
2. **Use environment variables for all sensitive data**
3. **Rotate API keys regularly**
4. **Use different keys for development and production**
5. **Enable API key restrictions (referrer, IP, etc.)**

## Next Steps

1. **Immediately revoke exposed API keys** at their respective providers
2. **Set up new keys** in environment variables
3. **Update Vercel environment variables**
4. **Test your application** to ensure everything works
5. **Consider setting up API key restrictions** for additional security