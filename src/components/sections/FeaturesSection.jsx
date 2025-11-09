import { motion } from "framer-motion";
import { AnalyticsCard } from "../shared/AnalyticsCard.jsx";
import { BoostingBusinessCard } from "../shared/BoostingBusinessCard.jsx";
import { CollaborationCard } from "../shared/CollaborationCard.jsx";
import { AccountingCard } from "../shared/AccountingCard.jsx";
import { ExpenseManagementCard } from "../shared/ExpenseManagementCard.jsx";
import {
  simpleAnalyticsData,
  boostingBusinessData,
  invoices,
} from "../../utils/featuresData.js";
import team1 from "../../assets/images/team(1).png";
import team2 from "../../assets/images/team(2).png";
import team3 from "../../assets/images/team(3).png";
import team4 from "../../assets/images/team(4).png";
import team5 from "../../assets/images/team(5).png";
import vector from "../../assets/images/vector.png";

const team = [team1, team2, team3, team4, team5];
export function FeaturesSection() {
  return (
    <section id="features" className="">
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 custom-margin">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-10 md:space-y-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            <AnalyticsCard data={simpleAnalyticsData} percentage="14.12%" />
            <BoostingBusinessCard
              data={boostingBusinessData}
              delay={0.2}
              className="lg:col-span-2"
            />
            <CollaborationCard teamImages={team} delay={0.3} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 2xl:gap-[30px]">
            <AccountingCard
              amount={3453.0}
              invoices={invoices}
              vectorIcon={vector}
              delay={0.4}
            />
            <ExpenseManagementCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
