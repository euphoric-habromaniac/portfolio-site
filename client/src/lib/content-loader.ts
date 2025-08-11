import type { Project, Certification } from "@/types/content";

/**
 * Load projects from the /projects directory
 * This function will attempt to load project data from various formats
 */
export async function loadProjects(): Promise<Project[]> {
  try {
    // In a real implementation, this would read from the file system
    // For now, we'll simulate the loading process and return empty array
    // since no actual project files exist yet
    
    // This would typically:
    // 1. Scan the /projects directory
    // 2. Read project metadata from JSON/Markdown files
    // 3. Parse and return the data
    
    console.log("Projects would be loaded from /projects directory");
    return [];
  } catch (error) {
    console.error("Error loading projects:", error);
    throw new Error("Failed to load projects from /projects directory");
  }
}

/**
 * Load a single project by its slug
 */
export async function loadProjectBySlug(slug: string): Promise<Project> {
  try {
    const projects = await loadProjects();
    const project = projects.find(p => p.slug === slug);
    
    if (!project) {
      throw new Error(`Project with slug "${slug}" not found`);
    }
    
    return project;
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error);
    throw error;
  }
}

/**
 * Load certifications from the /certifications directory
 * This function will scan for certificate images and metadata
 */
export async function loadCertifications(): Promise<Certification[]> {
  try {
    // In a real implementation, this would:
    // 1. Scan the /certifications directory for images
    // 2. Look for accompanying metadata files
    // 3. Return processed certification data
    
    console.log("Certifications would be loaded from /certifications directory");
    return [];
  } catch (error) {
    console.error("Error loading certifications:", error);
    throw new Error("Failed to load certifications from /certifications directory");
  }
}

/**
 * Helper function to parse markdown content
 */
function parseMarkdown(content: string): { frontmatter: any; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  try {
    // Simple YAML-like parsing for frontmatter
    const frontmatter: any = {};
    const frontmatterLines = match[1].split('\n');
    
    for (const line of frontmatterLines) {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        let value: any = valueParts.join(':').trim();
        
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        
        // Parse arrays
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
        }
        
        frontmatter[key.trim()] = value;
      }
    }
    
    return { frontmatter, content: match[2] };
  } catch (error) {
    console.error("Error parsing frontmatter:", error);
    return { frontmatter: {}, content: match[2] || content };
  }
}

/**
 * Generate slug from title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
