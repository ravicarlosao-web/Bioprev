import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import LogoCarousel from "./LogoCarousel";
import lactiangolLogo from "../../assets/images/partner-lactiangol.png";
import deshanLogo from "../../assets/images/partner-deshan.png";
import grandLakesLogo from "../../assets/images/partner-grandlakes.png";
import jornalAngolaLogo from "../../assets/images/partner-jornal-angola.png";
import carrinhoLogo from "../../assets/images/partner-carrinho.png";
import omatapaloLogo from "../../assets/images/partner-omatapalo.png";
import agosto1Logo from "../../assets/images/partner-1agosto.png";
import rafinoleLogo from "../../assets/images/partner-rafinole.png";
import zafiraLogo from "../../assets/images/partner-zafira.png";
import wilogLogo from "../../assets/images/partner-wilog.png";
import brisasLogo from "../../assets/images/partner-brisas.png";
import progasLogo from "../../assets/images/partner-progas.png";
import coolmixLogo from "../../assets/images/partner-coolmix.png";
import joiafefLogo from "../../assets/images/partner-joiafef.png";
import wintradeLogo from "../../assets/images/partner-wintrade.png";
import multiterminaisLogo from "../../assets/images/partner-multiterminais.png";
import sodosaLogo from "../../assets/images/partner-sodosa.png";
import mangoleLogo from "../../assets/images/partner-mangole.png";
import betnaLogo from "../../assets/images/partner-betna.png";
import isiaLogo from "../../assets/images/partner-isia.png";
import espacosLogo from "../../assets/images/partner-espacos.png";
import praiaMorenaLogo from "../../assets/images/partner-praiamorena.png";
import bekoLogo from "../../assets/images/partner-beko.png";
import suaveLogo from "../../assets/images/partner-suave.png";
import carlizLogo from "../../assets/images/partner-carliz.png";
import hashtagLogo from "../../assets/images/partner-hashtag.png";
import damazeLogo from "../../assets/images/partner-damaze.png";
import mundoCasaLogo from "../../assets/images/partner-mundocasa.png";
import ladyStoneLogo from "../../assets/images/partner-ladystone.png";
import dulceriaLogo from "../../assets/images/partner-dulceria.png";
import automaniaLogo from "../../assets/images/partner-automania.png";

