import { Search, MapPin, Phone, User, Menu, Truck, Target, Cloud, Globe, Info, BookOpen, Bug, Wind, Droplets, Trash2, Trees, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import LocationsModal from "@/components/LocationsModal";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [location] = useLocation();
  const [showLocationsModal, setShowLocationsModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky header after scrolling past hero (approx 400px + some buffer)
      if (window.scrollY > 450) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      id: 'services',
      label: 'Serviços',
      testId: 'nav-services',
      content: [
        { icon: ShieldCheck, text: 'Serviços de\ndesinfestação', href: '/services/disinfestation' },
        { icon: Bug, text: 'Gorgulhos e\ntraças', href: '/services/pests' },
        { icon: Wind, text: 'Serviços de\nLimpeza', href: '/services/cleaning' },
        { icon: Trash2, text: 'Recolha de\nResíduos', href: '/services/waste' },
        { icon: Droplets, text: 'Fornecimento de\nAgua potavel', href: '/services/water' },
        { icon: Trees, text: 'Serviço de\nJardinagem', href: '/services/gardening' },
      ]
    },
    {
      id: 'global',
      label: 'Contas globais',
      testId: 'nav-global',
      content: [
        { icon: Globe, text: 'Visão\ngeral' },
        { icon: Target, text: 'Soluções\nglobais' },
      ]
    },
    {
      id: 'sectors',
      label: 'Setores empresariais',
      testId: 'nav-sectors',
      content: [
        { icon: Target, text: 'Alimentos e\nbebidas' },
        { icon: Truck, text: 'Logística e\nvarejo' },
        { icon: Info, text: 'Saúde e\neducação' },
      ]
    },
    {
      id: 'about',
      label: 'Sobre',
      testId: 'nav-about',
      content: [
        { icon: Info, text: 'Quem\nsomos' },
        { icon: Globe, text: 'Nossa\nhistória' },
        { icon: Target, text: 'Carreiras' },
      ]
    },
    {
      id: 'blog',
      label: 'Blog',
      testId: 'nav-blog',
      content: [
        { icon: BookOpen, text: 'Blog', href: '/blog' },
        { icon: BookOpen, text: 'Últimas\nnotícias', href: '/blog' },
        { icon: Info, text: 'Dicas de\nprevenção', href: '/blog' },
      ]
    }
  ];

  return (
    <header className="w-full flex flex-col relative z-50">
      {/* Sticky Header - Image 1 Style */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-[#001d3d] z-[100] h-[60px] flex items-center shadow-lg"
          >
            <div className="container mx-auto px-4 flex items-center justify-center">
              <div className="flex items-center space-x-8">
                <div className="text-white font-bold text-[15px] tracking-tight">
                  <a href="tel:+244947059109" className="hover:underline">+244 947 059 109</a>
                  <span className="mx-2">|</span>
                  <a href="tel:+244928737888" className="hover:underline">+244 928 737 888</a>
                </div>
                <a href="tel:+244947059109" className="bg-[#0077c0] text-white px-8 py-2 font-bold text-sm h-[60px] flex items-center transition-colors hover:bg-[#005fa3]">
                  Ligar agora
                </a>
                <a href="#" className="text-white font-bold text-sm hover:underline">
                  Solicite uma chamada
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Locations Modal */}
      <LocationsModal 
        isOpen={showLocationsModal}
        onClose={() => setShowLocationsModal(false)}
        onSelectLocation={setSelectedLocation}
      />

      {/* Top utility bar - gray background - Full width wrapper */}
      <div className="w-full bg-[#f2f2f2] border-b border-gray-200">
        <div className="container mx-auto px-4 relative flex items-center justify-between">
          {/* Logo - Red Background Block - Positioned to overlap both bars and touch Hero */}
          <Link href="/">
            <div 
              className="absolute top-0 left-15 bg-[#e31818] flex items-center justify-center px-8 z-50 w-[220px] h-[111.5px] shadow-md cursor-pointer group"
              data-testid="text-logo-container"
            >
              <span className="text-white font-bold text-3xl tracking-tight transition-transform group-hover:scale-105" data-testid="text-logo">Bioprev</span>
            </div>
          </Link>

          {/* Main utilities on Top Bar */}
          <div className="flex justify-end py-2 text-[13px] font-bold text-[#333333] ml-auto">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setShowLocationsModal(true)}
                className="flex items-center hover:text-[#e31818] transition-colors cursor-pointer" 
                data-testid="link-locations"
              >
                <MapPin className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Locais {selectedLocation && `(${selectedLocation})`}
              </button>
              <a href="#" className="flex items-center hover:text-[#e31818] transition-colors" data-testid="link-search">
                <Search className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Pesquisar
              </a>
              <Link href="/contact" className="flex items-center hover:text-[#e31818] transition-colors" data-testid="link-contact">
                <Phone className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Contato
              </Link>
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
              {menuItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative h-full flex items-center group cursor-pointer px-4"
                  onMouseEnter={() => setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link href={item.id === 'services' ? '/services' : '#'}>
                    <span 
                      className={`transition-colors tracking-wider ${activeMenu === item.id ? 'text-[#333333]' : 'hover:text-[#e31818]'}`} 
                      data-testid={item.testId}
                    >
                      {item.label}
                    </span>
                  </Link>
                  
                  <AnimatePresence>
                    {activeMenu === item.id && (
                      <>
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute bottom-0 left-0 w-full h-1 bg-[#e31818] origin-center" 
                        />
                        
                        {/* Mega Menu Overlay */}
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="fixed top-[111.5px] left-0 w-full bg-[#f2f2f2] shadow-xl border-t border-gray-200 py-0 z-40"
                        >
                          <div className="container mx-auto px-4 flex justify-center">
                            <div className="flex bg-white border-x border-gray-200 min-h-[160px]">
                              {item.content.map((subItem, idx) => (
                                <Link 
                                  key={idx}
                                  href={subItem.href || (subItem.text.includes('Todos') ? '/services' : '#')} 
                                  className={`flex flex-col items-center justify-center p-6 w-[140px] hover:bg-gray-50 transition-colors ${idx !== item.content.length - 1 ? 'border-r border-gray-100' : ''} text-center group/item relative`}
                                >
                                  {/* Red Hover Indicator for Submenu Items */}
                                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e31818] transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center" />
                                  
                                  <subItem.icon className="w-12 h-12 text-[#333333] mb-3 transition-transform group-hover/item:scale-105" strokeWidth={0.75} />
                                  <span className="text-[13px] font-normal text-[#333333] whitespace-pre-line leading-tight">
                                    {subItem.text}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ))}
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
