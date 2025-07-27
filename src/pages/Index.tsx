import Hero from "@/components/Hero";
import ICPIntegration from "@/components/Web3Integration";
import GameFeatures from "@/components/GameFeatures";
import Marketplace from "@/components/Marketplace";
import TechStack from "@/components/TechStack";
import ProjectStructure from "@/components/ProjectStructure";
import Roadmap from "@/components/Roadmap";
import Community from "@/components/Community";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Hero />
      <ICPIntegration />
      <GameFeatures />
      <Marketplace />
      <TechStack />
      <ProjectStructure />
      <Roadmap />
      <Community />
      <FAQ />
      <Footer />
    </>
  );
};

export default Index;
