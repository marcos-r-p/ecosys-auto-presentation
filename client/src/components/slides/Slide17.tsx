import { motion } from "motion/react";
import { Bot, Car, DollarSign, TrendingUp } from "lucide-react";
import SlideFooter from "../SlideFooter";

const features = [
  {
    id: "descubra",
    number: "2.2.1",
    title: "Descubra o Carro Ideal",
    description: "Nossa IA recomenda veículos com base no perfil e capacidade financeira do consumidor, gerando leads altamente qualificados para as revendas.",
    icon: Car,
    color: "",
  },
  {
    id: "avaliacao",
    number: "2.2.2",
    title: "Quanto Vale o Meu Carro?",
    description: "Ferramenta de avaliação que capta leads de clientes interessados em trocar de veículo, alimentando a base de captação dos lojistas.",
    icon: DollarSign,
    color: "",
  },
  {
    id: "simulacao",
    number: "2.2.3",
    title: "Simulação Digital",
    description: "Cada anúncio destaca a simulação de financiamento e seguros Bradesco, permitindo que o consumidor inicie a jornada de crédito antes mesmo do contato com a revenda.",
    icon: TrendingUp,
    color: "",
  },
];

export default function Slide17() {
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
            IA no Marketplace:{" "}
            <span className="text-[#EDEDEF]">
              Gerando Leads com Crédito Pré-Aprovado
            </span>
          </h2>
          <p className="text-[#8A8A8E] text-xl font-medium max-w-5xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            O Marketplace Autoline potencializa a geração de leads qualificados através de ferramentas de Inteligência Artificial, oferecendo uma experiência de compra personalizada e otimizando a jornada do cliente.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
                <div className="flex justify-center mb-3">
                  <div
                    className={`w-16 h-16 rounded-xl bg-white/[0.06] p-1 shadow-2xl`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-[#EDEDEF]" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#EDEDEF] text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#8A8A8E] text-center leading-relaxed">
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
                  Vantagem Bradesco
                </h4>
                <p className="text-[#8A8A8E] leading-relaxed">
                  Ao originar o financiamento no início da jornada de compra, o Bradesco captura dados valiosos do consumidor e envia ao lojista um lead com crédito pré-aprovado, aumentando drasticamente a chance de conversão.
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