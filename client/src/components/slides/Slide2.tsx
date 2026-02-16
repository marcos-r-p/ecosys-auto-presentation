import { motion } from "motion/react";
import { Users, Store, Building2, Target, Briefcase } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stakeholders = [
  {
    icon: Users,
    title: "Consumidor Final",
    description: "Experiência completa de descoberta, compra e financiamento.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Store,
    title: "Lojistas",
    description: "Ferramentas de gestão, marketing e vendas de classe mundial.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Building2,
    title: "Bradesco",
    description: "Penetração massiva de produtos financeiros no setor automotivo.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Briefcase,
    title: "Operacional",
    description: "Time com a plataforma como copiloto no dia a dia.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Slide2() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-3 md:mb-4 drop-shadow-2xl">
            Nossa Visão Compartilhada
          </h2>
          <p className="text-base sm:text-lg font-medium text-white max-w-5xl mx-auto leading-relaxed mb-2 md:mb-3 drop-shadow-lg">
            Nossa visão é a <span className="text-blue-400 font-bold">ecosys</span> ser o principal motor da Tribo de Veículos do Bradesco, transformando a Autoline no ecossistema automotivo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500 font-bold">líder do Brasil</span>.
          </p>
          <p className="text-sm sm:text-base text-white/90 max-w-5xl mx-auto leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl pointer-events-none -z-10"
                style={{
                  background: `linear-gradient(135deg, ${
                    stakeholder.color.includes('blue') ? '#3b82f6' : 
                    stakeholder.color.includes('purple') ? '#a855f7' : 
                    stakeholder.color.includes('red') ? '#ef4444' : 
                    '#22c55e'
                  }, transparent)`
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 h-full hover:border-white/20 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 rounded-xl bg-white p-0.5">
                  <div className="w-full h-full bg-[#0a1628] rounded-[11px] flex items-center justify-center">
                    <stakeholder.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {stakeholder.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
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