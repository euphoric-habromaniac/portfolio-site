import { useQuery } from "@tanstack/react-query";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  name?: string;
  image: string;
  date?: string;
  url?: string;
}

const CertificationsSection = () => {
  const { data: certifications, isLoading, error } = useQuery<Certification[]>({
    queryKey: ['/api/certifications'],
  });

  return (
    <section id="certifications" className="py-20 wabi-section scroll-fade-in">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 scroll-slide-up">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed scroll-slide-up scroll-delay-200">
            Continuous learning through industry-recognized certifications and 
            professional development courses that keep me at the forefront of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-card rounded-lg overflow-hidden wabi-shadow"
                data-testid="skeleton-certification-card"
              >
                <div className="aspect-[4/3] bg-neutral-300 dark:bg-neutral-700"></div>
                <div className="p-4">
                  <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded mb-2"></div>
                  <div className="h-3 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                </div>
              </div>
            ))
          ) : !certifications || certifications.length === 0 ? (
            <div className="lg:col-span-4 text-center py-16 animate-fade-in">
              <div className="max-w-md mx-auto">
                <Award className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-2" data-testid="text-no-certifications">
                  No Certifications Yet
                </h3>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm" data-testid="text-certifications-empty-state">
                  Certifications will be automatically loaded from the <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded text-xs">/certifications</code> directory
                </p>
              </div>
            </div>
          ) : error ? (
            <div className="lg:col-span-4 text-center py-16 animate-fade-in">
              <div className="max-w-md mx-auto">
                <Award className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2" data-testid="text-certifications-error">
                  Error Loading Certifications
                </h3>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm" data-testid="text-certifications-error-message">
                  {error}
                </p>
              </div>
            </div>
          ) : (
            certifications.map((cert, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg wabi-shadow hover:shadow-lg transition-all duration-200 hover-lift bg-card scroll-scale-up ${
                  index === 0 ? 'scroll-delay-300' : 
                  index === 1 ? 'scroll-delay-400' : 
                  index === 2 ? 'scroll-delay-500' :
                  'scroll-delay-600'
                }`}
                data-testid={`card-certification-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name || `Certification ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    data-testid={`img-certification-${index}`}
                  />
                </div>
                
                {(cert.name || cert.date) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {cert.name && (
                      <h3 className="text-white font-semibold text-sm mb-1" data-testid={`text-certification-name-${index}`}>
                        {cert.name}
                      </h3>
                    )}
                    {cert.date && (
                      <p className="text-xs text-neutral-200 text-center mt-1" data-testid={`text-certification-date-${index}`}>
                        {cert.date}
                      </p>
                    )}
                  </div>
                )}
                
                {cert.url && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-all duration-200">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                      data-testid={`link-certification-${index}`}
                    >
                      View Tag
                    </a>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;