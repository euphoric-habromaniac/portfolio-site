@echo off
REM Automated Portfolio Deployment Script for Windows
REM This script handles the complete deployment process locally

setlocal EnableDelayedExpansion

echo.
echo 🚀 Starting Automated Portfolio Deployment
echo ==========================================

REM Check Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Check npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed
    pause
    exit /b 1
)

echo ✅ npm detected
npm --version

REM Setup local environment
echo.
echo ℹ️ Setting up local environment...

REM Copy local configuration files
if exist "package.local.json" (
    copy "package.local.json" "package.json" >nul
    echo ✅ Local package.json configuration applied
) else (
    echo ⚠️ package.local.json not found, using existing package.json
)

REM Install dependencies
echo.
echo ℹ️ Installing dependencies...
npm install --production=false
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed

REM Create necessary directories
echo.
echo ℹ️ Creating directory structure...
if not exist "client\public\images\projects" mkdir "client\public\images\projects"
if not exist "client\public\certificates" mkdir "client\public\certificates"
if not exist "dist" mkdir "dist"
if not exist "logs" mkdir "logs"
echo ✅ Directory structure created

REM Build the application
echo.
echo ℹ️ Building application for production...

echo ✅ Building frontend...
npm run build:client
if %errorlevel% neq 0 (
    echo ❌ Frontend build failed
    pause
    exit /b 1
)

echo ✅ Building backend...
npm run build:server
if %errorlevel% neq 0 (
    echo ❌ Backend build failed
    pause
    exit /b 1
)

echo ✅ Application built successfully

REM Create production startup script
echo.
echo ℹ️ Creating production startup script...

(
echo @echo off
echo echo.
echo echo 🌟 Starting Portfolio Website ^(Production^)
echo echo =========================================
echo.
echo REM Set production environment
echo set NODE_ENV=production
echo if "%%PORT%%"=="" set PORT=3000
echo.
echo echo Environment: %%NODE_ENV%%
echo echo Port: %%PORT%%
echo echo Starting server...
echo.
echo REM Start the production server
echo node dist/index.js
echo.
echo pause
) > start-production.bat

echo ✅ Production startup script created

REM Create PM2 ecosystem file
echo.
echo ℹ️ Creating PM2 configuration...

(
echo module.exports = {
echo   apps: [{
echo     name: 'portfolio-website',
echo     script: 'dist/index.js',
echo     instances: 1,
echo     autorestart: true,
echo     watch: false,
echo     max_memory_restart: '1G',
echo     env: {
echo       NODE_ENV: 'development',
echo       PORT: 3000
echo     },
echo     env_production: {
echo       NODE_ENV: 'production',
echo       PORT: 3000
echo     },
echo     error_file: 'logs/err.log',
echo     out_file: 'logs/out.log',
echo     log_file: 'logs/combined.log',
echo     time: true
echo   }]
echo };
) > ecosystem.config.js

echo ✅ PM2 configuration created

REM Create Docker configuration
echo.
echo ℹ️ Creating Docker configuration...

(
echo FROM node:18-alpine
echo.
echo WORKDIR /app
echo.
echo # Copy package files
echo COPY package.json package-lock.json ./
echo.
echo # Install dependencies
echo RUN npm ci --only=production
echo.
echo # Copy built application
echo COPY dist/ ./dist/
echo COPY client/public/ ./client/public/
echo.
echo # Create non-root user
echo RUN addgroup -g 1001 -S nodejs
echo RUN adduser -S nextjs -u 1001
echo USER nextjs
echo.
echo EXPOSE 3000
echo.
echo CMD ["node", "dist/index.js"]
) > Dockerfile

(
echo node_modules
echo npm-debug.log
echo .git
echo .gitignore
echo README.md
echo .env
echo .nyc_output
echo coverage
echo .vscode
echo .idea
echo *.swp
echo *.swo
) > .dockerignore

(
echo version: '3.8'
echo.
echo services:
echo   portfolio:
echo     build: .
echo     ports:
echo       - "3000:3000"
echo     environment:
echo       - NODE_ENV=production
echo       - PORT=3000
echo     restart: unless-stopped
echo     volumes:
echo       - ./logs:/app/logs
) > docker-compose.yml

echo ✅ Docker configuration created

REM Create deployment verification script
echo.
echo ℹ️ Creating deployment verification...

(
echo @echo off
echo echo.
echo echo 🔍 Verifying Deployment
echo echo =====================
echo.
echo REM Check if build files exist
echo if not exist "dist" ^(
echo     echo ❌ Build directory not found
echo     pause
echo     exit /b 1
echo ^)
echo.
echo if not exist "dist\index.js" ^(
echo     echo ❌ Server build not found
echo     pause
echo     exit /b 1
echo ^)
echo.
echo if not exist "dist\public" ^(
echo     echo ❌ Frontend build not found
echo     pause
echo     exit /b 1
echo ^)
echo.
echo echo ✅ Build files verified
echo echo 🎉 Deployment verification complete!
echo.
echo pause
) > verify-deployment.bat

echo ✅ Deployment verification script created

REM Create deployment summary
echo.
echo ℹ️ Creating deployment summary...

(
echo # Deployment Summary
echo.
echo ## ✅ Deployment Complete!
echo.
echo Your portfolio website has been successfully built and is ready for deployment.
echo.
echo ### 📁 What Was Created:
echo.
echo 1. **Built Application**
echo    - `dist/` - Production-ready application
echo    - `dist/index.js` - Server application
echo    - `dist/public/` - Static frontend files
echo.
echo 2. **Production Scripts**
echo    - `start-production.bat` - Start production server
echo    - `verify-deployment.bat` - Verify deployment health
echo.
echo 3. **Process Management**
echo    - `ecosystem.config.js` - PM2 configuration
echo.
echo 4. **Docker Support**
echo    - `Dockerfile` - Container configuration
echo    - `docker-compose.yml` - Container orchestration
echo.
echo ### 🚀 Deployment Options:
echo.
echo #### Option 1: Direct Server Deployment
echo ```
echo start-production.bat
echo ```
echo.
echo #### Option 2: PM2 Process Manager
echo ```
echo npm install -g pm2
echo pm2 start ecosystem.config.js --env production
echo ```
echo.
echo #### Option 3: Docker Deployment
echo ```
echo docker-compose up -d
echo ```
echo.
echo Your portfolio is now ready for production! 🎉
) > DEPLOYMENT_SUMMARY.md

echo ✅ Deployment summary created

REM Run verification
echo.
echo ℹ️ Running deployment verification...
call verify-deployment.bat

REM Final success message
echo.
echo 🎉 DEPLOYMENT COMPLETE! 🎉
echo =========================
echo.
echo ✅ Portfolio website successfully built and configured
echo ✅ Production files created in dist\ directory
echo ✅ Multiple deployment options available
echo.
echo ℹ️ Read DEPLOYMENT_SUMMARY.md for detailed instructions
echo.
echo ℹ️ To start immediately:
echo    Production: start-production.bat
echo    PM2: pm2 start ecosystem.config.js --env production
echo    Docker: docker-compose up -d
echo.
echo ✅ Your portfolio is ready for deployment! 🚀
echo.

pause