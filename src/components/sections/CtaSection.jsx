import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import CtaPhoto from "../../assets/images/Cta.png";

export function CtaSection() {
  return (
    <section className="w-full flex justify-center relative overflow-hidden bg-bgPricingSection">
      <div className="max-w-[1920px] w-full flex justify-center px-3 sm:px-4 md:px-6 lg:px-10 xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-[115px]">
        <div className="bg-NavBarBG rounded-xl sm:rounded-2xl md:rounded-3xl w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left p-6 sm:p-8 md:p-12 lg:p-16"
            >
              <h2
                className="w-full max-w-[760px] text-TextCTA font-bold leading-[1.3] sm:leading-[1.2] md:leading-[1.1] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                style={{ fontFamily: "'DM Sans'" }}
              >
                Let&apos;s Upgrade your
                <br className="hidden sm:block" />
                finances experience
                <br className="hidden sm:block" />
                by using FinBiz
              </h2>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-60 h-12 sm:h-14 bg-lime-400 rounded-[100px] border-[1.50px] hover:bg-lime-500 text-black hover:text-black font-semibold text-sm sm:text-base"
                >
                  Request Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-60 h-12 sm:h-14 bg-foreground rounded-[100px] border-[1.50px] hover:bg-white text-background hover:text-black font-semibold text-sm sm:text-base"
                >
                  Watch Video
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center lg:justify-end h-full"
            >
              <div className="relative w-full sm:w-[90%] md:w-[85%] lg:w-[82%] max-w-[672.4px] h-full">
                <img
                  src={CtaPhoto}
                  alt="CTA illustration"
                  className="w-full h-auto object-cover rounded-2xl lg:rounded-r-2xl p-2 sm:p-3 md:p-[15px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
