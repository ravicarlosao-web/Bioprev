import { Search, MapPin, Phone, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full flex flex-col relative z-50">
      {/* Top utility bar - gray background - Full width wrapper */}
      <div className="w-full bg-[#f2f2f2] border-b border-gray-200">
        <div className="container mx-auto px-4 relative">
          {/* Logo - Red Background Block - Positioned to overlap both bars and touch Hero */}
          <div 
            className="absolute top-0 left-15 bg-[#e31818] flex items-center justify-center px-8 z-50 w-[220px] h-[111.5px] shadow-md"
            data-testid="text-logo-container"
          >
            <span className="text-white font-bold text-3xl tracking-tight" data-testid="text-logo">Rentokil</span>
          </div>

          <div className="flex justify-end py-2 text-[13px] font-bold text-[#333333]">
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center hover:text-[#e31818] transition-colors" data-testid="link-locations">
                <MapPin className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Locations
              </a>
              <a href="#" className="flex items-center hover:text-[#e31818] transition-colors" data-testid="link-search">
                <Search className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Search
              </a>
              <a href="#" className="flex items-center hover:text-[#e31818] transition-colors" data-testid="link-contact">
                <Phone className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Contact
              </a>
              <a href="#" className="flex items-center hover:text-[#e31818] transition-colors" data-testid="link-login">
                <User className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Login
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - white background - Full width wrapper */}
      <div className="w-full bg-white border-b border-gray-200 relative h-[75px]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center h-full">
            {/* Desktop Navigation - Pushed to the right with margin to clear the logo */}
            <nav className="hidden lg:flex items-center ml-auto space-x-8 text-[15px] font-extrabold text-[#333333]">
              <a href="#" className="hover:text-[#e31818] transition-colors uppercase tracking-wider" data-testid="nav-services">Services</a>
              <a href="#" className="hover:text-[#e31818] transition-colors uppercase tracking-wider" data-testid="nav-global">Global accounts</a>
              <a href="#" className="hover:text-[#e31818] transition-colors uppercase tracking-wider" data-testid="nav-sectors">Business sectors</a>
              <a href="#" className="hover:text-[#e31818] transition-colors uppercase tracking-wider" data-testid="nav-about">About</a>
              <a href="#" className="hover:text-[#e31818] transition-colors uppercase tracking-wider" data-testid="nav-blog">Blog</a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="ml-auto lg:hidden flex items-center">
              <Button variant="ghost" size="icon" className="text-[#333333]" data-testid="button-mobile-menu">
                <Menu className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
