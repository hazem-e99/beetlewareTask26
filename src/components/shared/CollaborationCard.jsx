import { motion } from "framer-motion";
import PropTypes from "prop-types";

export function CollaborationCard({ teamImages, delay = 0.3 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-card w-full 2xl:w-[352px] border border-border rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 2xl:px-[27px] 2xl:py-[59.5px] flex flex-col justify-between"
    >
      <div className="text-center">
        <h3 className="text-base sm:text-lg md:text-[17.859px] font-bold mb-2">
          Easy collaboration
        </h3>
        <p className="text-xs sm:text-sm md:text-[16px] text-featureP mb-4 sm:mb-6 md:mb-9">
          Seamlessly collaborate with your team members like never before.
        </p>
      </div>

      <div className="relative flex justify-center items-center h-40 sm:h-48 md:h-56 lg:h-64">
        <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-circle border border-circle" />
        <div className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border border-border" />

        <div className="flex justify-center -space-x-3 sm:-space-x-4 md:-space-x-5 relative z-10">
          {teamImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`team-member-${index + 1}`}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-[#FFFFFF1A] object-cover"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

CollaborationCard.propTypes = {
  teamImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
};
