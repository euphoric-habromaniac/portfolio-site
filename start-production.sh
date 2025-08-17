#!/bin/bash

echo "🌟 Starting Portfolio Website (Production)"
echo "========================================="

# Set production environment
export NODE_ENV=production
export PORT=${PORT:-3000}

echo "Environment: $NODE_ENV"
echo "Port: $PORT"
echo "Starting server..."

# Start the production server
node dist/index.js
