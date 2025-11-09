import { motion } from "framer-motion";
import { MoreVertical } from "lucide-react";
import CountUp from "react-countup";
import PropTypes from "prop-types";

export function AccountingCard({ amount, invoices, vectorIcon, delay = 0.4 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-card border border-border rounded-3xl px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8"
    >
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
        Real-time accounting at your fingertips.
      </h3>
      <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-featureP w-full mb-6 sm:mb-8 md:mb-10 leading-relaxed">
        Take the pain out of book keeping! Wave goodbye to mountains of
        paperwork and endless email reminders. There&apos;s now a new way of
        accounting.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8">
        <div className="bg-muted p-4 rounded-t-xl flex-1 w-full sm:w-auto">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[30px] font-bold mb-6 sm:mb-8">
            $<CountUp end={amount} duration={2} separator="," decimals={2} />
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-secondary rounded-full w-3/4" />
            <div className="h-2 bg-secondary rounded-full w-3/4" />
            <div className="h-2 bg-secondary rounded-full w-1/2" />
          </div>
        </div>

        <div className="flex flex-col items-start w-full sm:w-auto gap-3 sm:gap-4 md:gap-5 2xl:w-[311px] 2xl:gap-[21px] bg-muted py-3 px-3 sm:py-4 sm:px-4 md:py-4 md:px-5 2xl:py-[19px] 2xl:px-[21px] rounded-lg mb-[38px] ">
          <div className="text-xs sm:text-sm font-semibold text-left">
            MonthlyInvoice
          </div>
          <div className="space-y-2 sm:space-y-3 w-full">
            {invoices.map((invoice, index) => (
              <div key={index} className="flex items-center gap-1 py-2 sm:py-3">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: invoice.color }}
                >
                  <img
                    src={vectorIcon}
                    alt={invoice.name}
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                  />
                </div>
                <div className="flex-1 ps-1 sm:ps-2 min-w-0">
                  <span className="text-xs sm:text-sm block mb-1 sm:mb-2 truncate">
                    {invoice.name}
                  </span>
                  <div className="h-1.5 sm:h-2 bg-secondary rounded-full w-3/4 mt-1" />
                </div>
                <button className="text-muted-foreground hover:text-foreground flex-shrink-0">
                  <MoreVertical className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

AccountingCard.propTypes = {
  amount: PropTypes.number.isRequired,
  invoices: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  vectorIcon: PropTypes.string.isRequired,
  delay: PropTypes.number,
};
