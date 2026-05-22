# 🎮 WUWA MBTI — GitHub Pages Deployment Guide

## Project Structure

```
wuwa-mbti/
├── index.html          ← Main entry point (open this in browser)
├── css/
│   └── style.css       ← All styling (dark futuristic Wuthering Waves theme)
├── js/
│   ├── data.js         ← All character data + MBTI questions + descriptions
│   └── script.js       ← All app logic (test engine, character matching, UI)
└── README.md           ← This file
```

---

## ✅ Step-by-Step GitHub Pages Deployment

### Step 1 — Create a GitHub Account
If you don't have one, go to [github.com](https://github.com) and sign up for free.

---

### Step 2 — Create a New Repository
1. Click the **"+"** icon in the top right → **"New repository"**
2. Name it exactly: `wuwa-mbti` (or any name you like)
3. Set it to **Public** (required for free GitHub Pages)
4. ✅ Check **"Add a README file"**
5. Click **"Create repository"**

---

### Step 3 — Upload Your Files

#### Option A: Drag and Drop (Easiest)
1. Open your repository on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop **all files and folders** from your `wuwa-mbti/` folder
4. Scroll down, add a commit message like `"Initial upload"`
5. Click **"Commit changes"**

> ⚠️ Make sure the folder structure matches exactly:
> - `index.html` at the **root level**
> - `css/style.css`
> - `js/data.js`
> - `js/script.js`

#### Option B: GitHub Desktop (Recommended for Updates)
1. Download [GitHub Desktop](https://desktop.github.com)
2. Clone your repository locally
3. Copy your project files into the cloned folder
4. Commit and push from GitHub Desktop

#### Option C: Git Command Line
```bash
git clone https://github.com/YOUR_USERNAME/wuwa-mbti.git
cd wuwa-mbti
# copy your files here
git add .
git commit -m "Add WUWA MBTI test"
git push origin main
```

---

### Step 4 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **"Settings"** (the gear icon)
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **"Save"**

---

### Step 5 — Wait & Visit Your Site
- GitHub Pages takes **1–3 minutes** to deploy
- Your site URL will be:
  ```
  https://YOUR_USERNAME.github.io/wuwa-mbti/
  ```
- GitHub will show you the URL in the Pages settings once it's live

---

## 🔄 Updating Your Site
After initial deployment, any changes you push to the `main` branch automatically update your live site within 1–2 minutes.

---

## 🛠 Local Testing
To test locally before uploading:
1. Open the `wuwa-mbti/` folder
2. Double-click `index.html` to open in your browser
3. The site works entirely from local files — no server needed!

> 💡 **Tip**: For the best local experience, use [VS Code](https://code.visualstudio.com) with the **Live Server** extension.

---

## 📱 Features
- ✅ **50-question MBTI test** with 5-point Likert scale answers
- ✅ **All 16 MBTI personality types** with descriptions
- ✅ **40+ Wuthering Waves characters** (v1.0 to v3.3)
- ✅ **Character matching** based on MBTI result
- ✅ **Search & filter** character browser
- ✅ **Character modals** with full lore
- ✅ **Particle background effects**
- ✅ **Dark/Light mode toggle** (persists in localStorage)
- ✅ **Ambient audio** toggle (Web Audio API generated drone)
- ✅ **Share result** (Web Share API + clipboard fallback)
- ✅ **Fully responsive** — works on mobile and desktop
- ✅ **Zero external dependencies** — pure HTML/CSS/JS

---

## 🎨 Customization

### Adding Character Images
Replace the CDN image URLs in `js/data.js` with actual hosted images:
```js
image: "https://your-cdn.com/your-character-image.png",
```
Or host images in an `assets/images/` folder and reference them as:
```js
image: "assets/images/character-name.png",
```

### Adding New Characters
In `js/data.js`, add a new entry to the `wuwaCharacters` array:
```js
{
  name: "New Character",
  mbti: "INTJ",
  element: "Aero",         // Aero | Electro | Fusion | Glacio | Havoc | Spectro
  weapon: "Sword",         // Sword | Broadblade | Gauntlets | Pistols | Rectifier | Spear
  rarity: 5,               // 4 or 5
  role: "DPS",
  version: "3.4",
  image: "URL_HERE",
  lore: "Character lore description.",
  whyMatch: "Why this MBTI matches this character.",
  funFacts: ["Fact 1", "Fact 2", "Fact 3"]
}
```

### Changing Colors
Edit the CSS variables in `css/style.css` under `:root { ... }`:
```css
--accent-primary: #00d4ff;   /* Main cyan glow color */
--accent-secondary: #7b5ea7; /* Purple accent */
--accent-gold: #f0c060;      /* Gold/5-star color */
```

---

## ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| Site shows 404 | Make sure `index.html` is at the root of your repo, not inside a subfolder |
| Images not loading | This is expected — images use a community CDN that may be rate-limited. The site shows placeholder icons as fallback |
| CSS not loading | Check that `css/style.css` path matches exactly (case-sensitive on GitHub) |
| JS errors in console | Make sure all 3 script files are uploaded: `data.js`, `script.js` |
| Audio doesn't work | Click the ♪ button — browsers require user interaction before playing audio |

---

## 📄 License & Credits
- Fan-made project, not affiliated with Kuro Games
- Wuthering Waves © Kuro Games
- MBTI is a registered trademark of the Myers-Briggs Company
- This project is for entertainment purposes only
