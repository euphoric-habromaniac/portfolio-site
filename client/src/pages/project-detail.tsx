import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { loadProjectBySlug } from "@/lib/content-loader";
import type { Project } from "@/types/content";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const ProjectDetail = () => {
  const [, params] = useRoute("/project/:slug");
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (!params?.slug) {
        setError("Project not found");
        setLoading(false);
        return;
      }

      try {
        const projectData = await loadProjectBySlug(params.slug);
        setProject(projectData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load project');
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="animate-pulse">
              <div className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2 mb-8"></div>
              <div className="h-64 bg-neutral-200 dark:bg-neutral-800 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6"></div>
                <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h1 className="text-2xl font-bold mb-4" data-testid="text-project-error-title">
              Project Not Found
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8" data-testid="text-project-error-message">
              {error || "The requested project could not be found."}
            </p>
            <Link href="/#projects">
              <Button data-testid="button-back-to-projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <article className="max-w-4xl mx-auto px-6 py-16">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/#projects" className="inline-flex items-center text-accent-primary hover:text-accent-hover transition-colors" data-testid="link-back-to-projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <header className="mb-12">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-project-title">
                  {project.title}
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl" data-testid="text-project-description">
                  {project.description}
                </p>
              </div>
              
              <div className="flex gap-3 ml-6">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent-primary hover:bg-accent-hover text-white rounded-lg transition-colors wabi-shadow"
                    data-testid="link-project-live"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border hover:border-accent-primary hover:text-accent-primary rounded-lg transition-all wabi-shadow"
                    data-testid="link-project-github"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
              {project.date && (
                <div className="flex items-center gap-2" data-testid="project-date">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </div>
              )}
              {project.category && (
                <div className="flex items-center gap-2" data-testid="project-category">
                  <Tag className="h-4 w-4" />
                  {project.category}
                </div>
              )}
            </div>
          </header>

          {/* Project Image */}
          {project.image && (
            <div className="mb-12">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg wabi-shadow"
                data-testid="img-project-hero"
              />
            </div>
          )}

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Project Content */}
              <div className="prose prose-lg max-w-none mb-12" data-testid="project-content">
                {project.content ? (
                  <div dangerouslySetInnerHTML={{ __html: project.content }} />
                ) : (
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Detailed project information will be loaded from the project files.
                  </p>
                )}
              </div>

              {/* Additional Images */}
              {project.images && project.images.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-6" data-testid="heading-project-gallery">
                    Project Gallery
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6" data-testid="project-gallery">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full rounded-lg wabi-shadow"
                        loading="lazy"
                        data-testid={`img-project-gallery-${index}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                  <Card data-testid="card-tech-stack">
                    <CardHeader>
                      <CardTitle className="text-lg">Tech Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                            data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Project Links */}
                <Card data-testid="card-project-links">
                  <CardHeader>
                    <CardTitle className="text-lg">Project Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-accent-primary/10 hover:bg-accent-primary/20 rounded-lg transition-colors group"
                        data-testid="link-project-live-sidebar"
                      >
                        <ExternalLink className="h-4 w-4 text-accent-primary" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors group"
                        data-testid="link-project-github-sidebar"
                      >
                        <Github className="h-4 w-4" />
                        <span className="font-medium">Source Code</span>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
