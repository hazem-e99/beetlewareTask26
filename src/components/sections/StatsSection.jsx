import { motion } from "framer-motion";
import { SpendOverviewCard } from "../ui/SpendOverviewCard.jsx";
import { MetricCard } from "../shared/MetricCard.jsx";
import { EmployeeProgressCard } from "../shared/EmployeeProgressCard.jsx";
import {
  spendData,
  topMetrics,
  employeeCategories,
} from "../../utils/statsData.js";

export function StatsSection() {
  return (
    <section className="py-4 sm:py-6 md:py-8 lg:py-10 m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10 relative bg-background rounded-[20px]">
      <div className="relative  w-full p-2 sm:p-3 md:p-4 lg:px-6 xl:px-8 rounded-lg bg-surface shadow-lg ">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {topMetrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3 sm:gap-4 md:gap-6">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full flex-shrink-0 h-full lg:min-h-[480px] xl:w-[259px]"
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden w-full h-full flex flex-col">
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-center gap-11">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-xs sm:text-sm text-foreground font-normal">
                    Total Balance
                  </h3>
                </div>
                <div className="text-3xl sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium">
                  $350.0
                </div>
                <div
                  className="w-full bg-foreground text-background px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-center text-sm sm:text-base cursor-pointer hover:opacity-90 transition-opacity"
                  role="button"
                  tabIndex={0}
                >
                  Transfer
                </div>
              </div>

              <div className="flex justify-center">
                <div className="border-t border-border/30 w-[90%]"></div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-xs sm:text-sm text-foreground font-normal">
                    Total Income
                  </h3>
                  <span className="text-xs sm:text-sm text-foreground">
                    92%
                  </span>
                </div>
                <div className="text-3xl sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium">
                  $320.0
                </div>
              </div>

              <div className="flex justify-center">
                <div className="border-t border-border/30 w-[90%]"></div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-xs sm:text-sm text-foreground font-normal">
                    Total Expense
                  </h3>
                  <span className="text-xs sm:text-sm text-foreground">
                    92%
                  </span>
                </div>
                <div className="text-3xl sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium">
                  $220.0
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex-1 bg-card border border-border rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 h-full lg:min-h-[480px] xl:w-[881px]"
          >
            <SpendOverviewCard data={spendData} />
          </motion.div>

          {/* Right Sidebar - Employee */}
          <EmployeeProgressCard
            categories={employeeCategories}
            className="w-full flex-shrink-0 h-full lg:min-h-[480px] xl:w-[286px]"
          />
        </div>
      </div>
    </section>
  );
}
