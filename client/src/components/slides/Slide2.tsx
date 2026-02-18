import { motion } from "motion/react";
import { Users, Store, Building2, Target, Briefcase } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stakeholders = [
  {
    icon: Users,
    title: "Consumidor Final",
    description: "Experiência completa de descoberta, compra e financiamento.",
    color: "",
  },
  {
    icon: Store,
    title: "Lojistas",
    description: "Ferramentas de gestão, marketing e vendas de classe mundial.",
    color: "",
  },
  {
    icon: Building2,
    title: "Bradesco",
    description: "Penetração massiva de produtos financeiros no setor automotivo.",
    color: "",
  },
  {
    icon: Briefcase,
    title: "Operacional",
    description: "Time com a plataforma como copiloto no dia a dia.",
    color: "",
  },
];

export default function Slide2() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          <h2 className="font-extrabold text-[#EDEDEF] tracking-tight drop-shadow-2xl" style={{ fontSize: 'clamp(28px, 4.5vh, 56px)', lineHeight: '1.1', marginBottom: 'clamp(8px, 1.5vh, 20px)' }}>
            Nossa Visão Compartilhada
          </h2>
          <p className="font-medium text-[#8A8A8E] max-w-5xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vh, 22px)', marginBottom: 'clamp(4px, 0.8vh, 12px)' }}>
            Nossa visão é a <span className="text-[#2B7FFF] font-bold">ecosys</span> ser o principal motor da Tribo de Veículos do Bradesco, transformando a Autoline no ecossistema automotivo <span className="text-[#EDEDEF] font-bold">líder do Brasil</span>.
          </p>
          <p className="text-[#555] max-w-5xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(11px, 1.4vh, 18px)' }}>
            Conectar consumidores, lojistas e Gefins por meio de plataformas integradas que potencializam os serviços financeiros de forma inteligente, eficiente e confiável.
          </p>
        </motion.div>

        {/* Stakeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none -z-10"
              />
              <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 sm:p-5 h-full hover:border-white/[0.12] transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 rounded-xl bg-white p-0.5">
                  <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                    <stakeholder.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#EDEDEF]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#EDEDEF] mb-2">
                  {stakeholder.title}
                </h3>
                <p className="text-[#8A8A8E] leading-relaxed text-sm">
                  {stakeholder.description}
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