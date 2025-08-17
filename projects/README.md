# Projects Directory

This directory contains project metadata files that power the Projects section of your portfolio website. Each JSON file represents a project with comprehensive details including descriptions, technologies used, and links.

## 📁 File Structure

Each project must be a JSON file following this exact schema:

```json
{
  "slug": "unique-project-identifier",
  "title": "Project Display Title",
  "description": "Brief one-line description (max 150 characters)",
  "image": "/images/projects/project-image.jpg",
  "tech": ["React", "TypeScript", "Node.js"],
  "url": "https://github.com/username/repository",
  "content": "## Detailed Project Description\n\nFull markdown content with details, features, implementation notes, etc."
}
```

## 📝 Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | ✅ | Unique identifier for URL routing (lowercase, hyphens only) |
| `title` | string | ✅ | Display name shown in project cards and headers |
| `description` | string | ✅ | Brief summary for project cards (keep under 150 chars) |
| `image` | string | ✅ | Path to project image (relative to `/public/`) |
| `tech` | array | ✅ | List of technologies/frameworks used |
| `url` | string | ✅ | GitHub repository or live demo URL |
| `content` | string | ✅ | Full markdown content for project detail page |

## 🖼️ Image Guidelines

**Image Requirements:**
- **Format**: JPG, PNG, or WebP
- **Size**: 1200x800px (3:2 aspect ratio) recommended
- **Location**: `client/public/images/projects/`
- **Naming**: Use descriptive, lowercase names with hyphens

**Example:**
```bash
# Good image names
vulnerability-scanner-dashboard.jpg
portfolio-website-hero.png
react-todo-app-interface.webp

# Bad image names
IMG_001.jpg
Screenshot 2024.png
project.jpg
```

## ✅ Adding a New Project

### Step 1: Create Project File
Create `projects/my-awesome-project.json`:

```json
{
  "slug": "my-awesome-project",
  "title": "My Awesome Web Application",
  "description": "A full-stack web application built with modern technologies for solving real-world problems",
  "image": "/images/projects/awesome-project-screenshot.jpg",
  "tech": ["React", "Node.js", "PostgreSQL", "TypeScript"],
  "url": "https://github.com/yourusername/awesome-project",
  "content": "## Overview\n\nThis project demonstrates my ability to build full-stack applications using modern web technologies.\n\n## Features\n\n- User authentication and authorization\n- Real-time data updates\n- Responsive design for all devices\n- RESTful API with comprehensive error handling\n\n## Technical Implementation\n\nThe application follows a clean architecture pattern with:\n\n### Frontend\n- React 18 with TypeScript for type safety\n- Tailwind CSS for responsive styling\n- React Query for state management\n\n### Backend\n- Node.js with Express.js framework\n- PostgreSQL database with Prisma ORM\n- JWT authentication\n- Comprehensive API documentation\n\n## Challenges Solved\n\n1. **Performance Optimization**: Implemented lazy loading and code splitting\n2. **User Experience**: Created intuitive navigation and error states\n3. **Security**: Added input validation and sanitization\n\n## Results\n\n- 50% improvement in user engagement\n- 30% faster page load times\n- Zero security vulnerabilities found in testing\n\n## Live Demo\n\n[View Live Application](https://your-demo-url.com)"
}
```

### Step 2: Add Project Image
1. Save your project image to `client/public/images/projects/`
2. Use the exact filename referenced in your JSON file
3. Optimize image size (under 1MB recommended)

### Step 3: Restart Development Server
```bash
# Stop current server (Ctrl+C)
# Restart development
npm run dev
```

## 🎨 Content Writing Tips

**Description Field:**
- Keep it concise but informative
- Focus on the problem solved or value provided
- Avoid technical jargon in the brief description

**Content Field (Markdown):**
- Start with an overview section
- Include specific features and technologies
- Explain challenges faced and solutions implemented
- Add quantifiable results when possible
- Include screenshots or code snippets if helpful

**Example Content Structure:**
```markdown
## Overview
Brief project summary and purpose

## Features
- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## Technical Stack
- Frontend: Technologies used
- Backend: Technologies used
- Database: Database choice and reason

## Key Challenges
1. **Challenge 1**: How you solved it
2. **Challenge 2**: Your approach

## Results & Impact
- Metrics or outcomes
- User feedback
- Performance improvements
```

## 🔍 Validation

Before adding a project, verify:
- [ ] JSON file is valid (use a JSON validator)
- [ ] All required fields are present
- [ ] Image file exists and is accessible
- [ ] URLs are working and public
- [ ] Slug is unique and URL-friendly
- [ ] Technology names are consistent across projects

## 📋 Project Ideas

Consider showcasing projects that demonstrate:
- **Full-stack development** capabilities
- **Problem-solving** skills with real-world applications
- **Modern technologies** and best practices
- **UI/UX design** attention to detail
- **Performance optimization** techniques
- **Security implementation** knowledge
- **API development** and integration skills

## 🚀 Best Practices

1. **Quality over Quantity**: 5-8 well-documented projects are better than 15 basic ones
2. **Diverse Tech Stack**: Show range of technologies you're comfortable with
3. **Real Solutions**: Focus on projects that solve actual problems
4. **Professional Presentation**: Use high-quality screenshots and clear descriptions
5. **Keep Updated**: Regularly review and update project information
6. **Performance**: Optimize images and keep file sizes reasonable