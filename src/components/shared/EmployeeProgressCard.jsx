import { motion } from "framer-motion";
import PropTypes from "prop-types";

export function EmployeeProgressCard({ categories, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`lg:col-span-3 bg-card border border-border rounded-2xl p-4 sm:p-5 md:p-6 ${className}`}
    >
      <div className="space-y-4 sm:space-y-5 md:space-y-6 flex flex-col gap-5">
        {categories.map((category, index) => (
          <div key={category.label} className="space-y-2 sm:space-y-3">
            <span className="text-xs sm:text-sm text-foreground">
              {category.label}
            </span>
            <div className="h-2 sm:h-2.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${category.progressF}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                className="h-full bg-muted-foreground/5 rounded-full"
              />
            </div>
            <div className="h-2 sm:h-2.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${category.progressL}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                className="h-full bg-muted-foreground/25 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

EmployeeProgressCard.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      progressF: PropTypes.number.isRequired,
      progressL: PropTypes.number.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};
