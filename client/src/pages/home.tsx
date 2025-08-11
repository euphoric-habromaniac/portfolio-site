import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import CertificationsSection from "@/components/certifications-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import CursorBackground from "@/components/cursor-background";
import { useScrollAnimations } from "@/hooks/use-scroll-animation";

const Home = () => {
  useScrollAnimations();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
