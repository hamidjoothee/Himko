# HIMKO - Cambridge Physics Practice
## Free Cloud Deployment Instructions

### Option 1: Netlify (Recommended - Free)

1. **Create a Netlify account:**
   - Go to https://netlify.com
   - Sign up with GitHub, GitLab, or Email

2. **Deploy in 30 seconds:**
   - Drag and drop the `himko-physics` folder onto Netlify dashboard
   - OR connect your GitHub and push this folder to a repository
   - Netlify will automatically detect it's a static site and deploy it

3. **Get your free URL:**
   - Your app will be available at something like: `https://himko-physics.netlify.app`
   - You can customize the domain name in settings

---

### Option 2: Vercel (Free)

1. **Create a Vercel account:**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Deploy:**
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel` in the project folder
   - Follow the prompts

3. **Get your free URL:**
   - Your app will be available at something like: `https://himko-physics.vercel.app`

---

### Option 3: GitHub Pages (Free)

1. **Push to GitHub:**
   - Create a new repository on GitHub
   - Push the `himko-physics` folder to the repository

2. **Enable GitHub Pages:**
   - Go to Repository Settings > Pages
   - Select "main" branch and save

3. **Get your free URL:**
   - Your app will be available at: `https://yourusername.github.io/himko-physics/`

---

### Option 4: Firebase Hosting (Free)

1. **Install Firebase CLI:**
   
```
bash
   npm install -g firebase-tools
   firebase login
   
```

2. **Initialize Firebase:**
   
```
bash
   cd himko-physics
   firebase init hosting
   
```
   - Select your Firebase project
   - Set public directory to `.`
   - Configure as single-page app: Yes

3. **Deploy:**
   
```
bash
   firebase deploy
   
```

4. **Get your free URL:**
   - Your app will be available at: `https://your-project.web.app`

---

## Features After Deployment:
- ✅ Accessible from anywhere via URL
- ✅ Works on mobile and desktop
- ✅ No hosting costs
- ✅ SSL (HTTPS) included free
- ✅ Custom domain support (optional)

## Current Version: v1.0
- Grade 8, 9, 10 Physics Questions
- Interactive Quiz Interface
- Score Tracking
- Responsive Design
