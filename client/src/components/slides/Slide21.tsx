import { motion } from "motion/react";
import { DollarSign, Target, Smartphone, RefreshCw } from "lucide-react";
import SlideFooter from "../SlideFooter";

const benefits = [
  {
    icon: DollarSign,
    title: "Monetização da Base",
    description: "Transforma o app em plataforma transacional para veículos",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Target,
    title: "Leads Ultra Qualificados",
    description: "Acesso direto a clientes com perfil de crédito conhecido, permitindo ofertas personalizadas com maior conversão",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Engajamento e Retenção",
    description: "Enriquece o app com funcionalidade de alto valor, aumentando frequência de uso e lealdade",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: RefreshCw,
    title: "Ofertas Personalizadas",
    description: "Baseadas em perfil de crédito, histórico e comportamento do cliente",
    color: "from-orange-500 to-red-600",
  },
];

export default function Slide21() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl font-bold text-white mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              Integração com App Bradesco
            </span>
          </h2>
          <h3 className="text-3xl font-bold text-white/90 mb-4">
            O Ecossistema na Mão de Milhões
          </h3>
          <p className="text-xl text-white/80 font-medium max-w-5xl mx-auto leading-snug">
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
          <h4 className="text-2xl font-bold text-white text-center">
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
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? "#10b981"
                      : index === 1
                      ? "#3b82f6"
                      : index === 2
                      ? "#a855f7"
                      : "#f97316"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:border-white/30 hover:bg-white/10 transition-all">
                {/* Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white p-1 shadow-lg flex-shrink-0">
                    <div className="w-full h-full bg-[#0a1628] rounded-[10px] flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 text-base leading-relaxed">
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