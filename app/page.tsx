import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import PackagesSection from "./components/PackagesSection";
import AboutTeam from "./components/AboutTeam";
import ProjectsGallery from "./components/ProjectsGallery";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <HeroSection />
      <Services />
      <PackagesSection />
      <AboutTeam />
      <ProjectsGallery />
      <ContactFooter />
    </main>
  );
}
