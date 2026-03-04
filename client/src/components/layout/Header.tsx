import { Search, MapPin, Phone, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-[#f8f9fa] flex flex-col relative z-50">
      {/* Top utility bar */}
      <div className="w-full border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-end py-2 text-[13px] font-semibold text-[#002d4b]">
          <div className="flex items-center space-x-5">
            <a href="#" className="flex items-center hover:text-primary transition-colors" data-testid="link-locations">
              <MapPin className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
              Localidades
            </a>
            <a href="#" className="flex items-center hover:text-primary transition-colors" data-testid="link-search">
              <Search className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
              Pesquisar
            </a>
            <a href="#" className="flex items-center hover:text-primary transition-colors" data-testid="link-contact">
              <Phone className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
              Contato
            </a>
            <a href="#" className="flex items-center hover:text-primary transition-colors" data-testid="link-login">
              <User className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full bg-white border-b border-gray-200 shadow-sm relative">
        <div className="container mx-auto px-4 flex items-center h-[90px] relative">
          
          {/* Logo - Red Background Block - Fixed width and height to match image */}
          <div className="absolute top-0 left-0 h-full bg-[#e31818] flex items-center justify-center px-8 shrink-0 w-[240px]">
            <span className="text-white font-bold text-3xl tracking-tight" data-testid="text-logo">Rentokil</span>
          </div>

          {/* Desktop Navigation - Positioned exactly as in image */}
          <nav className="hidden lg:flex items-center ml-[260px] space-x-10 text-[16px] font-bold text-[#002d4b]">
            <a href="#" className="hover:text-primary transition-colors h-[90px] flex items-center" data-testid="nav-services">Serviços</a>
            <a href="#" className="hover:text-primary transition-colors h-[90px] flex items-center" data-testid="nav-global">Contas globais</a>
            <a href="#" className="hover:text-primary transition-colors h-[90px] flex items-center" data-testid="nav-sectors">Setores de negócios</a>
            <a href="#" className="hover:text-primary transition-colors h-[90px] flex items-center" data-testid="nav-about">Sobre nós</a>
            <a href="#" className="hover:text-primary transition-colors h-[90px] flex items-center" data-testid="nav-blog">Blog</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="ml-auto lg:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-[#002d4b]" data-testid="button-mobile-menu">
              <Menu className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
