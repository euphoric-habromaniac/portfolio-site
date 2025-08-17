import { useState } from "react";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import ContactForm from "./contact-form";

const ContactSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleResumeDownload = () => {
    // Placeholder for resume download functionality
    // The actual resume link will be provided later
    console.log("Resume download will be implemented when link is provided");
  };

  const handleGetInTouchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactFormOpen(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-neutral-100/50 dark:bg-neutral-800/30 organic-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:col-start-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-fade-in scroll-delay-100" data-testid="heading-contact">
              Let's <span className="text-accent-primary">Connect</span>
            </h2>
            <p className="cozy-text text-lg mb-8 scroll-fade-in scroll-delay-200" data-testid="text-contact-description">
              Always open to discussing security research, potential collaborations, book recommendations, or just having a good conversation.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 scroll-slide-left scroll-delay-300">
              <a
                href="mailto:contact@pranjalkumar.com"
                className="cozy-card flex items-center space-x-4 p-4 hover:bg-accent/5 transition-all duration-200 group scroll-slide-left scroll-delay-400"
                data-testid="link-contact-email"
              >
                <div className="p-3 bg-accent-primary/10 rounded-lg group-hover:bg-accent-primary/20 transition-colors duration-200">
                  <Mail className="h-5 w-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-medium" data-testid="text-email-label">Email</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm" data-testid="text-email-address">
                    contact@pranjalkumar.com
                  </p>
                </div>
              </a>

              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://github.com/euphoric-habromaniac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cozy-card flex items-center space-x-4 p-4 hover:bg-accent/5 transition-all duration-200 group scroll-slide-left scroll-delay-500"
                  data-testid="link-contact-github"
                >
                  <div className="p-3 bg-accent-primary/10 rounded-lg group-hover:bg-accent-primary/20 transition-colors duration-200">
                    <Github className="h-5 w-5 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium" data-testid="text-github-label">GitHub</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm" data-testid="text-github-description">
                      View Code
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/pranjalkumar1024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cozy-card flex items-center space-x-4 p-4 hover:bg-accent/5 transition-all duration-200 group scroll-slide-left scroll-delay-600"
                  data-testid="link-contact-linkedin"
                >
                  <div className="p-3 bg-accent-primary/10 rounded-lg group-hover:bg-accent-primary/20 transition-colors duration-200">
                    <Linkedin className="h-5 w-5 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium" data-testid="text-linkedin-label">LinkedIn</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm" data-testid="text-linkedin-description">
                      Connect
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Resume Download */}
          <div className="lg:col-span-4 lg:col-start-9 scroll-scale-up scroll-delay-400">
            <div className="p-8 bg-gradient-to-br from-accent-primary/5 to-accent-primary/10 rounded-2xl border border-accent-primary/20">
              <h3 className="text-xl font-semibold mb-4" data-testid="heading-resume">Resume</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm leading-relaxed" data-testid="text-resume-description">
                Download my complete resume with detailed experience, skills, and project information.
              </p>
              <button
                onClick={handleResumeDownload}
                className="cozy-button w-full justify-center"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </section>
  );
};

export default ContactSection;
