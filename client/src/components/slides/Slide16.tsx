import { motion } from "motion/react";
import { Search, Filter, MapPin, Sparkles } from "lucide-react";
import SlideFooter from "../SlideFooter";

const features = [
  {
    id: "filtros",
    number: "2.2",
    title: "Filtros Avançados",
    description: "Explore opções de filtragem detalhadas por marca, modelo, ano, faixa de preço, quilometragem, tipo de combustível, transmissão e cor. Personalize sua busca para encontrar exatamente o que você procura, otimizando o tempo do cliente e do vendedor.",
    icon: Filter,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "busca-ia",
    number: "2.3",
    title: "Busca Inteligente com IA",
    description: "Utilize um motor de busca aprimorado com inteligência artificial que entende sinônimos e sugere resultados relevantes. Basta digitar o que deseja e a plataforma apresentará as melhores opções, acelerando a jornada de compra.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "localidade",
    number: "2.4",
    title: "Filtro por Localidade",
    description: "Localize veículos disponíveis em sua região ou em cidades específicas. Defina o raio de busca para encontrar o carro dos seus sonhos na revenda mais próxima, facilitando a visita e a negociação presencial.",
    icon: MapPin,
    color: "from-green-500 to-emerald-500",
  },
];

export default function Slide16() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          
          <h2 className="text-5xl font-bold text-white mb-4">
            Catálogo de Veículos:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              Encontre o Carro Perfeito
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-5xl mx-auto leading-relaxed">
            O Catálogo de Veículos da Autoline oferece uma experiência de busca intuitiva e poderosa, permitindo que os consumidores encontrem o veículo ideal com facilidade e precisão, através de recursos avançados de filtragem e inteligência artificial.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl blur-2xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? "#3b82f6"
                      : index === 1
                      ? "#a855f7"
                      : "#22c55e"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 hover:bg-white/10 transition-all">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-1 shadow-2xl`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[11px] flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Number */}
                

                {/* Title */}
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}