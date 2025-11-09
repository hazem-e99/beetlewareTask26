import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import { PricingCard } from "../shared/PricingCard.jsx";
import { pricingPlans } from "../../utils/pricingData.js";

export function PricingSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-bgPricingSection">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-headTitle text-dynamicBorder text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-primary">
            <Tag className="scale-x-[-1] w-3 h-3 sm:w-4 sm:h-4" />
            Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[47.813px] font-bold mb-3 sm:mb-4 tracking-[1.5px] px-2 sm:px-4">
            Find the right plan
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-textP max-w-6xl mx-auto mt-4 sm:mt-6 md:mt-8 !leading-relaxed px-2 sm:px-4">
            Invest in your company&apos;s future with our comprehensive financial
            solution. Contact us for pricing details and see how we can help you
            streamline your finances and reach your business goals.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
