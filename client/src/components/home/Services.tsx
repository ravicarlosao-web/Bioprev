import services1Img from "../../assets/images/services-1.jpg";
import services2Img from "../../assets/images/services-2.png";

export default function Services() {
  return (
    <section id="services-section" className="w-full bg-[#f2f2f2] pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Service 1 */}
        <div className="relative group overflow-hidden h-[500px]">
          <img 
            src={services1Img}
            alt="Pest control services" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Card Overlap - Image 1 Style */}
          <div className="absolute top-1/2 left-1/2 md:left-[15%] transform -translate-y-1/2 bg-white border-t-4 border-[#e31818] p-8 md:p-10 z-10 w-[90%] md:w-[380px] shadow-xl">
            <h3 className="text-[24px] font-normal text-[#333333] mb-6" data-testid="text-service-title-1">Pest control services</h3>
            <p className="text-[#333333] mb-8 text-[14px] leading-relaxed" data-testid="text-service-desc-1">
              Rentokil supports more than half a million customers in over 90 countries and is trusted as the pest control partner of choice for small businesses and multinationals worldwide.
            </p>
            <button 
              className="border border-[#0077c0] text-[#0077c0] hover:bg-[#0077c0] hover:text-white transition-colors duration-300 font-normal px-6 py-2 text-[14px]"
              data-testid="button-service-1"
            >
              Find out more
            </button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative group overflow-hidden h-[500px]">
          <img 
            src={services2Img}
            alt="Digital pest control" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Card Overlap - Image 1 Style */}
          <div className="absolute top-1/2 left-1/2 md:left-[15%] transform -translate-y-1/2 bg-white border-t-4 border-[#e31818] p-8 md:p-10 z-10 w-[90%] md:w-[380px] shadow-xl">
            <h3 className="text-[24px] font-normal text-[#333333] mb-6" data-testid="text-service-title-2">Digital pest control</h3>
            <p className="text-[#333333] mb-8 text-[14px] leading-relaxed" data-testid="text-service-desc-2">
              A range of digitally enhanced, connected pest management solutions provide commercial customers with unrivalled data, insights and reporting to proactively prevent and manage pests.
            </p>
            <button 
              className="border border-[#0077c0] text-[#0077c0] hover:bg-[#0077c0] hover:text-white transition-colors duration-300 font-normal px-6 py-2 text-[14px]"
              data-testid="button-service-2"
            >
              Find out more
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
