import { motion } from "motion/react";
import { CreditCard, UserCheck, Zap, TrendingUp, CheckCircle, Gamepad2 } from "lucide-react";
import SlideFooter from "../SlideFooter";

const steps = [
  {
    id: "lead",
    number: "1.4.1",
    title: "Lead Qualificado",
    description: "O cliente demonstra interesse por um veículo e suas informações são registradas no CRM, sinalizando uma oportunidade de venda.",
    icon: UserCheck,
    color: "",
  },
  {
    id: "simulacao",
    number: "1.4.2",
    title: "Simulação Instantânea",
    description: "Com um clique, o vendedor (ou o próprio lead) simula o financiamento Bradesco diretamente na plataforma, com condições personalizadas.",
    icon: Zap,
    color: "",
  },
  {
    id: "pre-aprovacao",
    number: "1.4.3",
    title: "Pré-Aprovação e Envio de propostas",
    description: "APIs do Bradesco retornam a pré-aprovação de crédito em tempo real, agilizando o processo e validando a capacidade de compra do cliente.",
    icon: CheckCircle,
    color: "",
  },
  {
    id: "cross-sell",
    number: "1.4.4",
    title: "Cross-Sell Inteligente",
    description: "O sistema Autoline sugere automaticamente produtos adicionais Bradesco, como Seguro Veicular e abertura de conta, complementando a oferta.",
    icon: TrendingUp,
    color: "",
  },
  {
    id: "fechamento",
    number: "1.4.5",
    title: "Fechamento",
    description: "A venda é concluída de forma fluida, com o cliente adquirindo o veículo e múltiplos produtos Bradesco, aumentando a rentabilidade da revenda.",
    icon: CreditCard,
    color: "",
  },
];

export default function Slide13() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            Originação e Produtos Bradesco{" "}
            <span className="text-[#EDEDEF]">
              no Momento Certo
            </span>
          </h2>
          <p className="text-[#8A8A8E] font-medium max-w-5xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            A "mágica" acontece quando os produtos financeiros do Bradesco são oferecidos de forma integrada e contextualizada dentro do processo natural de vendas da revenda.
          </p>
        </motion.div>

        {/* Steps Flow - Row 1 (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {steps.slice(0, 3).map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 h-full hover:border-white/[0.12] transition-all interactive-card">
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className={`w-14 h-14 rounded-xl bg-white/[0.06] p-0.5 shadow-lg`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-[#EDEDEF]" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#EDEDEF]">
                    {step.title}
                  </h3>
                  <p className="text-[#8A8A8E] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow */}
              {index < 2 && (
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#EDEDEF] opacity-80">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Arrow Between Rows */}
        <div className="flex justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#EDEDEF] opacity-80 rotate-90">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Steps Flow - Row 2 (2 cards centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {steps.slice(3).map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 h-full hover:border-white/[0.12] transition-all interactive-card">
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className={`w-14 h-14 rounded-xl bg-white/[0.06] p-0.5 shadow-lg`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-[#EDEDEF]" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#EDEDEF]">
                    {step.title}
                  </h3>
                  <p className="text-[#8A8A8E] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow */}
              {index < 1 && (
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#EDEDEF] opacity-80">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Gamification Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-xl bg-white/[0.04] border-2 border-white/[0.08] p-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-white p-0.5 flex-shrink-0">
                <div className="w-full h-full bg-[#0A0A0B] rounded-[7px] flex items-center justify-center">
                  <Gamepad2 className="w-7 h-7 text-[#EDEDEF]" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#EDEDEF] mb-2">
                  Gamificação Exclusiva
                </h4>
                <p className="text-[#8A8A8E] text-lg leading-relaxed">
                  Um sistema de incentivos e desafios será implementado para lojistas e vendedores, premiando aqueles que mais ofertarem e converterem produtos Bradesco, impulsionando a performance.
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