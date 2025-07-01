import { useState, useEffect, useRef } from "react";
import { AboutSection } from "../components/AboutSection";
import { TimelineSection } from "../components/TimelineSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { MobileMenuOverlay } from "../components/MobileMenuOverlay";

const sectionIds = ["home", "about", "timeline", "skills", "projects", "contact"];

export const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  useEffect(() => {
    sectionIds.forEach(id => {
      sectionRefs.current[id] = document.getElementById(id);
    });
    const handleScroll = () => {
      let current = "home";
      for (const id of sectionIds) {
        const el = sectionRefs.current[id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    
    {/* Background Effects */}
    <StarBackground />

    {/* Navbar */}
    <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} activeSection={activeSection} />
    <MobileMenuOverlay isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

    {/* Main Content */}
    <main>
        <HomeSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </main>

    {/* Footer */}
    <Footer />
    </div>
  );
};