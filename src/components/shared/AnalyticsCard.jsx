import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { MoveUp } from "lucide-react";
import PropTypes from "prop-types";

export function AnalyticsCard({ data, percentage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="bg-card border border-border rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 2xl:px-[27px] 2xl:py-[59.5px] self-stretch "
    >
      <h3 className="text-base sm:text-lg md:text-[17.859px] font-bold mb-2 text-center">
        Simple analytics
      </h3>
      <p className="text-xs sm:text-sm md:text-[16px] text-featureP mb-4 sm:mb-6 md:mb-8 text-center">
        Make informed decisions backed by data through our analytics tools.
      </p>

      <div className="bg-muted rounded-lg flex flex-col items-start self-stretch  h-auto sm:h-auto md:h-52 lg:h-56 2xl:h-[264px]">
        <div className="flex items-center gap-2 mb-4 sm:mb-6 p-3 pt-4 sm:p-4 sm:pt-5 md:p-5 md:pt-6 lg:p-6 lg:pt-7 2xl:px-8 2xl:pt-8 2xl:pb-0">
          <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/10 border border-[#33C6AB]">
            <MoveUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#33C6AB]" />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-[#33C6AB]">
            {percentage}
          </span>
        </div>

        <div className="h-28 sm:h-32 md:h-40 w-full flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="natural"
                dataKey="value"
                stroke="#33C6AB"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}

AnalyticsCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  percentage: PropTypes.string.isRequired,
};