export default function Partnerships() {
  const headerReveal = useScrollReveal(0.2);
  const carouselReveal = useScrollReveal(0.1);
  const textReveal = useScrollReveal(0.15);
  const cardsReveal = useScrollReveal(0.15);

  const logos = [
    { name: "Lactiangol", src: lactiangolLogo },
    { name: "De Shan Agriculture", src: deshanLogo },
    { name: "Grand Lakes", src: grandLakesLogo },
    { name: "Jornal de Angola", src: jornalAngolaLogo },
    { name: "Carrinho", src: carrinhoLogo },
    { name: "Omatapalo", src: omatapaloLogo },
    { name: "Clube Desportivo 1º de Agosto", src: agosto1Logo },
    { name: "Rafinole", src: rafinoleLogo },
    { name: "Zafira", src: zafiraLogo },
    { name: "WiLog International", src: wilogLogo },
    { name: "Brisas Condomínio Horizontal", src: brisasLogo },
    { name: "Progás", src: progasLogo },
    { name: "Coolmix", src: coolmixLogo },
    { name: "Joia Fef", src: joiafefLogo },
    { name: "Wintrade", src: wintradeLogo },
    { name: "Multiterminais", src: multiterminaisLogo },
    { name: "Sodosa Holdings", src: sodosaLogo },
    { name: "Mangolê", src: mangoleLogo },
    { name: "Betna Alimentos", src: betnaLogo },
    { name: "ISIA", src: isiaLogo },
    { name: "Espaços", src: espacosLogo },
    { name: "Praia Morena Hotel", src: praiaMorenaLogo },
    { name: "Beko", src: bekoLogo },
    { name: "Suave", src: suaveLogo },
    { name: "Carliz Rolamentos", src: carlizLogo },
    { name: "Hashtag Restaurante", src: hashtagLogo },
    { name: "Damaze", src: damazeLogo },
    { name: "Mundo da Casa", src: mundoCasaLogo },
    { name: "Lady Stone", src: ladyStoneLogo },
    { name: "Dulceria Nacional", src: dulceriaLogo },
    { name: "Automania", src: automaniaLogo },
  ];

  return (
    <section className="py-20 bg-white">
      <div
        ref={headerReveal.ref}
        className={`container mx-auto px-4 max-w-6xl text-center mb-16 sr-hidden ${headerReveal.isVisible ? 'sr-visible' : ''}`}
      >
        <h2 className="text-3xl md:text-[32px] font-medium text-[#333333] mb-8 leading-tight">
          Os nossos parceiros e clientes
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          Trabalhamos com empresas e instituições de referência em Angola, elevando os padrões de controle de pragas, reforçando a segurança dos nossos clientes e mantendo as melhores práticas do setor.
        </p>
      </div>

      <div
        ref={carouselReveal.ref}
        className={`container mx-auto px-4 sm:px-8 md:px-20 max-w-7xl mb-16 sm:mb-24 sr-scale ${carouselReveal.isVisible ? 'sr-visible' : ''}`}
      >
        <LogoCarousel logos={logos} />
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-left">
        <div
          ref={textReveal.ref}
          className={`sr-hidden ${textReveal.isVisible ? 'sr-visible' : ''}`}
        >
          <p className="text-[#333333] mb-12 text-[16px]">
            Com presença em <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">Luanda, Benguela e Huambo</span>, a Bioprev protege residências e empresas contra pragas em todo o território angolano. O nosso compromisso é construído em:
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
                Dando a você paz de espírito
              </h3>
              <p className="text-[#333333] leading-relaxed text-[16px]">
                Com uma equipa de técnicos qualificados e certificados em todo o país, adaptamos soluções de controle de pragas a vários setores, agindo como a sua linha de frente de defesa contra possíveis ameaças de pragas nas suas instalações.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
                Salvaguardando a sua reputação
              </h3>
              <p className="text-[#333333] leading-relaxed text-[16px]">
                Adotamos uma estratégia com visão de futuro, combinando medidas preventivas com respostas rápidas. Garantimos que a sua casa ou empresa permaneça livre de pragas graças a tecnologias de ponta e a uma abordagem abrangente de controle de pragas.
              </p>
            </div>
          </div>
        </div>

        <div ref={cardsReveal.ref} className="mt-12 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className={`bg-white border-t-4 border-[#f2c92f] shadow-lg p-8 flex flex-col h-full hover-lift sr-left stagger-1 ${cardsReveal.isVisible ? 'sr-visible' : ''}`}>
            <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
              Controle de pragas responsável
            </h3>
            <p className="text-[#666666] leading-relaxed text-[16px] mb-8 flex-grow">
              Estamos comprometidos em reduzir o impacto ambiental dos produtos e serviços nos quais você confia para proteger a sua empresa contra pragas. Utilizamos produtos certificados e sem prejuízo para a saúde do homem e para o meio ambiente.
            </p>
            <Link 
              href="/about"
              className="w-fit px-6 py-2 border border-[#007cc3] text-[#007cc3] font-medium hover:bg-[#007cc3] hover:text-white transition-colors duration-300 inline-block"
              data-testid="button-find-out-more"
            >
              Saiba mais
            </Link>
          </div>

          <div className={`bg-white border-t-4 border-[#f2c92f] shadow-lg p-8 flex flex-col h-full hover-lift sr-right stagger-2 ${cardsReveal.isVisible ? 'sr-visible' : ''}`}>
            <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
              Especialistas locais em controle de pragas
            </h3>
            <p className="text-[#666666] leading-relaxed text-[16px] mb-8 flex-grow">
              Com filiais em Luanda, Benguela e Huambo, a Bioprev está perto de si para atender às suas necessidades comerciais e residenciais de controle de pragas. Conheça os nossos serviços, soluções e preços.
            </p>
            <Link 
              href="/locations"
              className="w-fit px-6 py-2 border border-[#007cc3] text-[#007cc3] font-medium hover:bg-[#007cc3] hover:text-white transition-colors duration-300 inline-block"
              data-testid="button-choose-location"
            >
              Ver localizações
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
