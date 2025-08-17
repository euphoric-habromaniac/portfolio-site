# Personal Portfolio Website

A modern, fully responsive personal portfolio website built with React 18, TypeScript, and Express.js. Features a cozy design aesthetic with seamless dark/light theme switching and file-based content management system.

## ✨ Features

- **Responsive Design**: Mobile-first approach with optimal viewing on all devices
- **Dark/Light Theme**: Automatic system preference detection with manual toggle
- **File-Based CMS**: Easy content management through JSON files
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Express.js
- **Cozy Aesthetic**: Warm, inviting design with subtle animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Production Ready**: Automated deployment with multiple hosting options

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Development Setup

**Automated Setup (Recommended):**
```bash
# Linux/Mac
./start.sh

# Windows
start.bat
```

**Manual Setup:**
```bash
# 1. Setup local configuration
cp package.local.json package.json

# 2. Install dependencies
npm install

# 3. Start development servers
npm run dev

# 4. Open browser
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
```

## 🏗️ Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Content**: File-based JSON storage
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components  
│   │   ├── lib/           # Utilities
│   │   └── hooks/         # Custom hooks
│   └── public/            # Static assets
├── server/                # Express backend
│   ├── index.ts           # Main server
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data layer
├── projects/              # Project content (JSON)
├── certifications/        # Certificate content (JSON)
├── shared/                # Shared TypeScript types
└── dist/                  # Production build
```

## 📝 Adding Content

### Adding Projects

1. Create `projects/my-project.json`:
   ```json
   {
     "slug": "my-project",
     "title": "My Awesome Project",
     "description": "What this project does",
     "image": "/images/project.jpg",
     "tech": ["React", "TypeScript"],
     "url": "https://github.com/user/repo",
     "content": "Detailed project description..."
   }
   ```

2. Add project image to `client/public/images/`
3. Restart the dev server

### Adding Certifications

1. Create `certifications/cert-name.json`:
   ```json
   {
     "title": "Certificate Name",
     "issuer": "Issuing Organization", 
     "date": "2024-01-01",
     "image": "/certificates/cert.jpg",
     "url": "https://cert-link.com",
     "skills": ["Skill 1", "Skill 2"]
   }
   ```

2. Add certificate image to `client/public/certificates/`
3. Restart the dev server

## 🎨 Customization

### Colors & Themes
Edit `client/src/index.css` to modify:
- Color palette (CSS variables)
- Dark/light theme colors
- Typography settings

### Content Sections
- **Hero**: `client/src/components/hero-section.tsx`
- **About**: `client/src/components/about-section.tsx`
- **Projects**: `client/src/components/projects-section.tsx`
- **Contact**: `client/src/components/contact-section.tsx`

## 🛠️ Scripts

```bash
npm run dev          # Start development (both frontend & backend)
npm run build        # Build for production
npm run start        # Start production server
npm run check        # TypeScript type checking
```

## 🚀 Production Deployment

**Automated Deployment:**
```bash
# Linux/Mac
./deploy.sh

# Windows
deploy.bat
```

**Manual Deployment:**
```bash
# 1. Build application
npm run build

# 2. Choose deployment method:

# Option A: Direct Server
./start-production.sh

# Option B: PM2 Process Manager
npm install -g pm2
pm2 start ecosystem.config.js --env production

# Option C: Docker
docker-compose up -d
```

The automated deployment script handles:
- Environment setup and validation
- Production builds (frontend + backend)
- Configuration file generation
- Multiple deployment options
- Health checks and verification

## 🔧 Environment Variables

Create `.env` file for local development:
```env
NODE_ENV=development
PORT=5000
```

## 📦 Dependencies

### Core
- React 18 - Frontend framework
- Express.js - Backend server
- TypeScript - Type safety
- Vite - Build tool & dev server
- Tailwind CSS - Styling framework

### UI Components
- @radix-ui/* - Accessible UI primitives
- lucide-react - Icons
- framer-motion - Animations

## 🐛 Troubleshooting

**Port conflicts**: Change ports in server config files
**Build errors**: Run `npm run check` for TypeScript errors
**Content not loading**: Verify JSON format and restart server
**Styling issues**: Clear browser cache and rebuild

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/light theme toggle
- ✅ Smooth scrolling & animations
- ✅ File-based content management
- ✅ SEO optimized
- ✅ TypeScript throughout
- ✅ Modern cozy design

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details