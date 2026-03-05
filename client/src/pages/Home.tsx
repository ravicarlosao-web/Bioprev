import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Reviews from "@/components/home/Reviews";
import Expertise from "@/components/home/Expertise";
import Sectors from "@/components/home/Sectors";
import Partnerships from "@/components/home/Partnerships";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Reviews />
        <Expertise />
        <Sectors />
        <Partnerships />
      </main>
      
      {/* Professional Footer based on image */}
      <footer className="bg-white border-t-8 border-[#e31837] pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Partnership Logos in Footer */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-16 opacity-80">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/BRCGS_Logo.svg/2560px-BRCGS_Logo.svg.png" alt="BRCGS" className="h-12 object-contain" />
            <img src="https://www.cepa-europe.org/wp-content/uploads/2020/06/cepa-certified-logo.png" alt="CEPA" className="h-12 object-contain" />
            <img src="https://www.rentokil.com/assets/images/logos/dj-sustainability-indices.png" alt="Dow Jones Sustainability" className="h-12 object-contain" />
            <img src="https://www.rentokil.com/assets/images/logos/ftse-index.png" alt="FTSE" className="h-10 object-contain" />
            <img src="https://www.rentokil.com/assets/images/logos/bsi-logo.png" alt="BSI" className="h-12 object-contain" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Column 1 */}
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Locations</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Search</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Contact</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Login</a>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Home</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Services</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Global accounts</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Business sectors</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">About</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Blog</a>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Careers</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Company information</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Legal statement</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Privacy policy</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Cookie policy</a>
              <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Supplier code</a>
            </div>

            {/* Column 4 - Logo and Socials */}
            <div className="flex flex-col items-start md:items-end space-y-6">
              <span className="text-[#e31837] text-4xl font-bold tracking-tight">Rentokil</span>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#666666] hover:border-[#007cc3] hover:text-[#007cc3] transition-colors">
                  <span className="text-xs font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#666666] hover:border-[#007cc3] hover:text-[#007cc3] transition-colors">
                  <span className="text-xs font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#666666] hover:border-[#007cc3] hover:text-[#007cc3] transition-colors">
                  <span className="text-xs font-bold">X</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#666666] hover:border-[#007cc3] hover:text-[#007cc3] transition-colors">
                  <div className="w-3 h-3 bg-current rounded-full" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#666666] hover:border-[#007cc3] hover:text-[#007cc3] transition-colors">
                  <div className="w-3 h-3 border-2 border-current rounded-sm" />
                </a>
              </div>

              <div className="text-xs text-[#666666] text-left md:text-right leading-relaxed max-w-[280px]">
                © {new Date().getFullYear()} Rentokil Initial plc and subject to the conditions in the <a href="#" className="text-[#007cc3] hover:underline">legal statement</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
