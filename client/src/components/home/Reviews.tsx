import { Star, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Kabir Hossain",
    time: "7 horas atrás",
    initial: "K",
    color: "bg-[#0077c0]",
    text: "Bons técnicos leais com o seu trabalho Estou extremamente satisfeito com os serviços de controle de pragas fornecidos pelo SR. Aqeel...",
  },
  {
    id: 2,
    author: "Wanjiko Stancy",
    time: "13 horas atrás",
    initial: "W",
    color: "bg-[#e91e63]",
    text: "Cinco estrelas para Bioprev Boecker! Tivemos um problema repentino de pragas e Patrick chegou bem a tempo. Ele foi eficiente,...",
  },
  {
    id: 3,
    author: "Warren Vincent",
    time: "Um dia atrás",
    initial: "W",
    color: "bg-[#5d4037]",
    text: "Hoje o Sr. Taofiq visitou para realizar nosso serviço regular de controle de pragas. Serviço rápido e eficiente e muito cortês, pois...",
  },
];

export default function Reviews() {
  return (
    <section className="w-full bg-[#f2f4f6] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-[20px] font-bold text-[#333333]">
            Avaliação de 4.9 <span className="font-normal text-gray-600">de 29767 avaliações</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full relative"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-[#333333] leading-tight">{review.author}</h4>
                      <p className="text-[12px] text-gray-400">{review.time}</p>
                    </div>
                  </div>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" 
                    alt="Google" 
                    className="w-5 h-5"
                  />
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#ffb400] fill-[#ffb400]" />
                  ))}
                </div>

                <p className="text-[14px] text-[#333333] leading-relaxed flex-grow">
                  {review.text} <span className="font-bold cursor-pointer">Ver mais</span>
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrow */}
          <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-100 hidden md:flex items-center justify-center z-10">
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
