import { EducationSection } from "@/components/organisms/EducationSection";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { KnowledgeSection } from "@/components/organisms/KnowledgeSection";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { Sidebar } from "@/components/organisms/Sidebar";
import { SocialRail } from "@/components/organisms/SocialRail";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />
      <SocialRail />
      <main className="px-4 py-4 lg:ml-[300px] lg:px-8 lg:py-8 xl:pr-24">
        <div className="mx-auto max-w-6xl">
          <Hero />
          <KnowledgeSection />
          <EducationSection />
          <PortfolioSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
