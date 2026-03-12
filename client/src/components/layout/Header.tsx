import { Search, MapPin, Phone, User, Menu, Truck, Target, Cloud, Globe, Info, BookOpen, Bug, Wind, Droplets, Trash2, Trees, ShieldCheck, Building2, Factory, Warehouse, Hotel, ShoppingCart, Pill, Briefcase, LayoutGrid, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import LocationsModal from "@/components/LocationsModal";
import logoImg from "@/assets/images/logo.png";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [location] = useLocation();
  const [showLocationsModal, setShowLocationsModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

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
      label: 'Contas nacionais',
      testId: 'nav-global',
      content: [
        { icon: Globe, text: 'Visão\ngeral' },
        { icon: Target, text: 'Soluções\nnacionais' },
      ]
    },
    {
      id: 'sectors',
      label: 'Setores empresariais',
      testId: 'nav-sectors',
      content: [
        { icon: LayoutGrid, text: 'Todos os setores\nempresariais', href: '/sectors' },
        { icon: Factory, text: 'Processamento\nalimentar', href: '/sectors' },
        { icon: Building2, text: 'Gestão de\ninstalações', href: '/sectors' },
        { icon: Warehouse, text: 'Logística e\narmazenamento', href: '/sectors' },
        { icon: Hotel, text: 'Hotelaria', href: '/sectors' },
        { icon: ShoppingCart, text: 'Retalho\nalimentar', href: '/sectors' },
        { icon: Pill, text: 'Farmacêutica', href: '/sectors' },
        { icon: Briefcase, text: 'Escritórios', href: '/sectors' },
      ]
    },
    {
      id: 'about',
      label: 'Sobre',
      testId: 'nav-about',
      content: [
        { icon: Info, text: 'Quem\nsomos', href: '/about' },
        { icon: Globe, text: 'Nossa\nhistória', href: '/about/history' },
        { icon: Target, text: 'Carreiras', href: '/about/careers' },
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
            className="fixed top-0 left-0 w-full bg-[#001d3d] z-[100] h-[48px] sm:h-[60px] flex items-center shadow-lg"
          >
            <div className="container mx-auto px-2 sm:px-4 flex items-center justify-center">
              <div className="flex items-center gap-2 sm:gap-8">
                <a href="tel:+244928737888" className="text-white font-bold text-[11px] sm:text-[15px] tracking-tight hover:underline whitespace-nowrap">
                  +244 928 737 888
                </a>
                <a href="tel:+244928737888" className="bg-[#0077c0] text-white px-3 sm:px-8 py-1.5 sm:py-2 font-bold text-[11px] sm:text-sm h-[48px] sm:h-[60px] flex items-center transition-colors hover:bg-[#005fa3] whitespace-nowrap">
                  Ligar agora
                </a>
                <Link href="/contact" className="text-white font-bold text-[11px] sm:text-sm hover:underline whitespace-nowrap">
                  Solicite uma chamada
                </Link>
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
          {/* Main utilities on Top Bar */}
          <div className="flex justify-end py-2 text-[13px] font-medium text-[#333333] ml-auto">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setShowLocationsModal(true)}
                className="flex items-center hover:text-[#f2c92f] transition-colors cursor-pointer" 
                data-testid="link-locations"
              >
                <MapPin className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Locais {selectedLocation && `(${selectedLocation})`}
              </button>
              <a href="#" className="flex items-center hover:text-[#f2c92f] transition-colors" data-testid="link-search">
                <Search className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Pesquisar
              </a>
              <Link href="/contact" className="flex items-center hover:text-[#f2c92f] transition-colors" data-testid="link-contact">
                <Phone className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - white background - Full width wrapper */}
      <div className="w-full bg-white border-b border-gray-100 relative h-[70px] sm:h-[80px] md:h-[90px]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Restrained to the main navigation bar */}
            <Link href="/">
              <div 
                className="flex items-center justify-center h-full cursor-pointer py-2"
                data-testid="text-logo-container"
              >
                <img src={logoImg} alt="Bioprev Logo" className="w-[120px] sm:w-[150px] md:w-[180px] max-h-full object-contain" data-testid="img-logo" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-full text-[15px] font-extrabold text-[#333333]">
              {menuItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative h-full flex items-center group cursor-pointer px-4"
                  onMouseEnter={() => setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link href={item.id === 'services' ? '/services' : '#'}>
                    <span 
                      className={`transition-colors tracking-wider ${activeMenu === item.id ? 'text-[#333333]' : 'hover:text-[#f2c92f]'}`} 
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
                          className="absolute bottom-0 left-0 w-full h-1 bg-[#f2c92f] origin-center" 
                        />
                        
                        {/* Mega Menu Overlay */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="fixed top-[126px] left-0 w-full z-40"
                          style={{ pointerEvents: "auto" }}
                        >
                          <div className="absolute top-[-10px] left-0 w-full h-[10px] bg-transparent" />
                          <div className="w-full bg-[#f2f2f2] shadow-xl border-t-0 py-0">
                            <div className="container mx-auto px-4 flex justify-center">
                              <div className="flex bg-white border-x border-gray-200">
                                {item.content.map((subItem, idx) => (
                                  <Link 
                                    key={idx}
                                    href={subItem.href || (subItem.text.includes('Todos') ? '/services' : '#')} 
                                    className={`flex flex-col items-center justify-center p-6 w-[140px] min-h-[160px] hover:bg-gray-50 transition-colors ${idx !== item.content.length - 1 ? 'border-r border-gray-100' : ''} text-center group/item relative`}
                                  >
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#f2c92f] transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center" />
                                    
                                    <subItem.icon className="w-12 h-12 text-[#333333] mb-3 transition-transform group-hover/item:scale-105" strokeWidth={0.75} />
                                    <span className="text-[13px] font-normal text-[#333333] whitespace-pre-line leading-tight">
                                      {subItem.text}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="ml-auto lg:hidden flex items-center">
              <Button variant="ghost" size="icon" className="text-[#333333]" data-testid="button-mobile-menu" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[200]"
              onClick={() => { setMobileMenuOpen(false); setMobileSubmenu(null); }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-[85%] max-w-[360px] h-full bg-white z-[201] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-end px-4 py-2 border-b border-gray-100">
                <button onClick={() => { setMobileMenuOpen(false); setMobileSubmenu(null); }} className="p-1.5 text-[#333333]" data-testid="button-close-mobile-menu">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>

              <div className="py-2">
                {menuItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-50">
                    <button
                      className="w-full flex items-center justify-between px-6 py-4 text-[15px] font-bold text-[#333333] hover:bg-gray-50"
                      onClick={() => setMobileSubmenu(mobileSubmenu === item.id ? null : item.id)}
                      data-testid={`mobile-${item.testId}`}
                    >
                      {item.label}
                      <ChevronRight className={`w-4 h-4 transition-transform ${mobileSubmenu === item.id ? 'rotate-90' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          {item.content.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href || '#'}
                              onClick={() => { setMobileMenuOpen(false); setMobileSubmenu(null); }}
                              className="flex items-center gap-3 px-8 py-3 text-[14px] text-[#555555] hover:text-[#007cc3] hover:bg-white transition-colors"
                            >
                              <subItem.icon className="w-5 h-5 text-[#007cc3] shrink-0" strokeWidth={1.5} />
                              <span className="whitespace-pre-line leading-tight">{subItem.text}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="p-6 space-y-3 border-t border-gray-100">
                <button onClick={() => { setShowLocationsModal(true); setMobileMenuOpen(false); }} className="flex items-center gap-2 text-[14px] text-[#555555] hover:text-[#007cc3]">
                  <MapPin className="w-4 h-4" /> Locais
                </button>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-[14px] text-[#555555] hover:text-[#007cc3]">
                  <Phone className="w-4 h-4" /> Contato
                </Link>
                <a href="tel:+244928737888" className="flex items-center gap-2 text-[14px] font-bold text-[#007cc3]">
                  <Phone className="w-4 h-4" /> +244 928 737 888
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
