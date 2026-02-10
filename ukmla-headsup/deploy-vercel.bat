@echo off
echo.
echo 🚀 Deploying UKMLA Heads Up to Vercel
echo ======================================
echo.

REM Check if vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📦 Installing Vercel CLI...
    call npm install -g vercel
    echo.
)

echo ✅ Vercel CLI ready
echo.

REM Build the project first
echo 🔨 Building project...
call npm install
call npm run build
echo.

REM Deploy
echo 🌐 Deploying to Vercel...
echo.
call vercel --prod

echo.
echo ✅ Deployment complete!
echo 📱 Open the URL above on your phone and add to home screen
pause
