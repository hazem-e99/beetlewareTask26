import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import photo from "../../assets/images/photo.png";
import photo2 from "../../assets/images/photo2.png";
import photo3 from "../../assets/images/photo3.png";
import photo4 from "../../assets/images/photo(1).png";
import { StatsSection } from "./StatsSection.jsx";

const images = [photo, photo2, photo3, photo4];

export function HeroSection() {
  return (
    <section className="min-h-screen md:min-h-[1400px] lg:min-h-[1500px] relative " style={{ zIndex: 60 }}>
      <div className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[108px] pb-16 sm:pb-20 min-h-[800px] sm:min-h-[900px] md:min-h-[1000px] lg:min-h-[1100px] xl:min-h-[1227px] bg-bgPricingSection">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1 sm:gap-2 px-[6px] sm:px-[8px] py-[3px] sm:py-[4px] rounded-full border-t border-l border-r border-[#3B3B3B] bg-background/100 text-xs sm:text-sm font-medium mb-3 sm:mb-[14px]"
            >
              <span className="pl-[6px] sm:pl-[8px] pr-[3px] sm:pr-[4px] py-[3px] sm:py-[4px] rounded-full bg-primary text-white text-xs sm:text-sm">
                New
              </span>
              <span className="text-dynamicBorder pr-1 sm:pr-2">
                Introducing AI Automation
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-[15px]"
            >
              The Finance Solutions
              <br />
              For Your Business
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-neutral-400 text-base sm:text-lg md:text-xl font-normal font-['DM_Sans'] leading-7 sm:leading-8 md:leading-9 mb-8 sm:mb-10 md:mb-[56px] max-w-3xl mx-auto px-4"
            >
              Empower your finance team. The onestop plateform for all financial management of small and medium-sized business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative mx-auto mb-8 sm:mb-12 md:mb-[62px] w-full max-w-[640px] px-2 sm:px-4 md:px-0"
            >
              <div className="relative h-12 sm:h-14 md:h-16 lg:h-[72px]">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-full w-full bg-BgInput border-0 pl-3 sm:pl-4 md:pl-6 lg:pl-8 pr-[110px] sm:pr-[140px] md:pr-[160px] lg:pr-[190px] text-xs sm:text-sm md:text-base placeholder:text-textP rounded-full"
                />
                <Button
                  size="lg"
                  className="absolute right-[4px] sm:right-[4px] md:right-[6px] top-[4px] sm:top-[4px] md:top-[6px] px-3 sm:px-4 md:px-6 lg:px-8 bg-foreground text-background hover:bg-foreground/90 font-semibold text-xs sm:text-sm md:text-base w-[100px] sm:w-[130px] md:w-[150px] lg:w-[176px] h-[38px] sm:h-[46px] md:h-[52px] lg:h-[60px] rounded-full"
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>

            {/* User avatars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center flex-col gap-2 mb-12 sm:mb-16"
            >
              <div className="flex -space-x-2">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary to-primary-glow border-2 border-background"
                    alt={`User ${index + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-textP">
               1,200+ reviews (4.9 of 5)
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute left-2 right-2 sm:left-4 sm:right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 xl:left-[90px] xl:right-[90px] top-[550px] sm:top-[600px] md:top-[650px] lg:top-[700px] xl:top-[700px]">
          <StatsSection />
        </div>
      </div>
    </section>
  );
}
