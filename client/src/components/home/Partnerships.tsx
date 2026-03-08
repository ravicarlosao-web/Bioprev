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
          Afiliações e parcerias internacionais
        </h2>
        <p className="text-[#333333] max-w-4xl mx-auto leading-relaxed text-[16px]">
          Em parceria com renomados organismos de normalização internacionais, a Rentokil orgulhosamente eleva os padrões de controle de pragas, reforçando a segurança do cliente e mantendo as práticas líderes do setor.
        </p>
      </div>

      <div className="container mx-auto px-20 max-w-7xl mb-24">
        <LogoCarousel logos={logos} />
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-left">
        <p className="text-[#333333] mb-12 text-[16px]">
          Confiável em <span className="text-[#007cc3] font-bold cursor-pointer hover:underline">mais de 90 países</span>, protege residências e empresas contra pragas. Nosso legado é construído em:
        </p>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
              Dando a você paz de espírito
            </h3>
            <p className="text-[#333333] leading-relaxed text-[16px]">
              Com mais de 19.000 técnicos de serviço qualificados em todo o mundo, adaptamos soluções de controle de pragas em vários setores, agindo como sua linha de frente de defesa contra possíveis ameaças de pragas.
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

        {/* New Sections from Images */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Responsible Pest Control Card */}
          <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-8 flex flex-col h-full">
            <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
              Controle de pragas responsável
            </h3>
            <p className="text-[#666666] leading-relaxed text-[16px] mb-8 flex-grow">
              Estamos comprometidos em reduzir o impacto ambiental dos produtos e serviços nos quais você confia para proteger sua empresa contra pragas. Saiba como estamos promovendo melhorias em nossas soluções, operações e locais de trabalho.
            </p>
            <button 
              className="w-fit px-6 py-2 border border-[#007cc3] text-[#007cc3] font-medium hover:bg-[#007cc3] hover:text-white transition-colors duration-300"
              data-testid="button-find-out-more"
            >
              Saiba mais
            </button>
          </div>

          {/* Local Experts Card */}
          <div className="bg-white border-t-4 border-[#e31837] shadow-lg p-8 flex flex-col h-full">
            <h3 className="text-2xl md:text-[28px] font-medium text-[#333333] mb-6">
              Seus especialistas locais em controle de pragas
            </h3>
            <p className="text-[#666666] leading-relaxed text-[16px] mb-8 flex-grow">
              Operando em mais de 90 países em todo o mundo, a Rentokil pode ajudar a atender às suas necessidades comerciais e residenciais de controle de pragas. Saiba mais sobre os serviços, soluções e preços no seu país.
            </p>
            <button 
              className="w-fit px-6 py-2 border border-[#007cc3] text-[#007cc3] font-medium hover:bg-[#007cc3] hover:text-white transition-colors duration-300"
              data-testid="button-choose-country"
            >
              Escolha seu país
            </button>
          </div>
        </div>

        {/* CCPA Notice Section */}
        <div className="mt-24 text-center border-t border-gray-100 pt-16 pb-8">
          <h2 className="text-2xl md:text-[32px] font-medium text-[#333333] mb-8">
            Aviso CCPA para clientes nos EUA
          </h2>
          <p className="text-[#666666] max-w-3xl mx-auto leading-relaxed text-[16px] mb-8">
            A sua privacidade é importante para nós. Em raras circunstâncias, podemos compartilhar as suas informações com parceiros de confiança para melhorar o seu serviço, o que pode ser considerado uma "venda" conforme definido no CCPA. Pode desativar aqui:
          </p>
          <button 
            className="text-[#007cc3] font-medium hover:underline text-[16px]"
            data-testid="button-ccpa-opt-out"
          >
            Não venda minhas informações
          </button>
        </div>
      </div>
    </section>
  );
}
