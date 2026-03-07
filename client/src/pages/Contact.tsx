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
            <a className="hover:text-[#e31818] transition-colors">Home</a>
          </Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Contact</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl font-bold text-[#e31818] mb-12 text-center">Contact</h1>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How can we help?</h2>
            <p className="text-gray-700 mb-4">
              Need help with pests? Tell us what's going on and we'll connect you with the right expert.
            </p>
            <p className="text-gray-600 text-sm">
              Please read our <a href="#" className="text-[#0077c0] hover:underline">privacy policy</a> to understand how we use your data.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Type of Enquiry */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-4">Type of enquiry</label>
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
                  <span className="ml-3 text-gray-700">I am a new commercial customer</span>
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
                  <span className="ml-3 text-gray-700">I am an existing customer</span>
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
                  <span className="ml-3 text-gray-700">I am a new residential customer</span>
                </label>
              </div>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                First name <span className="text-[#e31818]">*</span>
              </label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="eg. John"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-firstname"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Last name <span className="text-[#e31818]">*</span>
              </label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="eg. Doe"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-lastname"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Email <span className="text-[#e31818]">*</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="eg. john.doe@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-email"
              />
            </div>

            {/* Telephone */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Telephone <span className="text-[#e31818]">*</span>
              </label>
              <input 
                type="tel" 
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="eg. 01234 567890"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-telephone"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Company name <span className="text-[#e31818]">*</span>
              </label>
              <input 
                type="text" 
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="eg. Example Corp"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900"
                data-testid="input-companyname"
              />
            </div>

            {/* Country / Region */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Choose your country / region <span className="text-[#e31818]">*</span>
              </label>
              <select 
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0077c0] text-gray-900 bg-white cursor-pointer"
                data-testid="select-country"
              >
                <option value="">Select a country...</option>
                <option value="portugal">Portugal</option>
                <option value="spain">Spain</option>
                <option value="uk">United Kingdom</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="italy">Italy</option>
              </select>
            </div>

            {/* Enquiry */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Enquiry</label>
              <textarea 
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                placeholder="eg. I need help with..."
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
                  I would like to receive updates relating to Rentokil's products and services.
                </span>
              </label>
              <p className="text-xs text-gray-600 mt-3">
                You can unsubscribe from communications at any time. View our <a href="#" className="text-[#0077c0] hover:underline">privacy policy</a> to see our commitment to protect and respect your privacy and how to manage your preferences.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button 
                type="submit"
                className="bg-[#0077c0] hover:bg-[#005fa3] text-white font-bold py-3 px-12 transition-colors"
                data-testid="button-submit-contact"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
