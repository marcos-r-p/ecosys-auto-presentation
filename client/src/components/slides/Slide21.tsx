import { motion } from "motion/react";
import { DollarSign, Target, Smartphone, RefreshCw } from "lucide-react";
import SlideFooter from "../SlideFooter";

const benefits = [
  {
    icon: DollarSign,
    title: "Monetização da Base",
    description: "Transforma o app em plataforma transacional para veículos",
    color: "",
  },
  {
    icon: Target,
    title: "Leads Ultra Qualificados",
    description: "Acesso direto a clientes com perfil de crédito conhecido, permitindo ofertas personalizadas com maior conversão",
    color: "",
  },
  {
    icon: Smartphone,
    title: "Engajamento e Retenção",
    description: "Enriquece o app com funcionalidade de alto valor, aumentando frequência de uso e lealdade",
    color: "",
  },
  {
    icon: RefreshCw,
    title: "Ofertas Personalizadas",
    description: "Baseadas em perfil de crédito, histórico e comportamento do cliente",
    color: "",
  },
];

export default function Slide21() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            <span className="text-[#EDEDEF]">
              Integração com App Bradesco
            </span>
          </h2>
          <h3 className="text-3xl font-bold text-[#EDEDEF] mb-4">
            O Ecossistema na Mão de Milhões
          </h3>
          <p className="text-[#8A8A8E] text-xl font-medium max-w-5xl mx-auto leading-snug" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            A integração embedded do Marketplace Autoline ao aplicativo do Bradesco conecta o ecossistema automotivo diretamente à vasta base de clientes do banco.
          </p>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5"
        >
          <h4 className="text-2xl font-bold text-[#EDEDEF] text-center">
            Benefícios Estratégicos para o Bradesco
          </h4>
        </motion.div>

        {/* Benefits Grid - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
                {/* Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white p-1 flex-shrink-0">
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[10px] flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-[#EDEDEF]" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#EDEDEF] leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#8A8A8E] text-base leading-relaxed">
                  {benefit.description}
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