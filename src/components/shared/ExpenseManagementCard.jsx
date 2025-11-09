import { motion } from "framer-motion";
import { Button } from "../ui/button.jsx";

export function ExpenseManagementCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="bg-card border border-border rounded-3xl px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-[48px] lg:py-[52px] flex flex-col justify-between"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold !leading-[1.5] mb-4 sm:mb-5 md:mb-6 w-full lg:max-w-[541px]">
        Optimise expense management as a team
      </h2>
      <p className="text-featureP text-sm sm:text-base md:text-lg lg:text-[22px] mb-8 leading-relaxed sm:leading-loose lg:leading-[1.8]">
        Bring harmony to team expenses with budget limits and real-time
        monitoring. Freedom for your staff. Peace of mind for you.
      </p>
      <Button
        size="lg"
        className="w-full sm:w-fit px-8 bg-foreground hover:bg-foreground text-background border border-border rounded-full"
      >
        Explore more
      </Button>
    </motion.div>
  );
}
