export default function Partnerships() {
  const logos = [
    { name: "BRCGS", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/BRCGS_Logo.svg/2560px-BRCGS_Logo.svg.png" }, // Placeholder for BRCGS
    { name: "CEPA", src: "https://www.cepa-europe.org/wp-content/uploads/2020/06/cepa-certified-logo.png" }, // Placeholder for CEPA
    { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" }, // Placeholder for Google
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

      <div className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center p-8 bg-white shadow-sm border border-gray-50 h-40 items-center">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
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
      </div>
    </section>
  );
}
