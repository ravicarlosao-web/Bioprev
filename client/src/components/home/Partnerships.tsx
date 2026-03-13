import { Link } from "wouter";
import LogoCarousel from "./LogoCarousel";

export default function Partnerships() {
  const logos = [
    { name: "Angola Lissar", src: "https://www.angoalissar.com/wp-content/uploads/2016/08/menu_Logo.png" },
    { name: "Feito em Angola", src: "https://feitoemangola.gov.ao/wp-content/uploads/2023/07/basel.png" },
    { name: "Elisal", src: "https://www.elisal.ao/wp-content/uploads/2023/02/logo-elisal.png" },
    { name: "Oceaneering", src: "https://cdn.asp.events/CLIENT_GEP_Even_167A59CF_99D9_1363_5D410151722916AC/sites/gep-corporate-site/media/libraries/gep-partners/Oceaneering.png/fit-in/500x500/filters:no_upscale()" },
    { name: "Toyota Angola", src: "https://ao.empregosyoyota.net/storage/images/jobs/BiGTyg3RchyvpGR08n83fif0fqhCH0-metaMTczNDk2NDY3MzA1NS5qcGc=-.jpg" },
    { name: "Oceaneering", src: "https://images.seeklogo.com/logo-png/31/3/oceaneering-international-logo-png_seeklogo-310930.png" },
    { name: "Yewhing", src: "https://pt.yewhing.com/themes/yewhing/images/logo.png" },
    { name: "GMA Angola", src: "https://static.gmangola.com/images/gma_logo_152x136.png" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center mb-16">
        <h2 className="text-3xl md:text-[32px] font-medium text-[#333333] mb-8 leading-tight">
          Os nossos parceiros e clientes
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          Trabalhamos com empresas e instituições de referência em Angola, elevando os padrões de controle de pragas, reforçando a segurança dos nossos clientes e mantendo as melhores práticas do setor.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-20 max-w-7xl mb-16 sm:mb-24">
        <LogoCarousel logos={logos} />
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-left">
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

        <div className="mt-12 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-8 flex flex-col h-full">
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

          <div className="bg-white border-t-4 border-[#f2c92f] shadow-lg p-8 flex flex-col h-full">
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
