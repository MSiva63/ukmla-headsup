# 🚀 QUICK START - Get Playing in 60 Seconds

## Method 1: Test Locally Right Now

### Mac/Linux:
```bash
cd ukmla-headsup
./start.sh
```

### Windows:
```cmd
cd ukmla-headsup
start.bat
```

Then open http://localhost:3000 on your computer or phone (if on same WiFi).

---

## Method 2: Deploy & Share (2 minutes)

### Fastest: Vercel
1. Visit https://vercel.com
2. Sign up with GitHub (free)
3. Drag the `ukmla-headsup` folder to Vercel
4. Get URL instantly
5. Share with friends

### Alternative: Netlify
1. In terminal: `npm install && npm run build`
2. Go to https://netlify.com
3. Drag the `out` folder
4. Done!

---

## On Your Phone

1. **Open the URL** (from Vercel/Netlify)
2. **Add to Home Screen:**
   - iOS: Share → Add to Home Screen
   - Android: Menu → Add to Home Screen
3. **Open the app** from your home screen
4. **Rotate to landscape**
5. **Play!**

---

## Game Controls

- **LEFT half of screen** = Correct (✅ +1 point)
- **RIGHT half of screen** = Skip (⏭️)
- **Don't look** at the screen if you're holding the phone!

---

## Adding More Conditions

Edit these files:
- `lib/data/ukmla/core.ts` - Core conditions
- `lib/data/ukmla/paeds.ts` - Paediatrics
- `lib/data/ukmla/surgery.ts` - Surgery
- `lib/data/ukmla/finals.ts` - Finals

Format:
```typescript
{
  id: 'unique-id',
  answer: 'Condition Name',
  category: 'Specialty',
  difficulty: 'easy' | 'medium' | 'hard',
  allowedClues: ['clue1', 'clue2'],
  forbiddenClues: ['giveaway']
}
```

---

## Need Help?

📖 Read `DEPLOYMENT_GUIDE.md` for detailed instructions
📝 Read `README.md` for full documentation

---

**Ready to ace the UKMLA! 🩺**
