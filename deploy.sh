#!/bin/bash

# Automated Portfolio Deployment Script
# This script handles the complete deployment process locally

set -e  # Exit on any error

echo "🚀 Starting Automated Portfolio Deployment"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check prerequisites
print_info "Checking prerequisites..."

# Check Node.js
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt "18" ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_status "Node.js $(node -v) detected"

# Check npm
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed"
    exit 1
fi

print_status "npm $(npm -v) detected"

# Setup local environment
print_info "Setting up local environment..."

# Copy local configuration files
if [ -f "package.local.json" ]; then
    cp package.local.json package.json
    print_status "Local package.json configuration applied"
else
    print_warning "package.local.json not found, using existing package.json"
fi

# Install dependencies
print_info "Installing dependencies..."
npm install --production=false
print_status "Dependencies installed"

# Create necessary directories
print_info "Creating directory structure..."
mkdir -p client/public/images/projects
mkdir -p client/public/certificates
mkdir -p dist
mkdir -p logs

print_status "Directory structure created"

# Build the application
print_info "Building application for production..."

# Build frontend
print_status "Building frontend..."
npm run build:client

# Build backend
print_status "Building backend..."
npm run build:server

print_status "Application built successfully"

# Create production startup script
print_info "Creating production startup script..."

cat > start-production.sh << 'EOF'
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
EOF

chmod +x start-production.sh
print_status "Production startup script created"

# Create PM2 ecosystem file for process management
print_info "Creating PM2 configuration..."

cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'portfolio-website',
    script: 'dist/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_file: 'logs/combined.log',
    time: true
  }]
};
EOF

print_status "PM2 configuration created"

# Create Docker support (optional)
print_info "Creating Docker configuration..."

cat > Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production

# Copy built application
COPY dist/ ./dist/
COPY client/public/ ./client/public/

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

EXPOSE 3000

CMD ["node", "dist/index.js"]
EOF

cat > .dockerignore << 'EOF'
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
.vscode
.idea
*.swp
*.swo
EOF

cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs
EOF

print_status "Docker configuration created"

# Create deployment verification script
print_info "Creating deployment verification..."

cat > verify-deployment.sh << 'EOF'
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
EOF

chmod +x verify-deployment.sh
print_status "Deployment verification script created"

# Create environment setup script
print_info "Creating environment setup..."

cat > setup-env.sh << 'EOF'
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
EOF

chmod +x setup-env.sh
print_status "Environment setup script created"

# Run verification
print_info "Running deployment verification..."
./verify-deployment.sh

# Create deployment summary
print_info "Creating deployment summary..."

cat > DEPLOYMENT_SUMMARY.md << 'EOF'
# Deployment Summary

## ✅ Deployment Complete!

Your portfolio website has been successfully built and is ready for deployment.

### 📁 What Was Created:

1. **Built Application**
   - `dist/` - Production-ready application
   - `dist/index.js` - Server application
   - `dist/public/` - Static frontend files

2. **Production Scripts**
   - `start-production.sh` - Start production server
   - `verify-deployment.sh` - Verify deployment health
   - `setup-env.sh` - Environment configuration

3. **Process Management**
   - `ecosystem.config.js` - PM2 configuration
   - Production-ready with auto-restart and logging

4. **Docker Support**
   - `Dockerfile` - Container configuration
   - `docker-compose.yml` - Container orchestration
   - `.dockerignore` - Docker ignore patterns

### 🚀 Deployment Options:

#### Option 1: Direct Server Deployment
```bash
# Start production server
./start-production.sh
```

#### Option 2: PM2 Process Manager
```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start ecosystem.config.js --env production

# Monitor
pm2 monitor
```

#### Option 3: Docker Deployment
```bash
# Build and run with Docker
docker-compose up -d

# View logs
docker-compose logs -f
```

### 🔧 Configuration:

1. **Environment Variables** (edit `.env`):
   - `NODE_ENV=production`
   - `PORT=3000`
   - Add database URLs, API keys, etc.

2. **Static Files**:
   - Place images in `client/public/images/`
   - Certificates in `client/public/certificates/`

3. **Content Management**:
   - Projects: Add JSON files to `projects/`
   - Certifications: Add JSON files to `certifications/`

### 📊 Monitoring:

- **Logs**: Check `logs/` directory
- **Health**: Run `./verify-deployment.sh`
- **Process**: Use PM2 dashboard or Docker logs

### 🌐 Access:

Once deployed, your portfolio will be available at:
- Local: http://localhost:3000
- Production: https://yourdomain.com

### 🔄 Updates:

To deploy updates:
1. Make changes to your code
2. Run `./deploy.sh` again
3. Restart your chosen deployment method

Your portfolio is now ready for production! 🎉
EOF

print_status "Deployment summary created"

# Final success message
echo ""
echo "🎉 DEPLOYMENT COMPLETE! 🎉"
echo "========================="
echo ""
print_status "Portfolio website successfully built and configured"
print_status "Production files created in dist/ directory"
print_status "Multiple deployment options available"
echo ""
print_info "Read DEPLOYMENT_SUMMARY.md for detailed deployment instructions"
echo ""
print_info "To start immediately:"
print_info "  Production: ./start-production.sh"
print_info "  PM2: pm2 start ecosystem.config.js --env production"
print_info "  Docker: docker-compose up -d"
echo ""
print_status "Your portfolio is ready for deployment! 🚀"