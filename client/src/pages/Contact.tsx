import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone } from "lucide-react";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

export default function Contact() {
  const [formData, setFormData] = useState({
    enquiryType: "new-commercial",
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    companyName: "",
    service: "",
    enquiry: "",
    receiveUpdates: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const typeLabel = formData.enquiryType === 'new-commercial' 
      ? 'Novo cliente comercial' 
      : formData.enquiryType === 'existing-customer' 
        ? 'Cliente existente' 
        : 'Novo cliente residencial';

    const message = `*Nova Consulta de Contacto (Site)*\n\n` +
      `*Tipo:* ${typeLabel}\n` +
      `*Nome:* ${formData.firstName} ${formData.lastName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.telephone}\n` +
      `${formData.companyName ? `*Empresa:* ${formData.companyName}\n` : ''}` +
      `*Serviço Pretendido:* ${formData.service}\n` +
      `*Consulta:*\n${formData.enquiry}`;

    const whatsappUrl = `https://wa.me/244928737888?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Contacto"
        description="Entre em contacto com a Bioprev Angola. Solicite orçamento gratuito para controle de pragas, desinfestação, limpeza e outros serviços. WhatsApp: +244 928 737 888."
        canonical="/contact"
        keywords="contacto Bioprev Angola, orçamento controle pragas, contacto desinfestação Luanda, telefone Bioprev Angola"
        structuredData={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Contacto", url: "/contact" },
        ])}
      />
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#f2c92f] transition-colors">
            Início
          </Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Contacto</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f2c92f] mb-8 sm:mb-12 text-center">Contacto</h1>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[28px] font-medium text-[#111111] mb-4">Como podemos ajudar?</h2>
            <p className="text-[#555555] mb-6 text-[16px] leading-relaxed">
              Precisa de ajuda com pragas? Diga-nos o que está a acontecer e iremos conectá-lo ao especialista certo.
            </p>
            <p className="text-[#555555] text-[14px] mb-10">
              Leia a nossa <a href="#" className="text-[#007cc3] hover:underline">política de privacidade</a> para entender como usamos seus dados.
            </p>

            <div className="mb-12">
              <h3 className="text-[16px] font-medium text-[#111111] mb-2">Contactos Diretos</h3>
              <p className="text-[#555555] mb-4 text-[16px] leading-relaxed">
                Pode entrar em contacto connosco através dos seguintes meios:
              </p>
              <div className="flex flex-col gap-2 text-[16px] text-[#007cc3] font-medium">
                <a href="mailto:geral@bioprev.com" className="hover:underline">
                  geral@bioprev.com
                </a>
                <a href="tel:+244928737888" className="hover:underline">
                  +244 928 737 888
                </a>
                <a href="tel:+244947059109" className="hover:underline">
                  +244 947 059 109
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Type of Enquiry */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-4">Tipo de consulta</label>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="enquiryType" 
                    value="new-commercial"
                    checked={formData.enquiryType === "new-commercial"}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#f2c92f] cursor-pointer"
                    data-testid="radio-new-commercial"
                  />
                  <span className="ml-3 text-gray-700">Sou um novo cliente comercial</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="enquiryType" 
                    value="existing-customer"
                    checked={formData.enquiryType === "existing-customer"}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#f2c92f] cursor-pointer"
                    data-testid="radio-existing-customer"
                  />
                  <span className="ml-3 text-gray-700">Sou um cliente existente</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="enquiryType" 
                    value="new-residential"
                    checked={formData.enquiryType === "new-residential"}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#f2c92f] cursor-pointer"
                    data-testid="radio-new-residential"
                  />
                  <span className="ml-3 text-gray-700">Sou um novo cliente residencial</span>
                </label>
              </div>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Primeiro nome <span className="text-[#f2c92f]">*</span>
              </label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="ex. João"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-firstname"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Sobrenome <span className="text-[#f2c92f]">*</span>
              </label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="ex. Silva"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-lastname"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                E-mail <span className="text-[#f2c92f]">*</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ex. joao.silva@exemplo.com"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-email"
              />
            </div>

            {/* Telephone */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Telefone <span className="text-[#f2c92f]">*</span>
              </label>
              <input 
                type="tel" 
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="ex. 912 345 678"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-telephone"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Nome da empresa <span className="text-[#f2c92f]">*</span>
              </label>
              <input 
                type="text" 
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="ex. Exemplo Corp"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-companyname"
              />
            </div>

            {/* Service / Region */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Serviço Pretendido <span className="text-[#f2c92f]">*</span>
              </label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900 bg-white cursor-pointer"
                data-testid="select-service"
              >
                <option value="">Selecione um serviço...</option>
                <option value="desinfestacao">Serviços de desinfestação</option>
                <option value="pragas">Gorgulhos e traças</option>
                <option value="limpeza">Serviços de Limpeza</option>
                <option value="residuos">Recolha de Resíduos</option>
                <option value="agua">Fornecimento de Água potável</option>
                <option value="jardinagem">Serviço de Jardinagem</option>
                <option value="outro">Outro serviço</option>
              </select>
            </div>

            {/* Enquiry */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Consulta</label>
              <textarea 
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                placeholder="ex. Preciso de ajuda com..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900 resize-none"
                data-testid="textarea-enquiry"
              />
            </div>

            {/* Newsletter Checkbox */}
            <div>
              <label className="flex items-start cursor-pointer">
                <input 
                  type="checkbox" 
                  name="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#f2c92f] mt-1 cursor-pointer"
                  data-testid="checkbox-updates"
                />
                <span className="ml-3 text-gray-700 text-sm">
                  Gostaria de receber atualizações relacionadas aos produtos e serviços da Bioprev.
                </span>
              </label>
              <p className="text-xs text-gray-600 mt-3">
                Você pode cancelar a assinatura das comunicações a qualquer momento. Veja nossa <a href="#" className="text-[#0077c0] hover:underline">política de privacidade</a> para ver nosso compromisso de proteger e respeitar sua privacidade e como gerenciar suas preferências.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button 
                type="submit"
                className="bg-[#0077c0] hover:bg-[#005fa3] text-white font-bold py-3 px-12 transition-colors"
                data-testid="button-submit-contact"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
