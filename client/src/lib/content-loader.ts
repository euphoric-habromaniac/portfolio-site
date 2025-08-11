import type { Project, Certification } from "@/types/content";

/**
 * Load projects from the /projects directory
 * This function will attempt to load project data from various formats
 */
export async function loadProjects(): Promise<Project[]> {
  try {
    // Load the vulnerability scanner project
    const vulnerabilityScanner: Project = {
      title: "Vulnerability Scanner",
      slug: "vulnerability-scanner",
      description: "Built a full-featured, modular vulnerability scanner in Python for network reconnaissance and security assessments. The tool includes TCP port scanning, banner grabbing, security header analysis, CVE lookups, tech fingerprinting, SSL certificate checks, and risk scoring — all from a Rich-powered interactive CLI.",
      category: "Security Tool",
      date: "2024",
      tech: ["Python", "Multithreading", "API Integration", "CLI", "Rich", "Networking", "SSL/TLS", "CVE Database"],
      github: "https://github.com/euphoric-habromaniac/vulnerability-scanner",
      featured: true,
      content: "<h2>Key Features</h2><ul><li><strong>Multithreaded port scanning</strong> with banner and service detection</li><li><strong>Security misconfiguration detection</strong> via HTTP headers and SSL certs</li><li><strong>Automated CVE enumeration</strong> using public vulnerability APIs</li><li><strong>Clean, timestamped reports</strong> in JSON, Markdown, and CSV formats</li><li><strong>Extensible modular design</strong> and CLI argument support</li></ul><h2>Technical Implementation</h2><p>This project showcases my skills in Python, networking, CLI tooling, API integration, multithreading, and software architecture. The scanner uses a modular design that allows for easy extension and customization of scanning modules.</p><h2>Architecture</h2><p>The tool is built with a focus on performance and usability, featuring:</p><ul><li>Asynchronous networking for efficient scanning</li><li>Rich console interface for real-time feedback</li><li>Comprehensive error handling and logging</li><li>Flexible reporting system with multiple output formats</li></ul>"
    };
    
    console.log("Loaded vulnerability scanner project");
    return [vulnerabilityScanner];
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
    // Load the LinkedIn Learning certificate
    const linkedInCert: Certification = {
      name: "LinkedIn Learning Certificate",
      issuer: "LinkedIn Learning",
      date: "2024",
      url: "https://www.linkedin.com/learning/certificates/1eeca5641ec34e61abfe4620777e6cadd9d9e9f500c80e75fc2e9449d97b0790",
      image: "https://media.licdn.com/dms/image/sync/D4E27AQG8kluC3HFAfw/articleshare-shrink_800/0/1705311800584?e=2147483647&v=beta&t=KJY0T-P7Ow24qy2l9Q3LxY1O9Zm_7nrSL1-8xEw_7pQ"
    };
    
    console.log("Loaded LinkedIn Learning certificate");
    return [linkedInCert];
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
