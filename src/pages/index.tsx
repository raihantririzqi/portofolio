import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ExperienceEducationSection from "../components/ExperienceEducationSection";
import Footer from "../components/FooterSection";
import HeroSection from "../components/heroSection";
import NavbarComponents from "../components/NavbarComponents";
import ProjectSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillSection";
// Dalam komponen Index.tsx
export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 z-50 w-full">
        <NavbarComponents />
      </nav>
      <main className="relative bg-slate-950 flex-grow">
        {" "}
        {/* Tambahkan flex-grow */}
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>
        
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ExperienceEducationSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
      <div className="bottom-0 py-0 pb-0 mb-0">
      <Footer />
      </div>
    </div>
  );
}
