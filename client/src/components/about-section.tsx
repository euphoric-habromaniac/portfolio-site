const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Bookshelf background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent transform skew-y-1"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:col-start-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-slide-up" data-testid="heading-about">
              About <span className="text-accent-primary">Me</span>
            </h2>
            
            {/* Subtle literary quote */}
            <blockquote className="text-sm italic text-neutral-500 dark:text-neutral-400 border-l-2 border-accent-primary/30 pl-4 mb-8 animate-slide-up">
              "In every book lies the universe of another mind"
            </blockquote>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-8 animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed" data-testid="text-about-paragraph-1">
                I'm passionate about finding vulnerabilities that others miss and building secure solutions. 
                Currently a Web Development & Security Intern at Hitech Infovision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg wabi-shadow hover-lift" data-testid="card-focus-areas">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-8 bg-accent-primary/30 rounded-full"></div>
                  <h3 className="font-semibold text-accent-primary">Focus Areas</h3>
                </div>
                <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-primary rounded-full"></span>
                    Web Security Assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-primary rounded-full"></span>
                    Vulnerability Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-primary rounded-full"></span>
                    Secure Development
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-lg wabi-shadow hover-lift" data-testid="card-interests">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-8 bg-accent-primary/30 rounded-full"></div>
                  <h3 className="font-semibold text-accent-primary">Beyond Code</h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  When I'm not breaking systems, you'll find me lost in books or crafting poetry. 
                  I believe stories and security both require understanding the art of the possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
