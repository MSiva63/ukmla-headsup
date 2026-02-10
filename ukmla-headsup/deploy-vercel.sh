#!/bin/bash

echo "🚀 Deploying UKMLA Heads Up to Vercel"
echo "======================================"
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
    echo ""
fi

echo "✅ Vercel CLI ready"
echo ""

# Build the project first
echo "🔨 Building project..."
npm install
npm run build
echo ""

# Deploy
echo "🌐 Deploying to Vercel..."
echo ""
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "📱 Open the URL above on your phone and add to home screen"
