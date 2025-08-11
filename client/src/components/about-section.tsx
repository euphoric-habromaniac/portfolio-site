const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 organic-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:col-start-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-slide-up" data-testid="heading-about">
              About <span className="text-accent-primary">Me</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-6 animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed" data-testid="text-about-paragraph-1">
                I'm passionate about cybersecurity and finding vulnerabilities that others miss.
                Currently working as a Web Development & Security Intern at Hitech Infovision,
                where I blend creative problem-solving with technical expertise.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed" data-testid="text-about-paragraph-2">
                My approach involves breaking systems to understand them better, then building
                robust solutions that stand the test of time. I believe in the philosophy of
                continuous learning and ethical hacking practices.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-card rounded-lg wabi-shadow" data-testid="card-focus-areas">
                <h3 className="font-semibold text-accent-primary mb-2">Focus Areas</h3>
                <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
                  <li>• Web Security Assessment</li>
                  <li>• Vulnerability Research</li>
                  <li>• Secure Development</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-lg wabi-shadow" data-testid="card-currently">
                <h3 className="font-semibold text-accent-primary mb-2">Currently</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Learning advanced penetration testing techniques and expanding expertise in cloud security.
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
