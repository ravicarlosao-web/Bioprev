import { Link } from "wouter";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoImg from "@/assets/images/logo.png";
import certificateImage from "@assets/EIC - ISO 9001 - Qualidade_Empresa Certificada.jpg";

export default function Footer() {
  return (
    <footer className="bg-white border-t-8 border-[#f2c92f] pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Company Certificate */}
        <div className="rounded-3xl border border-[#e5e7eb] bg-white p-5 mb-10 sm:mb-16 shadow-sm flex items-center justify-center">
          <img src={certificateImage} alt="Certificado EIC ISO 9001 da Bioprev" className="w-full max-w-xs object-contain" loading="lazy" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
          {/* Column 1 */}
          <div className="space-y-3">
            <Link href="/locations"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Locais</span></Link>
            <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Pesquisar</a>
            <Link href="/contact"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Contacto</span></Link>
            <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Entrar</a>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <Link href="/"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Início</span></Link>
            <Link href="/services"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Serviços</span></Link>
            <Link href="/reports"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Relatórios</span></Link>
            <Link href="/national-accounts"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Contas nacionais</span></Link>
            <Link href="/about"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Sobre</span></Link>
            <Link href="/blog"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Blog</span></Link>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <Link href="/about/careers"><span className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium cursor-pointer">Carreiras</span></Link>
            <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Informações da empresa</a>
            <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Declaração legal</a>
            <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Política de privacidade</a>
            <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Política de cookies</a>
            <a href="#" className="block text-[#666666] hover:text-[#007cc3] text-sm font-medium">Código do fornecedor</a>
          </div>

          {/* Column 4 - Logo and Socials */}
          <div className="flex flex-col items-start md:items-end space-y-6">
            <img src={logoImg} alt="Bioprev Logo" className="h-16 object-contain" loading="lazy" />
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/bioprev-pres/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#666666] hover:border-[#007cc3] hover:text-[#007cc3] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/bioprevcontrolodepragas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#666666] hover:border-[#007cc3] hover:text-[#007cc3] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/bioprev_angola/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#666666] hover:border-[#007cc3] hover:text-[#007cc3] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="text-xs text-[#666666] text-left md:text-right leading-relaxed max-w-[280px]">
              © {new Date().getFullYear()} Bioprev e sujeito às condições na <a href="#" className="text-[#007cc3] hover:underline">declaração legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}