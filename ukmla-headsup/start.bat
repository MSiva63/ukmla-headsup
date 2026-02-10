@echo off
echo.
echo 🎮 UKMLA Heads Up - Quick Start
echo ================================
echo.

REM Check if node is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed
    echo 📥 Please install Node.js from: https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js found
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
    echo.
)

echo 🚀 Starting development server...
echo 📱 Open http://localhost:3000 in your browser
echo 💡 Press Ctrl+C to stop
echo.

call npm run dev
