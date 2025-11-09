import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer, XAxis } from "recharts";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn.js";

export function BoostingBusinessCard({ data, delay = 0.2, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn("bg-card border border-border rounded-3xl px-5 pt-5 sm:px-6 sm:pt-6 md:px-8 md:pt-8 pb-0 " , className)}
    >
      <div className="text-center mb-4 sm:mb-6 md:mb-8 flex flex-col items-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold mb-2 sm:mb-3 leading-tight">
          Boosting Business.
          <br /> Today and Tomorrow.
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-featureP w-full sm:w-4/5 md:w-3/4">
Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you.        </p>
      </div>

      <div className="overflow-y-auto max-h-[180px] sm:max-h-[200px] md:max-h-[220px] -mx-5 px-5 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 hide-scrollbar ">
        <div className="h-[250px] sm:h-[280px] md:h-[300px] bg-muted px-1 pt-1 rounded-lg"> 
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ bottom: 40, top: 5, left: 5, right: 5 }}>
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 11 }}
                interval={1}
                dy={10}
              />
              <Line
                type="linear"
                dataKey="gray"
                stroke="#6b7280"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
                opacity={0.6}
              />
              <Line
                type="linear"
                dataKey="blue"
                stroke="#3b82f6"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}

BoostingBusinessCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      blue: PropTypes.number.isRequired,
      gray: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
};
