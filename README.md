# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Express.js. Features a cozy design with dark/light theme support and file-based content management.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm (comes with Node.js)

### Local Development Setup

1. **Clone the project**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```
   This runs both backend (port 5000) and frontend (port 3000) simultaneously.

4. **Open browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

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

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

3. **Configure environment variables** (if needed):
   - `PORT`: Server port (default: 5000)
   - `NODE_ENV`: Set to 'production'

4. **Ensure SPA routing** - Configure your server to serve `index.html` for all non-API routes

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