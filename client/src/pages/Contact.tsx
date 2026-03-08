import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/layout/Header";

export default function Contact() {
  const [formData, setFormData] = useState({
    enquiryType: "new-commercial",
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    companyName: "",
    country: "",
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
    console.log("Form submitted:", formData);
    // Mock submission - in a real app, this would send to a backend
    alert("Obrigado pelo seu contacto! Entraremos em contacto brevemente.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/">
            <a className="hover:text-[#e31818] transition-colors">Início</a>
          </Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Contato</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl font-bold text-[#e31818] mb-12 text-center">Contato</h1>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Como podemos ajudar?</h2>
            <p className="text-gray-700 mb-4">
              Precisa de ajuda com pragas? Diga-nos o que está a acontecer e iremos conectá-lo ao especialista certo.
            </p>
            <p className="text-gray-600 text-sm">
              Leia a nossa <a href="#" className="text-[#0077c0] hover:underline">política de privacidade</a> para entender como usamos seus dados.
            </p>
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
                    className="w-4 h-4 text-[#e31818] cursor-pointer"
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
                    className="w-4 h-4 text-[#e31818] cursor-pointer"
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
                    className="w-4 h-4 text-[#e31818] cursor-pointer"
                    data-testid="radio-new-residential"
                  />
                  <span className="ml-3 text-gray-700">Sou um novo cliente residencial</span>
                </label>
              </div>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Primeiro nome <span className="text-[#e31818]">*</span>
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
                Sobrenome <span className="text-[#e31818]">*</span>
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
                E-mail <span className="text-[#e31818]">*</span>
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
                Telefone <span className="text-[#e31818]">*</span>
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
                Nome da empresa <span className="text-[#e31818]">*</span>
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

            {/* Country / Region */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Escolha o seu país / região <span className="text-[#e31818]">*</span>
              </label>
              <select 
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900 bg-white cursor-pointer"
                data-testid="select-country"
              >
                <option value="">Selecione um país...</option>
                <option value="angola">Angola</option>
                <option value="portugal">Portugal</option>
                <option value="brazil">Brasil</option>
                <option value="spain">Espanha</option>
                <option value="uk">Reino Unido</option>
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
                  className="w-4 h-4 text-[#e31818] mt-1 cursor-pointer"
                  data-testid="checkbox-updates"
                />
                <span className="ml-3 text-gray-700 text-sm">
                  Gostaria de receber atualizações relacionadas aos produtos e serviços da Rentokil.
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
    </div>
  );
}
