import { useState } from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./contact-form";

const HeroSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
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
          <div className="lg:col-span-7 lg:col-start-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-accent-primary tracking-wide uppercase scroll-fade-in scroll-delay-100">
                  Delhi, India
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight scroll-slide-left scroll-delay-200">
                  <a 
                    href="#resume-download" 
                    onClick={(e) => {
                      e.preventDefault();
                      // Placeholder for resume download - link will be provided later
                      console.log("Resume download will be implemented when link is provided");
                    }}
                    className="cursor-pointer hover:text-accent-primary transition-colors duration-200"
                    data-testid="link-name-resume"
                  >
                    <span className="block" data-testid="text-name-first">Pranjal</span>
                    <span className="block text-neutral-500 dark:text-neutral-400" data-testid="text-name-last">
                      Kumar
                    </span>
                  </a>
                </h1>
              </div>

              <div className="max-w-lg scroll-fade-in scroll-delay-300">
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed" data-testid="text-tagline">
                  Breaking systems and making them better
                </p>
                <p className="mt-4 text-neutral-500 dark:text-neutral-400" data-testid="text-role">
                  Security researcher • Web development intern • Book enthusiast
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 scroll-scale-up scroll-delay-400">
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "#projects")}
                  className="inline-flex items-center px-8 py-3 bg-accent-primary hover:bg-accent-hover text-black dark:text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 wabi-shadow"
                  data-testid="button-view-work"
                >
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <button
                  onClick={() => setIsContactFormOpen(true)}
                  className="inline-flex items-center px-8 py-3 border border-border hover:border-accent-primary hover:text-accent-primary font-medium rounded-lg transition-all duration-200"
                  data-testid="button-get-in-touch"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="lg:col-span-4 lg:col-start-9 relative hidden lg:block scroll-scale-up scroll-delay-500">
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
            className="p-3 bg-card border border-border/20 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all duration-200 wabi-shadow scroll-slide-left scroll-delay-600"
            aria-label="GitHub Profile"
            data-testid="link-github-sidebar"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranjalkumar1024/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border/20 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all duration-200 wabi-shadow scroll-slide-left scroll-delay-700"
            aria-label="LinkedIn Profile"
            data-testid="link-linkedin-sidebar"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
