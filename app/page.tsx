import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import PackagesSection from "./components/PackagesSection";
import ProjectsGallery from "./components/ProjectsGallery";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <HeroSection />
      <Services />
      <TechStack />
      <PackagesSection showViewAllButton={true} />
      <ProjectsGallery />
      <ContactFooter />
    </main>
  );
}
