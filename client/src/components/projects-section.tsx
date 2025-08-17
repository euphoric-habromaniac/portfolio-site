import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, FolderOpen } from "lucide-react";
import { Link } from "wouter";

interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  url?: string;
}

const ProjectsSection = () => {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  return (
    <section id="projects" className="py-20 wabi-section scroll-fade-in">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 scroll-slide-up">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed scroll-slide-up scroll-delay-200">
            A collection of projects that demonstrate my passion for creating 
            meaningful digital experiences, from web applications to security tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-card rounded-lg p-6 wabi-shadow"
                data-testid="skeleton-project-card"
              >
                <div className="aspect-video bg-neutral-300 dark:bg-neutral-700 rounded mb-4"></div>
                <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded mb-2"></div>
                <div className="h-3 bg-neutral-300 dark:bg-neutral-700 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                  <div className="h-6 w-20 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                </div>
              </div>
            ))
          ) : !projects || projects.length === 0 ? (
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
                  {error instanceof Error ? error.message : 'An error occurred loading projects'}
                </p>
              </div>
            </div>
          ) : (
            projects.map((project, index) => (
              <Card 
                key={project.slug} 
                className={`cozy-card hover-lift transition-all duration-300 group scroll-scale-up ${
                  index === 0 ? 'scroll-delay-300' : 
                  index === 1 ? 'scroll-delay-400' : 
                  'scroll-delay-500'
                }`}
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
                  <p className="cozy-text text-sm mb-4" data-testid={`text-project-description-${project.slug}`}>
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