@echo off
REM Portfolio Website Startup Script for Windows
REM This script sets up and runs the portfolio website locally

echo.
echo 🚀 Starting Portfolio Website...
echo ==================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm
    pause
    exit /b 1
)

echo ✅ npm detected
npm --version

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo.
    echo 📦 Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed successfully
) else (
    echo ✅ Dependencies already installed
)

REM Create directories if they don't exist
if not exist "client\public\images\projects" mkdir "client\public\images\projects"
if not exist "client\public\certificates" mkdir "client\public\certificates"
if not exist "logs" mkdir "logs"

echo ✅ Project structure verified

REM Start the development servers
echo.
echo 🌟 Starting development servers...
echo    Backend:  http://localhost:5000
echo    Frontend: http://localhost:3000
echo.
echo Press Ctrl+C to stop the servers
echo ==================================
echo.

REM Copy local configuration
if exist "package.local.json" (
    echo.
    echo 📋 Setting up local configuration...
    copy "package.local.json" "package.json" >nul
    echo ✅ Configuration updated
)

REM Start both servers
echo.
echo 🚀 Starting servers...
npm run dev

pause