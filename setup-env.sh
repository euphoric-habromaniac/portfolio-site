#!/bin/bash

echo "🔧 Environment Setup"
echo "==================="

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✅ .env file created from template"
    echo "📝 Please edit .env file with your configuration"
else
    echo "✅ .env file already exists"
fi

# Set up SSL certificates directory (if using HTTPS)
mkdir -p ssl

echo "🌍 Environment setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your settings"
echo "2. Add SSL certificates to ssl/ directory (if using HTTPS)"
echo "3. Run deployment: ./deploy.sh"
