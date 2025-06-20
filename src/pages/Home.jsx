import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    
    {/* Theme Toggle*/}
    <ThemeToggle />
    {/* Background Effects */}
    <StarBackground />

    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </main>
    {/* Hero Section */}

    {/* About Section */}

    {/* Projects Section */}

      {/* Contact Section */}

    {/* Footer */}
    <Footer />
    </div>
  );
};