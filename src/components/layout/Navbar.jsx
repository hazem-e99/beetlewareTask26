import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { MobileMenu } from "../shared/MobileMenu.jsx";
import { navLinks } from "../../utils/navigationData.js";
import logo from "../../assets/images/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 border-b border-border/40 bg-NavBarBG backdrop-blur-lg after:content-[''] after:absolute after:left-0 after:right-0 after:top-[calc(100%+16px)] after:h-[0.8px] after:bg-lineNav">
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 py-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="FinBiz Logo" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
            <span className="text-xl sm:text-2xl font-bold">FinBiz</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link === "Pages" ? (
                <button 
                  key={link}
                  className="flex items-center gap-1 text-sm font-medium text-textP transition-colors hover:text-foreground"
                >
                  {link}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-textP transition-colors hover:text-foreground"
                >
                  {link}
                </a>
              )
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
<Button className="hidden md:inline-flex rounded-full border-t-[3px] border-l-[3px] border-r-[3px] border-border bg-muted text-sm font-semibold text-foreground hover:bg-muted/80 transition-colors">
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu 
        isOpen={isOpen} 
        navLinks={navLinks} 
        onClose={() => setIsOpen(false)} 
      />
    </nav>
  );
}
