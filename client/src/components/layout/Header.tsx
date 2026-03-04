import { Link } from "wouter";
import { Search, MapPin, Phone, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white flex flex-col relative z-50">
      {/* Top utility bar */}
      <div className="w-full border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 flex justify-end py-2 text-xs font-medium text-gray-600">
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center hover:text-primary transition-colors" data-testid="link-locations">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              Localidades
            </a>
            <a href="#" className="flex items-center hover:text-primary transition-colors" data-testid="link-search">
              <Search className="w-3.5 h-3.5 mr-1.5" />
              Pesquisar
            </a>
            <a href="#" className="flex items-center hover:text-primary transition-colors" data-testid="link-contact">
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Contato
            </a>
            <a href="#" className="flex items-center hover:text-primary transition-colors" data-testid="link-login">
              <User className="w-3.5 h-3.5 mr-1.5" />
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full border-b border-gray-200 shadow-sm relative">
        <div className="container mx-auto px-4 lg:px-0 flex items-center h-[72px]">
          
          {/* Logo - Red Background Block */}
          <div className="h-full bg-primary flex items-center justify-center px-4 lg:px-8 shrink-0 min-w-[150px] lg:min-w-[200px]">
            <Link href="/" className="flex items-center">
              <span className="text-white font-bold text-2xl tracking-tight" data-testid="text-logo">Rentokil</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center ml-12 space-x-8 text-[15px] font-medium text-gray-800">
            <a href="#" className="hover:text-primary transition-colors pb-6 mt-6 border-b-2 border-transparent hover:border-primary" data-testid="nav-services">Serviços</a>
            <a href="#" className="hover:text-primary transition-colors pb-6 mt-6 border-b-2 border-transparent hover:border-primary" data-testid="nav-global">Contas globais</a>
            <a href="#" className="hover:text-primary transition-colors pb-6 mt-6 border-b-2 border-transparent hover:border-primary" data-testid="nav-sectors">Setores de negócios</a>
            <a href="#" className="hover:text-primary transition-colors pb-6 mt-6 border-b-2 border-transparent hover:border-primary" data-testid="nav-about">Sobre nós</a>
            <a href="#" className="hover:text-primary transition-colors pb-6 mt-6 border-b-2 border-transparent hover:border-primary" data-testid="nav-blog">Blog</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="ml-auto lg:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-gray-600" data-testid="button-mobile-menu">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
