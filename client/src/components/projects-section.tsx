import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ExternalLink, FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loadProjects } from "@/lib/content-loader";
import type { Project } from "@/types/content";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjectsData = async () => {
      try {
        const projectsData = await loadProjects();
        setProjects(projectsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    loadProjectsData();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="animate-pulse">
              <div className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-32 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold scroll-fade-in scroll-delay-100" data-testid="heading-projects">
            Selected <span className="text-accent-primary">Work</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-4 lg:mt-0 lg:max-w-md scroll-slide-right scroll-delay-200" data-testid="text-projects-subtitle">
            {error ? 'Error loading projects' : 'A showcase of my cybersecurity and development projects'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
          {projects.length === 0 && !error ? (
            <div className="lg:col-span-3 text-center py-16 animate-fade-in">
              <div className="max-w-md mx-auto">
                <FolderOpen className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-2" data-testid="text-no-projects">
                  No Projects Yet
                </h3>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm" data-testid="text-projects-empty-state">
                  Projects will be automatically loaded from the <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded text-xs">/projects</code> directory
                </p>
              </div>
            </div>
          ) : error ? (
            <div className="lg:col-span-3 text-center py-16 animate-fade-in">
              <div className="max-w-md mx-auto">
                <FolderOpen className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2" data-testid="text-projects-error">
                  Error Loading Projects
                </h3>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm" data-testid="text-projects-error-message">
                  {error}
                </p>
              </div>
            </div>
          ) : (
            projects.map((project, index) => (
              <Card 
                key={project.slug} 
                className={`hover-lift wabi-shadow hover:shadow-lg transition-all duration-200 group scroll-scale-up scroll-delay-${Math.min(300 + (index * 100), 600)}`}
                data-testid={`card-project-${project.slug}`}
              >
                {project.image && (
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      data-testid={`img-project-${project.slug}`}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-2">
                    <span className="text-lg" data-testid={`text-project-title-${project.slug}`}>
                      {project.title}
                    </span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-accent-primary transition-colors p-1"
                        aria-label={`Open ${project.title} in new tab`}
                        data-testid={`link-project-external-${project.slug}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4" data-testid={`text-project-description-${project.slug}`}>
                    {project.description}
                  </p>
                  
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4" data-testid={`tech-stack-${project.slug}`}>
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}
                  
                  <Link 
                    href={`/project/${project.slug}`}
                    className="inline-flex items-center text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
                    data-testid={`link-project-detail-${project.slug}`}
                  >
                    View Details →
                  </Link>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
