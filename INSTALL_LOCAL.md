# Quick Local Installation Guide

## Step 1: Copy the Local Files
Replace your current `package.json` with `package.local.json`:
```bash
cp package.local.json package.json
```

## Step 2: Install Dependencies
```bash
npm install
```

## Step 3: Start the Servers
```bash
# Option 1: Start both servers together
npm run dev

# Option 2: Start them separately (in different terminals)
npm run dev:server    # Backend on port 5000
npm run dev:client    # Frontend on port 3000
```

## Step 4: Open Your Browser
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Alternative: Use the Startup Scripts
- **Windows**: Double-click `start.bat`
- **Mac/Linux**: Run `./start.sh`

## Adding Content
- **Projects**: Add JSON files to `projects/` folder
- **Certificates**: Add JSON files to `certifications/` folder  
- **Images**: Add to `client/public/images/` or `client/public/certificates/`

## Troubleshooting
- Make sure you have Node.js 18+ installed
- If ports are busy, change them in the config files
- Run `npm install` if you see dependency errors

That's it! Your portfolio will work exactly like it does on Replit.