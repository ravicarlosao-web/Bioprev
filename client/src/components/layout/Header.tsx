import { Search, MapPin, Phone, User, Menu, Truck, Target, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [showServices, setShowServices] = useState(false);

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
                Locais
              </a>
              <a href="#" className="flex items-center hover:text-[#e31818] transition-colors" data-testid="link-search">
                <Search className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Pesquisar
              </a>
              <a href="#" className="flex items-center hover:text-[#e31818] transition-colors" data-testid="link-contact">
                <Phone className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Contato
              </a>
              <a href="#" className="flex items-center hover:text-[#e31818] transition-colors" data-testid="link-login">
                <User className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Entrar
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
            <nav className="hidden lg:flex items-center ml-auto h-full text-[15px] font-extrabold text-[#333333]">
              <div 
                className="relative h-full flex items-center group cursor-pointer px-4"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <span className={`transition-colors uppercase tracking-wider ${showServices ? 'text-[#333333]' : 'hover:text-[#e31818]'}`} data-testid="nav-services">Serviços</span>
                {showServices && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e31818]" />
                )}
                
                {/* Mega Menu Overlay */}
                {showServices && (
                  <div className="fixed top-[111.5px] left-0 w-full bg-[#f2f2f2] shadow-xl border-t border-gray-200 py-0 z-40">
                    <div className="container mx-auto px-4 flex">
                      <div className="w-[155px] shrink-0 lg:block hidden" /> {/* Adjust based on logo position */}
                      <div className="flex bg-white border-x border-gray-200 min-h-[160px]">
                        <a href="#" className="flex flex-col items-center justify-center p-6 w-[140px] hover:bg-gray-50 transition-colors border-r border-gray-100 text-center group/item">
                          <Truck className="w-12 h-12 text-[#333333] mb-3 transition-transform group-hover/item:scale-105" strokeWidth={0.75} />
                          <span className="text-[13px] font-normal text-[#333333] leading-tight">Todos os<br/>serviços</span>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center p-6 w-[140px] hover:bg-gray-50 transition-colors border-r border-gray-100 text-center group/item">
                          <Target className="w-12 h-12 text-[#333333] mb-3 transition-transform group-hover/item:scale-105" strokeWidth={0.75} />
                          <span className="text-[13px] font-normal text-[#333333] leading-tight">Controle de<br/>pragas</span>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center p-6 w-[140px] hover:bg-gray-50 transition-colors text-center group/item">
                          <Cloud className="w-12 h-12 text-[#333333] mb-3 transition-transform group-hover/item:scale-105" strokeWidth={0.75} />
                          <span className="text-[13px] font-normal text-[#333333] leading-tight">Controle digital<br/>de pragas</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="px-4 hover:text-[#e31818] transition-colors uppercase tracking-wider" data-testid="nav-global">Contas globais</a>
              <a href="#" className="px-4 hover:text-[#e31818] transition-colors uppercase tracking-wider" data-testid="nav-sectors">Setores empresariais</a>
              <a href="#" className="px-4 hover:text-[#e31818] transition-colors uppercase tracking-wider" data-testid="nav-about">Sobre</a>
              <a href="#" className="px-4 hover:text-[#e31818] transition-colors uppercase tracking-wider" data-testid="nav-blog">Blog</a>
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
