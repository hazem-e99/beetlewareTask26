import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { useRef } from "react";
import { TestimonialCard } from "../shared/TestimonialCard.jsx";
import { testimonials } from "../../utils/testimonialsData.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function TestimonialsSection() {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center  "
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-headTitle text-dynamicBorder text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-primary">
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
            Testimonials
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-4">
            What are people saying
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-textP max-w-6xl mx-auto px-4">
            &ldquo;Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative ml-0 sm:ml-4 md:ml-8 lg:ml-[12rem] my-8 sm:my-12 md:my-16 lg:my-[86px]">
          <div
            ref={scrollRef}
            className="flex justify-start gap-3 sm:gap-4 md:gap-6 overflow-x-auto flex-nowrap pl-2 sm:pl-4 md:pl-6 hide-scrollbar scroll-smooth"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full w-9 h-9 sm:w-10 sm:h-10"
            >
              <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              size="icon"
              onClick={scrollNext}
              className="rounded-full bg-primary w-9 h-9 sm:w-10 sm:h-10"
            >
              <FaArrowRight  className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
