import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const footerLinks = {
  Company: ["Products", "Services", "Analytics"],
  Help: ["Contact Support", "Terms & Conditions", "Privacy Policy"],
};

export function Footer() {
  return (
    <footer className="w-full flex justify-center bg-footerBG">
      <div className="max-w-[1920px] w-full flex flex-col justify-center items-center gap-[10px] pt-12 sm:pt-20 md:pt-32 lg:pt-40 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto_1fr] gap-6 sm:gap-8 lg:gap-10 w-full">
          <div className="space-y-3 sm:space-y-4 w-full max-w-[420px]">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={logo}
                alt="FinBiz Logo"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
              />
              <span className="text-xl sm:text-2xl font-bold">FinBiz</span>
            </div>
            <p className="text-textF font-normal text-sm sm:text-base md:text-lg lg:text-[20px]" style={{ fontFamily: 'DM Sans', lineHeight: '160%', letterSpacing: '0px' }}>
              Finance FinBiz is a 100% of software company and fully accessible the best platforms for your finance easy.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[
                { icon: FaTwitter, href: "#", hoverColor: "hover:bg-sky-500" },
                {
                  icon: FaFacebookF,
                  href: "#",
                  hoverColor: "hover:bg-blue-600",
                },
                {
                  icon: FaInstagram,
                  href: "#",
                  hoverColor: "hover:bg-pink-500",
                },
                { icon: FaGithub, href: "#", hoverColor: "hover:bg-gray-800" },
              ].map(({ icon: Icon, href, hoverColor }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:text-white transition-all duration-300 ${hoverColor}`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg sm:text-xl font-bold leading-[100%] mb-5 sm:mb-7">
                {title}
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-textF hover:text-foreground transition-colors font-normal leading-[100%]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="relative w-full max-w-[420px]">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Subscribe to Newsletter</h3>

            <div className="flex">
              <Input
                type="email"
                placeholder="Enter email address"
                className="
        bg-BgInput
        text-white 
        h-11 sm:h-12 md:h-[55px]
        rounded-l-lg sm:rounded-l-xl 
        rounded-r-none 
        border-none 
        focus-visible:ring-0 
        focus-visible:ring-offset-0
        flex-1
        text-sm sm:text-base
      "
              />

              <Button
                className="
        w-[100px] sm:w-[120px] md:w-[140px]
        h-11 sm:h-12 md:h-[55px]
        rounded-none
        rounded-r-lg sm:rounded-r-[8px]
        bg-[#A7E92F]
        hover:bg-[#9ee02a]
        text-white
        font-semibold
        px-3 sm:px-4 md:px-[16px]
        flex
        items-center
        justify-center
        gap-[10px]
        text-sm sm:text-base
      "
              >
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 py-6 sm:py-8 md:py-10 border-t border-border text-center text-muted-foreground w-full" style={{ fontFamily: 'DM Sans', fontWeight: 400, fontSize: '14px', lineHeight: '20px', letterSpacing: '0.5px' }}>
          © Copyright 2024 FinBiz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
