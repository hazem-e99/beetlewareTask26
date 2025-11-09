import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import commalight from "../../assets/images/comma_light.png";
import commadark from "../../assets/images/comma_dark.png";

export function TestimonialCard({ testimonial }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const comma = theme === "dark" ? commalight : commadark;

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "theme") {
        const newTheme = event.newValue;
        if (newTheme) setTheme(newTheme);
      }
    };

    const handleLocalChange = () => {
      const current = localStorage.getItem("theme");
      if (current && current !== theme) setTheme(current);
    };

    window.addEventListener("storage", handleStorageChange);
    const interval = setInterval(handleLocalChange, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [theme]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-card transition-all duration-300 w-[280px] sm:w-[400px] md:w-[520px] lg:w-[580px] xl:w-[550px] 2xl:w-[660px] flex-shrink-0"
    >
      <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg md:text-xl 2xl:text-[23px] font-normal font-['DM_Sans'] leading-relaxed sm:leading-loose 2xl:leading-[42px] w-full max-w-[515px]" style={{letterSpacing:"1px"}}>
        &quot;{testimonial.feedback}&quot;
      </p>

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-[60px] rounded-full"
          />
          <div>
            <p className="font-normal text-lg sm:text-xl md:text-2xl lg:text-[26px]">
              {testimonial.name}
            </p>
            <div className="flex gap-1 mb-2 sm:mb-4 mt-[6.81px]">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-[#FFC250] text-[#FFC250]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="self-start sm:self-center">
          <img
            src={comma}
            alt="quote"
            className="w-16 h-12 sm:w-14 sm:h-10 md:w-16 md:h-11 lg:w-[67.5px] lg:h-[48px]"
          />
        </div>
      </div>
    </motion.div>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
