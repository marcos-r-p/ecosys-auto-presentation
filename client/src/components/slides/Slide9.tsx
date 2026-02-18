import { motion } from "motion/react";
import { Heart, BarChart3, MessageSquare, Bot, CreditCard, Smartphone } from "lucide-react";
import SlideFooter from "../SlideFooter";

const features = [
  {
    id: "gestao",
    number: "1.1",
    title: "Gestão Autoline e ecosys AUTO",
    description: "Escolha a Versão Ideal para Sua Revenda",
    icon: BarChart3,
    color: "",
  },
  {
    id: "comunicacao",
    number: "1.2",
    title: "Comunicação Unificada",
    description: "Otimize a comunicação do lojista, garantindo que nenhuma oportunidade de venda seja perdida",
    icon: MessageSquare,
    color: "",
  },
  {
    id: "copiloto",
    number: "1.3",
    title: "Copiloto Autoline",
    description: "Uma suíte de agentes de Inteligência Artificial que trabalham 24/7, incluindo o Novo GIO, para transformar a revenda em um hub de alta performance e rentabilidade para o lojista.",
    icon: Bot,
    color: "",
    highlight: true,
  },
  {
    id: "originacao",
    number: "1.4",
    title: "Originação e Produtos Bradesco",
    description: "Produtos financeiros do Bradesco são oferecidos de forma integrada e contextualizada dentro do processo natural de vendas da revenda",
    icon: CreditCard,
    color: "",
  },
  {
    id: "app-vendedor",
    number: "1.5",
    title: "App do Vendedor",
    description: "Ferramenta móvel para vendas e atendimento em qualquer lugar.",
    icon: Smartphone,
    color: "",
  },
];

export default function Slide9() {
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
            Gestor{" "}
            <img
              src="https://autoline.com.br/assets/resources/logo_autoline_white_165_50.png"
              alt="Autoline"
              className="h-12 inline-block align-middle"
            />
            :{" "}
            <span className="text-[#EDEDEF]">
              O Coração da Estratégia
            </span>
          </h2>
          <p className="text-xl text-[#8A8A8E] font-medium max-w-5xl mx-auto leading-relaxed">
            O Gestor Autoline é o sistema central que digitaliza e organiza o dia a dia da revenda, tornando-se indispensável. Ele integra a originação de produtos Bradesco de forma natural e sem fricção no fluxo de trabalho do lojista.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-3">
          {features.slice(0, 2).map((feature, index) => (
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

        {/* Copiloto Highlight - Full Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-white/[0.04] opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-xl" />
            <div className="relative bg-white/[0.04] border-2 border-white/[0.08] rounded-xl p-6 hover:border-white/[0.08] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-white p-1 flex-shrink-0">
                  <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                    <Bot className="w-8 h-8 text-[#EDEDEF]" />
                  </div>
                </div>
                <div className="flex-1">
                  
                  <h3 className="text-2xl font-bold text-[#EDEDEF] mb-3">
                    Copiloto Autoline
                  </h3>
                  <p className="text-[#8A8A8E] leading-relaxed">
                    {features[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
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
      </div>

      <SlideFooter />
    </div>
  );
}