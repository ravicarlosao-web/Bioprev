import LogoCarousel from "./LogoCarousel";

export default function Partnerships() {
  const logos = [
    { name: "Angola Lissar", src: "https://www.angoalissar.com/wp-content/uploads/2016/08/menu_Logo.png" },
    { name: "Feito em Angola", src: "https://feitoemangola.gov.ao/wp-content/uploads/2023/07/basel.png" },
    { name: "Elisal", src: "https://www.elisal.ao/wp-content/uploads/2023/02/logo-elisal.png" },
    { name: "Oceaneering", src: "https://cdn.asp.events/CLIENT_GEP_Even_167A59CF_99D9_1363_5D410151722916AC/sites/gep-corporate-site/media/libraries/gep-partners/Oceaneering.png/fit-in/500x500/filters:no_upscale()" },
    { name: "Toyota Angola", src: "https://ao.empregosyoyota.net/storage/images/jobs/BiGTyg3RchyvpGR08n83fif0fqhCH0-metaMTczNDk2NDY3MzA1NS5qcGc=-.jpg" },
    { name: "Oceaneering International", src: "https://images.seeklogo.com/logo-png/31/3/oceaneering-international-logo-png_seeklogo-310930.png" },
    { name: "Yewhing", src: "https://pt.yewhing.com/themes/yewhing/images/logo.png" },
    { name: "GMA Angola", src: "https://static.gmangola.com/images/gma_logo_152x136.png" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center mb-16">
        <h2 className="text-3xl md:text-[32px] font-medium text-[#333333] mb-8 leading-tight">
          International affiliations and partnerships
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          In partnership with renowned international standard bodies, Rentokil proudly elevates the standards of pest control, reinforcing customer safety and upholding industry-leading practices.
        </p>
      </div>

      <div className="container mx-auto px-20 max-w-7xl mb-24">
        <LogoCarousel logos={logos} />
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-left">
        <p className="text-[#333333] mb-12 text-[16px]">
          Trusted in <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">over 90 countries</span>, protects homes and businesses from pests. Our legacy is built on:
        </p>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
              Giving you peace of mind
            </h3>
            <p className="text-[#333333] leading-relaxed text-[16px]">
              With over 19,000 qualified service technicians worldwide, we tailor pest control solutions across numerous sectors, acting as your frontline defence against potential pest threats.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
              Safeguarding your reputation
            </h3>
            <p className="text-[#333333] leading-relaxed text-[16px]">
              We adopt a forward-thinking strategy, blending preventive measures with swift responses. We ensure your home or business remains pest-free thanks to state-of-the-art technologies and a comprehensive pest control approach.
            </p>
          </div>
        </div>

        {/* New Sections from Images */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Responsible Pest Control Card */}
          <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-8 flex flex-col h-full">
            <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
              Responsible pest control
            </h3>
            <p className="text-[#666666] leading-relaxed text-[16px] mb-8 flex-grow">
              We're committed to reducing the environmental impact of the products and services you rely on to protect your business from pests. Learn how we're driving improvements across our solutions, operations, and workplaces.
            </p>
            <button 
              className="w-fit px-6 py-2 border border-[#007cc3] text-[#007cc3] font-medium hover:bg-[#007cc3] hover:text-white transition-colors duration-300"
              data-testid="button-find-out-more"
            >
              Find out more
            </button>
          </div>

          {/* Local Experts Card */}
          <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-8 flex flex-col h-full">
            <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
              Your local pest control experts
            </h3>
            <p className="text-[#666666] leading-relaxed text-[16px] mb-8 flex-grow">
              Operating in over 90 countries worldwide, Rentokil can help fulfil your commercial and residential pest control requirements. Find out more about the services, solutions and pricing in your country.
            </p>
            <button 
              className="w-fit px-6 py-2 border border-[#007cc3] text-[#007cc3] font-medium hover:bg-[#007cc3] hover:text-white transition-colors duration-300"
              data-testid="button-choose-country"
            >
              Choose your country
            </button>
          </div>
        </div>

        {/* CCPA Notice Section */}
        <div className="mt-24 text-center border-t border-gray-100 pt-16 pb-8">
          <h2 className="text-2xl md:text-[32px] font-medium text-[#333333] mb-8">
            CCPA notice for US customers
          </h2>
          <p className="text-[#666666] max-w-3xl mx-auto leading-relaxed text-[16px] mb-8">
            Your privacy is important to us. In rare circumstances, we may share your information with trusted partners to improve your service which may be deemed as a "sale" as defined in the CCPA. You can opt out here:
          </p>
          <button 
            className="text-[#007cc3] font-medium hover:underline text-[16px]"
            data-testid="button-ccpa-opt-out"
          >
            Do not sell my information
          </button>
        </div>
      </div>
    </section>
  );
}
