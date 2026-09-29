import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import RecentBlogSection from "./components/RecentBlogSection";
import TechStack from "./components/TechStack";
import PackagesSection from "./components/PackagesSection";
import ProjectsGallery from "./components/ProjectsGallery";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100">
      <Navbar />
      <HeroSection />
      <Services />
      <RecentBlogSection />
      <TechStack />
      <PackagesSection showViewAllButton={true} />
      <ProjectsGallery />
      <ContactFooter />
    </main>
  );
}
