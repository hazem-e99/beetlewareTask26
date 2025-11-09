import { Button } from "../ui/button.jsx";
import { tabLinks } from "../../utils/navigationData.js";

export function Tabs() {
  return (
    <div className="flex justify-center items-center w-full px-2 sm:px-4 md:px-6 lg:px-0 pt-4 sm:pt-5 md:pt-[48px]">
      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-[16px] py-2 sm:py-[9px] px-2 sm:px-3 md:px-[12px] lg:px-[8px] rounded-full border border-[#FFFFFF1A] shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md bg-[#FFFFFF33] mx-auto w-fit max-w-full overflow-x-auto scrollbar-hide">
        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 min-w-max flex-nowrap">
          {tabLinks.map((link) => (
            <button
              key={link}
              className="px-2 sm:px-3 md:px-5 lg:px-8
                    h-8 sm:h-9 md:h-10 lg:h-12 
                    rounded-full 
                text-xs sm:text-sm md:text-base lg:text-[18px] font-medium 
                text-foreground 
                transition-colors whitespace-nowrap"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Login Button */}
        <Button className="h-8 sm:h-9 md:h-10 lg:h-12 px-3 sm:px-4 md:px-6 lg:px-8 text-xs sm:text-sm md:text-base bg-white text-black hover:bg-foreground hover:text-white rounded-full whitespace-nowrap flex-shrink-0">
          Login
        </Button>
      </div>
    </div>
  );
}
