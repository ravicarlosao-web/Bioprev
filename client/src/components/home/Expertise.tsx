import { Globe, Smartphone, Users } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Expertise() {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const [visibleButton, setVisibleButton] = useState(false);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cardRefs.findIndex(ref => ref.current === entry.target);
        if (cardIndex !== -1) {
          setVisibleCards(prev => {
            const newState = [...prev];
            newState[cardIndex] = entry.isIntersecting;
            return newState;
          });
        }
        
        if (buttonRef.current === entry.target) {
          setVisibleButton(entry.isIntersecting);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px"
    });

    cardRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      cardRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

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

      <style>{`
        .expertise-card {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .expertise-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .expertise-card:nth-child(1).visible {
          transition-delay: 0ms;
        }
        
        .expertise-card:nth-child(2).visible {
          transition-delay: 150ms;
        }
        
        .expertise-card:nth-child(3).visible {
          transition-delay: 300ms;
        }
        
        .expertise-button {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .expertise-button.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index}
              ref={cardRefs[index]}
              className={`expertise-card bg-[#f9fafb] border-t-4 border-[#d41a1a] p-10 flex flex-col items-center text-center shadow-sm ${visibleCards[index] ? 'visible' : ''}`}
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
            ref={buttonRef}
            className={`expertise-button bg-[#007cc3] text-white font-bold py-4 px-10 text-xl hover:bg-[#005a8f] transition-colors ${visibleButton ? 'visible' : ''}`}
            data-testid="button-contact-us"
          >
            Ready to simplify your pest management? Contact us today.
          </button>
        </div>
      </div>
    </section>
  );
}
