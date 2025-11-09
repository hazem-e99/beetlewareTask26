import { motion } from "framer-motion";
import { Check, Sparkle } from "lucide-react";
import { Button } from "../ui/button.jsx";
import PropTypes from "prop-types";

export function PricingCard({ plan, index }) {
  return (
    <motion.div
      key={plan.id || plan.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative border border-pricingCardBorder bg-bgPricingCard rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between"
    >
      {plan.isPopular && (
        <div className="absolute top-4 sm:top-5 right-3 sm:right-4 border border-[#33C6AB] rounded-full">
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-[#33C6AB] text-xs sm:text-sm font-medium rounded-full flex justify-center items-center gap-1 sm:gap-1.5">
            <Sparkle className="w-3 h-3 sm:w-4 sm:h-4" /> Popular
          </span>
        </div>
      )}

      <div className="mb-6 text-center">
        <h3
          className={`text-lg sm:text-xl md:text-2xl font-normal mb-5 ${
            plan.name === "Basic"
              ? "text-foreground"
              : plan.name === "Pro"
              ? "text-primary"
              : plan.name === "Enterprise"
              ? "text-dynamicBorder"
              : "text-foreground"
          }`}
        >
          {plan.name}
        </h3>
        <p className="text-xs sm:text-sm text-textP mb-4">{plan.description}</p>
        <div className="flex items-baseline gap-1 justify-center py-6 sm:py-8 md:py-12 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-[83.87px]">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">${plan.price}</span>
          <span className="text-xs sm:text-sm md:text-base text-muted-foreground">{plan.period}</span>
        </div>
      </div>

      <div className="h-[1px] flex-shrink-0 self-stretch bg-line mb-8"></div>

      <ul className="space-y-1 mb-8 flex flex-col justify-start min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
        {plan.features?.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 sm:gap-3">
            <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-foreground flex-shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-foreground leading-snug">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        size="lg"
        className={`w-full rounded-full text-sm sm:text-base ${
          plan.name === "Basic"
            ? "bg-BgButton text-foreground hover:bg-muted/80 border-t border-l border-r border-[#3B3B3B] "
            : plan.name === "Pro"
            ? "bg-foreground text-background hover:bg-foreground/90"
            : plan.name === "Enterprise"
            ? "bg-[#A3DC2F] text-black hover:bg-[#A3DC2F]/90"
            : "bg-popover text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        {plan.btn}
      </Button>
    </motion.div>
  );
}

PricingCard.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    isPopular: PropTypes.bool.isRequired,
    btn: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
