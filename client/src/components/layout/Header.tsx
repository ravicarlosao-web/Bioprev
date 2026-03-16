import { Search, MapPin, Phone, User, Menu, Truck, Target, Cloud, Globe, Info, BookOpen, Bug, Wind, Droplets, Trash2, Trees, ShieldCheck, Building2, Factory, Warehouse, Hotel, ShoppingCart, Pill, Briefcase, LayoutGrid, ChevronRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import logoImg from "@/assets/images/logo.png";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

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
      id: 'national',
      label: 'Contas nacionais',
      testId: 'nav-national',
      content: [
        { icon: Globe, text: 'Visão\ngeral', href: '/national-accounts/overview' },
        { icon: Target, text: 'Soluções\nnacionais', href: '/national-accounts/solutions' },
      ]
    },
    {
      id: 'sectors',
      label: 'Setores empresariais',
      testId: 'nav-sectors',
      content: [
        { icon: LayoutGrid, text: 'Todos os setores\nempresariais', href: '/sectors' },
        { icon: Factory, text: 'Processamento\nalimentar', href: '/sectors/food-processing' },
        { icon: Building2, text: 'Gestão de\ninstalações', href: '/sectors/facilities' },
        { icon: Warehouse, text: 'Logística e\narmazenamento', href: '/sectors/logistics' },
        { icon: Hotel, text: 'Hotelaria', href: '/sectors/hospitality' },
        { icon: ShoppingCart, text: 'Retalho\nalimentar', href: '/sectors/food-retail' },
        { icon: Pill, text: 'Farmacêutica', href: '/sectors/pharmaceutical' },
        { icon: Briefcase, text: 'Escritórios', href: '/sectors/offices' },
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
      <div 
        className={`fixed top-0 left-0 w-full bg-[#001d3d] z-[100] h-[48px] sm:h-[60px] flex items-center shadow-lg transition-transform duration-300 ease-in-out ${showSticky ? 'translate-y-0' : '-translate-y-full'}`}
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
      </div>

      <div className="w-full bg-[#f2f2f2] border-b border-gray-200">
        <div className="container mx-auto px-4 relative flex items-center justify-between">
          <div className="flex justify-end py-2 text-[13px] font-medium text-[#333333] ml-auto">
            <div className="flex items-center space-x-6">
              <Link 
                href="/locations"
                className="flex items-center hover:text-[#f2c92f] transition-colors cursor-pointer" 
                data-testid="link-locations"
              >
                <MapPin className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                Locais
              </Link>
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

      <div className="w-full bg-white border-b border-gray-100 relative h-[70px] sm:h-[80px] md:h-[90px]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-[#007cc3] focus:font-bold focus:rounded">
              Saltar para o conteúdo principal
            </a>

            <Link href="/" aria-label="Bioprev Angola — Página inicial">
              <div 
                className="flex items-center justify-center h-full cursor-pointer py-2"
                data-testid="text-logo-container"
              >
                <img src={logoImg} alt="Bioprev Angola — Controle de pragas, limpeza e higiene" className="w-[120px] sm:w-[150px] md:w-[180px] max-h-full object-contain" data-testid="img-logo" />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center h-full text-[15px] font-extrabold text-[#333333]" aria-label="Navegação principal">
              {menuItems.map((item) => {
                const menuNode = (
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
                    
                    <div 
                      className={`absolute bottom-0 left-0 w-full h-1 bg-[#f2c92f] transition-transform duration-200 origin-center ${activeMenu === item.id ? 'scale-x-100' : 'scale-x-0'}`} 
                    />
                    
                    <div 
                      className={`fixed top-[126px] left-0 w-full z-40 transition-opacity duration-150 ${activeMenu === item.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
                    </div>
                  </div>
                );

                if (item.id === 'services') {
                  return (
                    <span key="services-and-reports" className="contents">
                      {menuNode}
                      <div className="relative h-full flex items-center px-4" key="reports-direct">
                        <Link href="/reports">
                          <span className="transition-colors tracking-wider hover:text-[#f2c92f]" data-testid="nav-reports">
                            Relatórios
                          </span>
                        </Link>
                      </div>
                    </span>
                  );
                }
                return menuNode;
              })}
            </nav>

            <div className="ml-auto lg:hidden flex items-center">
              <Button variant="ghost" size="icon" className="text-[#333333]" data-testid="button-mobile-menu" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[200] animate-fade-in"
          onClick={() => { setMobileMenuOpen(false); setMobileSubmenu(null); }}
        />
      )}
      <div
        className={`fixed top-0 right-0 w-[85%] max-w-[360px] h-full bg-white z-[201] overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-end px-4 py-2 border-b border-gray-100">
          <button onClick={() => { setMobileMenuOpen(false); setMobileSubmenu(null); }} className="p-1.5 text-[#333333]" data-testid="button-close-mobile-menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="py-2">
          {menuItems.map((item) => {
            const mobileNode = (
              <div key={item.id} className="border-b border-gray-50">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-[15px] font-bold text-[#333333] hover:bg-gray-50"
                  onClick={() => setMobileSubmenu(mobileSubmenu === item.id ? null : item.id)}
                  data-testid={`mobile-${item.testId}`}
                >
                  {item.label}
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === item.id ? 'rotate-90' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden bg-gray-50 transition-all duration-200 ${mobileSubmenu === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
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
                </div>
              </div>
            );

            if (item.id === 'services') {
              return (
                <span key="mobile-services-and-reports" className="contents">
                  {mobileNode}
                  <div key="mobile-reports" className="border-b border-gray-50">
                    <Link
                      href="/reports"
                      onClick={() => { setMobileMenuOpen(false); setMobileSubmenu(null); }}
                      className="w-full flex items-center px-6 py-4 text-[15px] font-bold text-[#333333] hover:bg-gray-50"
                      data-testid="mobile-nav-reports"
                    >
                      Relatórios
                    </Link>
                  </div>
                </span>
              );
            }
            return mobileNode;
          })}
        </div>

        <div className="p-6 space-y-3 border-t border-gray-100">
          <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-[14px] text-[#555555] hover:text-[#007cc3]">
            <MapPin className="w-4 h-4" /> Locais
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-[14px] text-[#555555] hover:text-[#007cc3]">
            <Phone className="w-4 h-4" /> Contato
          </Link>
          <a href="tel:+244928737888" className="flex items-center gap-2 text-[14px] font-bold text-[#007cc3]">
            <Phone className="w-4 h-4" /> +244 928 737 888
          </a>
        </div>
      </div>
    </header>
  );
}
