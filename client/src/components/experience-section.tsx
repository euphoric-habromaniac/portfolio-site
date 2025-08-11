const ExperienceSection = () => {
  const experiences = [
    {
      title: "Web Development & Security Intern",
      company: "Hitech Infovision",
      period: "Current",
      description: "Gaining hands-on experience in web development and security practices. Working on vulnerability assessments, secure coding practices, and learning enterprise-level security implementations.",
      skills: ["Security Testing", "Web Development", "Vulnerability Assessment"],
      current: true,
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 scroll-fade-in scroll-delay-100" data-testid="heading-experience">
              <span className="text-accent-primary">Experience</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 scroll-fade-in scroll-delay-200" data-testid="text-experience-subtitle">
              Professional journey and key roles in cybersecurity and web development
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-accent-primary/30 scroll-slide-right scroll-delay-300 last:pb-0"
                  data-testid={`experience-${index}`}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-primary rounded-full" />
                  <div className="bg-card p-6 rounded-lg wabi-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold" data-testid={`text-experience-title-${index}`}>
                        {experience.title}
                      </h3>
                      {experience.current && (
                        <span
                          className="text-sm text-accent-primary font-medium bg-accent-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0"
                          data-testid={`badge-experience-current-${index}`}
                        >
                          {experience.period}
                        </span>
                      )}
                    </div>
                    <p className="text-accent-primary font-medium mb-2" data-testid={`text-experience-company-${index}`}>
                      {experience.company}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed" data-testid={`text-experience-description-${index}`}>
                      {experience.description}
                    </p>

                    {/* Key Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4" data-testid={`skills-experience-${index}`}>
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                          data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
