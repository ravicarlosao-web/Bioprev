import { Globe, Smartphone, Users } from "lucide-react";

export default function Expertise() {
  const cards = [
    {
      title: "Global yet local",
      description: "We are everywhere, serving more locations than any other pest control provider, blending our 100-year legacy with local expertise in 1,800 teams worldwide.",
      icon: <Globe className="w-12 h-12 text-[#333333] stroke-[1px]" />,
    },
    {
      title: "Leading the digital pest control era",
      description: "Our pioneering PestConnect range offers constant protection. With innovation in our DNA, we anticipate, resolve, and report pest risks seamlessly.",
      icon: <Smartphone className="w-12 h-12 text-[#333333] stroke-[1px]" />,
    },
    {
      title: "One team, one contact",
      description: "Our Global Accounts Management Team provides tailored services and a dedicated single point of contact, ensuring an effortless, consistent pest management experience across your estate.",
      icon: <Users className="w-12 h-12 text-[#333333] stroke-[1px]" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center mb-16">
        <h2 className="text-3xl md:text-[32px] font-medium text-[#333333] mb-8 leading-tight">
          Empowering multinationals with global pest control expertise
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          At Rentokil, we bring a world of excellence in pest control, safeguarding businesses across 90 countries with our unmatched expertise and innovative solutions. Here is why you'll thrive partnering with our <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Global Accounts Management Team.</span>
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#f9fafb] border-t-4 border-[#d41a1a] p-10 flex flex-col items-center text-center shadow-sm"
              data-testid={`card-expertise-${index}`}
            >
              <div className="mb-8">
                {card.icon}
              </div>
              <h3 className="text-2xl font-medium text-[#333333] mb-6 leading-tight min-h-[64px] flex items-center">
                {card.title}
              </h3>
              <p className="text-[#333333] leading-relaxed text-[15px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            className="bg-[#007cc3] text-white font-bold py-4 px-10 text-xl hover:bg-[#005a8f] transition-colors"
            data-testid="button-contact-us"
          >
            Ready to simplify your pest management? Contact us today.
          </button>
        </div>
      </div>
    </section>
  );
}
