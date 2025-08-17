# Pranjal Kumar - Personal Portfolio

A premium personal portfolio website featuring a sophisticated wabi-sabi design aesthetic, interactive animations, and comprehensive content management.

## Features

- **Wabi-sabi Design**: Minimalist aesthetic with beautiful gradient backgrounds
- **Scroll Animations**: Comprehensive scroll effects across all sections
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with optimal experience across all devices
- **File-based CMS**: Automatic content loading from organized directories
- **Modern Stack**: React + TypeScript, Tailwind CSS, shadcn/ui components

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5000 in your browser

### Adding Content

#### Projects
Add project files to the `/projects` directory:
- Create `.json` files with project metadata
- Include images in the same directory
- Projects will be automatically loaded and displayed

Example project structure:
```
/projects/
  ├── my-project.json
  ├── my-project-image.png
  └── another-project.json
```

#### Certifications
Add certification images to the `/certifications` directory:
- Supported formats: .jpg, .jpeg, .png
- Certifications will be automatically loaded and displayed

Example certification structure:
```
/certifications/
  ├── cert1.jpg
  ├── cert2.png
  └── linkedin-learning.png
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── types/         # TypeScript type definitions
├── server/                # Backend Express server
├── shared/                # Shared types and schemas
├── projects/              # Project content files
├── certifications/        # Certification images
└── README.md
```

## Customization

### Theme Colors
Edit `client/src/index.css` to customize the color palette and design system variables.

### Content
- Update personal information in the hero section components
- Modify the about section content
- Add your own projects and certifications to their respective directories

### Styling
The project uses Tailwind CSS with shadcn/ui components. Customize styles by:
- Editing Tailwind config in `tailwind.config.ts`
- Modifying component styles in individual component files
- Adding custom CSS in `client/src/index.css`

## Deployment

The project is optimized for deployment on various platforms:

### Vercel/Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` directory

### Traditional Hosting
1. Run `npm run build`
2. Upload the contents of the `dist` directory to your web server

### Docker (Optional)
A Dockerfile can be created for containerized deployment if needed.

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui, Radix UI
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: React Query for server state
- **Database**: Drizzle ORM with PostgreSQL (optional)
- **Icons**: Lucide React, React Icons

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please refer to the documentation or create an issue in the repository.