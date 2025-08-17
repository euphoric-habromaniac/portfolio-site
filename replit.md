# Overview

This is a personal portfolio website for Pranjal Kumar, a cybersecurity enthusiast and web development intern. The project is built using modern web technologies with a focus on performance, accessibility, and a minimalist "wabi-sabi" aesthetic. The portfolio showcases projects, certifications, experience, and provides contact information, with support for both light and dark themes.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes

## Migration and UI Improvements (January 17, 2025)
- Successfully migrated from Replit Agent to standard Replit environment
- Fixed theme toggle icons: dark mode now shows light mode icons and vice versa
- Replaced gradient background with cozy radial gradients and subtle texture overlay
- Updated "View Work" button text to be black in light mode and white in dark mode
- Added comprehensive cozy styling system with warm card designs, enhanced buttons, and cozy text styling
- Applied cozy theme across all components (hero, projects, about, contact sections)
- Enhanced visual appeal with warmer, more inviting design elements

# System Architecture

## Frontend Architecture

**Framework**: React with TypeScript, built using Vite for optimal development experience and build performance. The application uses a component-based architecture with clear separation of concerns.

**Styling**: Tailwind CSS with shadcn/ui components for consistent, accessible UI elements. Custom CSS variables enable seamless dark/light theme switching with a neutral color palette featuring muted accent colors.

**Routing**: Wouter for lightweight client-side routing, handling navigation between the main portfolio page and individual project detail pages.

**State Management**: React Query (@tanstack/react-query) for server state management and data fetching, with React's built-in state for local component state.

**Theme System**: Custom theme provider supporting system preference detection and manual theme switching between light and dark modes.

## Backend Architecture

**Server**: Express.js with TypeScript serving as both API server and static file server in development. The architecture supports API routes with the `/api` prefix pattern.

**Database Layer**: Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript. Includes both production database support and in-memory storage for development/testing.

**Development Setup**: Vite development server with hot module replacement, proxy configuration for API routes, and custom error handling.

**Build Process**: Vite for frontend bundling and esbuild for backend compilation, optimized for production deployment.

## Content Management System

**File-based CMS**: Projects and certifications are managed through file-based organization:
- `/projects` directory for project metadata (JSON/Markdown files)
- `/certifications` directory for certificate images and metadata
- Content loader utilities for dynamic loading and parsing

**Asset Management**: Support for multiple image formats and automatic content discovery from organized directory structures.

## Design System

**Component Library**: shadcn/ui components with Radix UI primitives for accessibility compliance and consistent behavior across devices.

**Typography**: Inter font family for clean, modern typography with proper font loading optimization.

**Animation System**: CSS-based animations with performance-conscious transitions under 300ms, including fade, slide, and micro-interactions.

**Responsive Design**: Mobile-first approach with breakpoint-based responsive design ensuring optimal experience across desktop, tablet, and mobile devices.

# External Dependencies

## Core Dependencies
- **React Ecosystem**: React 18 with TypeScript, React Query for data fetching
- **Build Tools**: Vite for frontend bundling, esbuild for backend compilation
- **Routing**: Wouter for lightweight client-side routing

## UI and Design
- **Component Library**: shadcn/ui with Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling with custom theme configuration
- **Icons**: Lucide React for consistent iconography, Font Awesome for additional icons
- **Fonts**: Google Fonts (Inter) for typography

## Database and ORM
- **Database**: PostgreSQL with Neon Database serverless driver (@neondatabase/serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Validation**: Zod for runtime type validation with drizzle-zod integration

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development debugging
- **Session Management**: connect-pg-simple for PostgreSQL session storage

## Utility Libraries
- **Class Management**: clsx and tailwind-merge for conditional CSS classes
- **Date Handling**: date-fns for date manipulation and formatting
- **Form Handling**: React Hook Form with Hookform resolvers for form validation
- **Command Interface**: cmdk for command palette functionality

## Development Environment
The application is optimized for Replit deployment with specific configurations for the platform, including custom Vite plugins and development server setup.