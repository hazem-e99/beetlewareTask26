import { motion } from "framer-motion";
import PropTypes from "prop-types";

export function MetricCard({ metric, index }) {
  const getTextColor = () => {
    if (index === 0) return "#72A700";
    if (index === 1) return "#EE1F1F";
    return "#003FDB";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-4 sm:p-5 md:p-6"
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm md:text-[20px] text-foreground font-normal">{metric.label}</span>
        <span className="text-xs md:text-[14px] font-medium" style={{ color: getTextColor() }}>
          {metric.change}
        </span>
      </div>
      <div className="flex items-end justify-between gap-3 sm:gap-4">
        <div className="text-3xl sm:text-[36px] md:text-[40px] lg:text-[56px] font-normal">{metric.value}</div>
        <div className="flex items-end gap-0.5 sm:gap-1 h-10 sm:h-12">
          {metric.bars.map((height, i) => (
            <div
              key={i}
              className={`w-0.5 sm:w-1 ${metric.barColor[i]} rounded-sm mx-0.5`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

MetricCard.propTypes = {
  metric: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    bars: PropTypes.arrayOf(PropTypes.number).isRequired,
    barColor: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
