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
    color: "",
  },
  {
    id: "notificacoes",
    number: "2.4.2",
    title: "Notificações In-App",
    description: "Receba alertas personalizados sobre veículos favoritados, quedas de preço, novas ofertas exclusivas e promoções de lojistas próximos.",
    icon: Bell,
    color: "",
  },
  {
    id: "geolocalizacao",
    number: "2.4.3",
    title: "Busca por Geolocalização",
    description: "Descubra as melhores ofertas de veículos nas lojas mais próximas, facilitando a visita e a decisão de compra do consumidor.",
    icon: MapPin,
    color: "",
  },
  {
    id: "qualificacao",
    number: "2.4.4",
    title: "Qualificação do Lead",
    description: "Inicie o processo de compra e financiamento Bradesco diretamente pelo app, com acesso rápido às simulações e pré-aprovações.",
    icon: TrendingUp,
    color: "",
  },
];

export default function Slide19() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            App do Marketplace:{" "}
            <span className="text-[#EDEDEF]">
              A Loja Aberta 24/7
            </span>
          </h2>
          <p className="text-[#8A8A8E] text-xl font-medium max-w-5xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            O App do Marketplace Autoline é a experiência nativa desenvolvida para iOS e Android, otimizada para o consumo mobile.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-white/[0.06] p-0.5 flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[9px] flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#EDEDEF]" />
                    </div>
                  </div>
                  <div>
                    
                    <h3 className="text-xl font-bold text-[#EDEDEF]">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#8A8A8E] text-sm leading-relaxed">
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
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] border-2 border-white/[0.08] p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white p-0.5 flex-shrink-0">
                <div className="w-full h-full bg-[#0A0A0B] rounded-[7px] flex items-center justify-center">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/bXyzDtBgMgQFeFGe.svg"
                    alt="Bradesco"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#EDEDEF] mb-2">
                  Retenção e Produtos Bradesco
                </h4>
                <p className="text-[#8A8A8E] leading-relaxed">
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