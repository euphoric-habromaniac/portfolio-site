#!/bin/bash

echo "🔍 Verifying Deployment"
echo "====================="

# Check if build files exist
if [ ! -d "dist" ]; then
    echo "❌ Build directory not found"
    exit 1
fi

if [ ! -f "dist/index.js" ]; then
    echo "❌ Server build not found"
    exit 1
fi

if [ ! -d "dist/public" ]; then
    echo "❌ Frontend build not found"
    exit 1
fi

echo "✅ Build files verified"

# Test server startup (quick test)
echo "🧪 Testing server startup..."
timeout 10s node dist/index.js &
SERVER_PID=$!

sleep 3

if ps -p $SERVER_PID > /dev/null; then
    echo "✅ Server starts successfully"
    kill $SERVER_PID
else
    echo "❌ Server failed to start"
    exit 1
fi

echo "🎉 Deployment verification complete!"
