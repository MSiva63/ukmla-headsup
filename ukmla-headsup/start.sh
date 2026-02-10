#!/bin/bash

echo "🎮 UKMLA Heads Up - Quick Start"
echo "================================"
echo ""

# Check if node is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed"
    echo "📥 Please install Node.js from: https://nodejs.org"
    echo ""
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🚀 Starting development server..."
echo "📱 Open http://localhost:3000 in your browser"
echo "💡 Press Ctrl+C to stop"
echo ""

npm run dev
