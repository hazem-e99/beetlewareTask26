import { Navbar } from "../../components/layout/Navbar.jsx";
import { HeroSection } from "../../components/sections/HeroSection.jsx";
import { Footer } from "../../components/layout/Footer.jsx";
import { Tabs } from "../../components/sections/Tabs.jsx";
import { FeaturesSection } from "../../components/sections/FeaturesSection.jsx";
import { TestimonialsSection } from "../../components/sections/TestimonialsSection.jsx";
import { PricingSection } from "../../components/sections/PricingSection.jsx";
import { CtaSection } from "../../components/sections/CtaSection.jsx";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 relative">
        <div className="absolute -top-[200px] sm:-top-[250px] md:-top-[300px] lg:-top-[324px] left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div
            className="absolute top-[30%] sm:top-[32%] left-1/2 
              w-[90%] sm:w-[95%] md:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px]
              h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[320px]
              bg-[radial-gradient(circle_at_center,_#A3DC2F_10%,_rgba(0,0,0,0)_70%)]
              -translate-x-1/2 -translate-y-1/2 blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-40 sm:opacity-50 md:opacity-60"
          />
        </div>

        <div className="relative z-10">
          <HeroSection />

          <div className="sticky top-0 z-50 ">
            <Tabs />
          </div>

          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection />
          <CtaSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
