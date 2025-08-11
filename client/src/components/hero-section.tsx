import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center organic-bg overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Content - Asymmetrically positioned */}
          <div className="lg:col-span-7 lg:col-start-2 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-accent-primary tracking-wide uppercase">
                  Delhi, India
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block" data-testid="text-name-first">pranjal</span>
                  <span className="block text-neutral-500 dark:text-neutral-400" data-testid="text-name-last">
                    kumar
                  </span>
                </h1>
              </div>

              <div className="max-w-lg">
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed" data-testid="text-tagline">
                  breaking systems and making them better
                </p>
                <p className="mt-4 text-neutral-500 dark:text-neutral-400" data-testid="text-role">
                  cybersecurity enthusiast • web development intern
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "#projects")}
                  className="inline-flex items-center px-8 py-3 bg-accent-primary hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 wabi-shadow"
                  data-testid="button-view-work"
                >
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="inline-flex items-center px-8 py-3 border border-border hover:border-accent-primary hover:text-accent-primary font-medium rounded-lg transition-all duration-200"
                  data-testid="button-get-in-touch"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="lg:col-span-4 lg:col-start-9 relative hidden lg:block">
            <div className="animate-float">
              <div className="w-64 h-64 bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="fixed left-8 bottom-8 flex flex-col space-y-4 z-40 hidden lg:flex">
          <a
            href="https://github.com/euphoric-habromaniac"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border/20 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all duration-200 wabi-shadow"
            aria-label="GitHub Profile"
            data-testid="link-github-sidebar"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranjalkumar1024/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border/20 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all duration-200 wabi-shadow"
            aria-label="LinkedIn Profile"
            data-testid="link-linkedin-sidebar"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
