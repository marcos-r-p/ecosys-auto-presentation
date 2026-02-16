import { motion } from "motion/react";
import { Smartphone, ShoppingBag, Bell, MapPin, TrendingUp } from "lucide-react";
import SlideFooter from "../SlideFooter";

const features = [
  {
    id: "jornada",
    number: "2.4.1",
    title: "Jornada de Compra Completa",
    description: "Todas as funcionalidades do site, perfeitamente otimizadas para a tela do celular, garantindo uma navegação fluida e intuitiva.",
    icon: ShoppingBag,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "notificacoes",
    number: "2.4.2",
    title: "Notificações In-App",
    description: "Receba alertas personalizados sobre veículos favoritados, quedas de preço, novas ofertas exclusivas e promoções de lojistas próximos.",
    icon: Bell,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "geolocalizacao",
    number: "2.4.3",
    title: "Busca por Geolocalização",
    description: "Descubra as melhores ofertas de veículos nas lojas mais próximas, facilitando a visita e a decisão de compra do consumidor.",
    icon: MapPin,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "qualificacao",
    number: "2.4.4",
    title: "Qualificação do Lead",
    description: "Inicie o processo de compra e financiamento Bradesco diretamente pelo app, com acesso rápido às simulações e pré-aprovações.",
    icon: TrendingUp,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Slide19() {
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
            App do Marketplace:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              A Loja Aberta 24/7
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-5xl mx-auto leading-relaxed">
            O App do Marketplace Autoline é a experiência nativa desenvolvida para iOS e Android, otimizada para o consumo mobile.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? "#3b82f6"
                      : index === 1
                      ? "#a855f7"
                      : index === 2
                      ? "#22c55e"
                      : "#eab308"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full hover:border-white/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-0.5 shadow-lg flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[9px] flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 border-2 border-orange-400/50 p-6 shadow-lg shadow-orange-500/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white p-0.5 shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-[#0a1628] rounded-[7px] flex items-center justify-center">
                  <img
                    src="https://financiamentos.bradesco/content/dam/banco-bradesco/financiamentos/static-files/bradesco-financiamentos-red.svg"
                    alt="Bradesco"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Retenção e Produtos Bradesco
                </h4>
                <p className="text-white/80 leading-relaxed">
                  O App aumenta a retenção de usuários e cria múltiplos pontos de contato para ofertar produtos financeiros Bradesco através de notificações segmentadas e uma experiência móvel fluida, integrando o banco à jornada de compra do cliente.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}