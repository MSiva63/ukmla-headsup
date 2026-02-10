# 🚀 DEPLOYMENT GUIDE - Get Your Game Online in Minutes

## What You Have

A complete, production-ready UKMLA Heads Up game that works on phones. This guide will get it online so you can share it with your study group.

---

## 🎯 EASIEST METHOD: Vercel (Recommended)

**Time: 2-3 minutes | Cost: FREE forever**

### Step 1: Install Node.js (if you don't have it)
1. Go to https://nodejs.org
2. Download the LTS version
3. Install it (just click Next through the installer)

### Step 2: Get the Code Ready
1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to the `ukmla-headsup` folder:
   ```bash
   cd path/to/ukmla-headsup
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" → Continue with GitHub
3. Once logged in, click "Add New" → "Project"
4. Click "Deploy" button without importing (we'll upload manually)
5. Drag the entire `ukmla-headsup` folder into Vercel
6. Wait 30-60 seconds
7. You'll get a URL like: `https://ukmla-headsup-abc123.vercel.app`

### Step 4: Use on Your Phone
1. Open the Vercel URL on your phone
2. **iOS:** Tap Share → Add to Home Screen
3. **Android:** Tap Menu (⋮) → Add to Home Screen
4. Done! It's now an app icon on your phone

---

## 🔄 ALTERNATIVE: Netlify

**Time: 2 minutes | Cost: FREE**

### Quick Deploy
1. Run these commands:
   ```bash
   npm install
   npm run build
   ```
2. Go to https://netlify.com
3. Sign up (free)
4. Drag the `out` folder onto Netlify's dashboard
5. Get instant URL

---

## 📤 SIMPLEST: Single HTML File

Want to just email it to friends? I can create a single `.html` file that works without any deployment.

---

## 🎨 Customization Before Deploying

### Add More Conditions
Edit `lib/data/ukmla/core.ts` (or paeds.ts, surgery.ts, finals.ts):

```typescript
{
  id: 'c21',
  answer: 'Addison\'s Disease',
  category: 'Endocrine',
  difficulty: 'medium',
  allowedClues: ['bronze skin', 'low cortisol', 'postural hypotension'],
  forbiddenClues: ['adrenal insufficiency']
}
```

### Change Colors
Edit `lib/data/ukmla/core.ts` - change the `color` field:
```typescript
color: 'from-blue-500 to-indigo-600'  // Tailwind gradient classes
```

---

## 📱 Sharing with Your Study Group

### After Deploying:
1. **Get the URL** from Vercel/Netlify
2. **Share it** via WhatsApp/iMessage
3. **Tell them:**
   - Open in Safari (iOS) or Chrome (Android)
   - Add to Home Screen
   - Rotate to landscape to play

### Pro Tips:
- Create a QR code of the URL (use qr-code-generator.com)
- Print it on study room posters
- Add it to your med school Facebook/Discord

---

## 🆘 Common Issues

### "npm: command not found"
- You need to install Node.js first (see Step 1 above)

### "Portrait mode warning won't disappear"
- Make sure rotation lock is OFF
- Physically rotate phone to landscape
- Some Android phones have a separate landscape mode toggle

### Vercel says "Build failed"
- Make sure you uploaded the entire folder, not just files
- Check that `package.json` is in the root

### App doesn't install to home screen
- **iOS:** Must use Safari browser
- **Android:** Must use Chrome browser
- Make sure you're visiting via HTTPS (Vercel/Netlify do this automatically)

---

## 🎓 Advanced: Your Own Domain

Want `ukmla.youruniversity.ac.uk`?

1. Deploy to Vercel (above)
2. Buy a domain or use your uni's
3. In Vercel → Settings → Domains → Add your domain
4. Follow DNS instructions
5. Now it's on your own URL!

---

## 💾 Keeping It Updated

Made changes to the conditions?

### Vercel:
1. Just drag the folder to Vercel again
2. It auto-deploys the new version

### Netlify:
1. Run `npm run build`
2. Drag new `out` folder to Netlify

---

## 🎉 You're Done!

Your game is now:
- ✅ Live on the internet
- ✅ Accessible from any phone
- ✅ Installable like a real app
- ✅ Free forever (no server costs)
- ✅ Shareable with entire cohort

**Now go ace that UKMLA! 🩺📚**
