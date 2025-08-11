import { useState, useEffect } from "react";
import { Tag, Award } from "lucide-react";
import { loadCertifications } from "@/lib/content-loader";
import type { Certification } from "@/types/content";

const CertificationsSection = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCertificationsData = async () => {
      try {
        const certificationsData = await loadCertifications();
        setCertifications(certificationsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load certifications');
      } finally {
        setLoading(false);
      }
    };

    loadCertificationsData();
  }, []);

  if (loading) {
    return (
      <section id="certifications" className="py-20 lg:py-32 bg-neutral-100/50 dark:bg-neutral-800/30 organic-bg">
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
    <section id="certifications" className="py-20 lg:py-32 bg-neutral-100/50 dark:bg-neutral-800/30 organic-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-fade-in scroll-delay-100" data-testid="heading-certifications">
            <span className="text-accent-primary">Certifications</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto scroll-fade-in scroll-delay-200" data-testid="text-certifications-subtitle">
            {error ? 'Error loading certifications' : 'Professional certifications and achievements in cybersecurity and web development'}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="certifications-grid">
          {certifications.length === 0 && !error ? (
            <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-16 animate-fade-in">
              <div className="max-w-md mx-auto">
                <Tag className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-2" data-testid="text-no-certifications">
                  No Certifications Yet
                </h3>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm" data-testid="text-certifications-empty-state">
                  Certificates will be automatically loaded from the <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded text-xs">/certifications</code> directory
                </p>
              </div>
            </div>
          ) : error ? (
            <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-16 animate-fade-in">
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
                className={`group relative overflow-hidden rounded-lg wabi-shadow hover:shadow-lg transition-all duration-200 hover-lift bg-card scroll-scale-up scroll-delay-${Math.min(300 + (index * 100), 600)}`}
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
                
                {cert.name && (
                  <div className="p-4">
                    <h3 className="font-medium text-sm text-center" data-testid={`text-certification-name-${index}`}>
                      {cert.name}
                    </h3>
                    {cert.issuer && (
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mt-1" data-testid={`text-certification-issuer-${index}`}>
                        {cert.issuer}
                      </p>
                    )}
                    {cert.date && (
                      <p className="text-xs text-neutral-400 text-center mt-1" data-testid={`text-certification-date-${index}`}>
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
