#!/bin/bash
# Quick Start Guide for Product Explorer Dashboard

echo "🚀 Product Explorer Dashboard - Quick Start"
echo "==========================================="
echo ""

# Check Node.js
echo "✓ Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+"
    exit 1
fi
echo "  Node version: $(node -v)"
echo ""

# Check npm
echo "✓ Checking npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install npm"
    exit 1
fi
echo "  npm version: $(npm -v)"
echo ""

# Install dependencies (if node_modules doesn't exist)
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start development server
echo "🎯 Starting development server..."
echo "📍 Open http://localhost:3000 in your browser"
echo ""
npm run dev
