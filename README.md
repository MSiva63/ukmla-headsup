# ukmla-headsup
A "Heads Up" style game to make studying medical conditions more fun
[README.md](https://github.com/user-attachments/files/25210845/README.md)

# UKMLA Heads Up - Medical Conditions Game

A mobile-first, landscape-only Heads Up-style game for UK medical students preparing for the UKMLA.

## 🚀 Quick Start (Deploy in 2 Minutes)

### Option 1: Deploy to Vercel (Recommended - FREE)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 on your computer

3. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (free)
   - Click "Add New Project"
   - Import this folder
   - Click "Deploy"
   - You'll get a URL like `https://ukmla-headsup.vercel.app`

4. **Open on your phone:**
   - Visit your Vercel URL on your phone
   - Tap Share → Add to Home Screen
   - Now it works like a real app!

### Option 2: Deploy to Netlify (Also FREE)

1. **Build the app:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `out` folder to Netlify
   - Get instant URL

### Option 3: GitHub Pages (FREE)

1. **Install and build:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to GitHub:**
   - Create a new repo
   - Upload the `out` folder
   - Enable GitHub Pages in settings
   - Access at `https://yourusername.github.io/ukmla-headsup`

## 📱 How to Use on Phone

### iOS (Safari):
1. Open the deployed URL
2. Tap the Share button
3. Scroll and tap "Add to Home Screen"
4. The app icon appears on your home screen
5. Open it - it runs fullscreen like a native app

### Android (Chrome):
1. Open the deployed URL
2. Tap the three dots menu
3. Tap "Add to Home Screen"
4. The app appears in your app drawer

## 🎮 How to Play

1. **Setup:**
   - Create 2-6 teams
   - Choose a deck (Core UKMLA, Paediatrics, Surgery, Finals)

2. **Gameplay:**
   - Hold phone in **landscape mode**
   - Player with phone does NOT look at screen
   - Team asks yes/no questions
   - Tap LEFT half = Correct (+1 point)
   - Tap RIGHT half = Skip

3. **Scoring:**
   - Each team plays a round
   - Leaderboard shows after each round
   - Play multiple rounds

## 🏗️ Project Structure

```
ukmla-headsup/
├── lib/data/ukmla/          # UKMLA content (easy to add more)
│   ├── core.ts              # Core conditions
│   ├── paeds.ts             # Paediatrics
│   ├── surgery.ts           # Surgery
│   ├── finals.ts            # Finals favourites
│   └── index.ts             # Export all decks
├── components/
│   └── HeadsUpGame.tsx      # Main game logic
├── app/
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # App layout
│   └── globals.css          # Styles
└── public/
    └── manifest.json        # PWA config
```

## ✨ Features

- ✅ Mobile-first, landscape-only design
- ✅ Tap-based input (no sensors needed)
- ✅ 60+ UKMLA conditions across 4 decks
- ✅ Multiplayer (2-6 teams)
- ✅ Progressive Web App (install like native app)
- ✅ Works offline after first load
- ✅ No app store needed
- ✅ Clean data architecture (easy to add conditions)

## 🎨 Adding More Conditions

Edit files in `lib/data/ukmla/`:

```typescript
// Example: Add to core.ts
{
  id: 'c21',
  answer: 'New Condition Name',
  category: 'Specialty',
  difficulty: 'medium',
  allowedClues: ['clue1', 'clue2'],
  forbiddenClues: ['obvious', 'giveaway']
}
```

## 🔧 Technical Details

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Export:** Static HTML (works anywhere)
- **PWA:** Manifest for home screen install

## 🆘 Troubleshooting

**"Portrait mode" warning won't go away:**
- Make sure phone is fully rotated to landscape
- Check that rotation lock is OFF in phone settings

**App won't install to home screen:**
- Make sure you're using Safari (iOS) or Chrome (Android)
- Try clearing browser cache and reloading

**Vercel deployment fails:**
- Make sure `package.json` is in root folder
- Run `npm install` before deploying

## 📝 License

MIT - Free to use and modify for medical education

## 🤝 Contributing

Want to add more conditions or features? 
- Fork the repo
- Add your conditions to `lib/data/ukmla/`
- Submit a pull request

---

**Made for UK medical students by medical students** 🩺
