import { motion } from "motion/react";
import {
  Sparkles,
  ShoppingBag,
  BarChart3,
  Zap,
  TrendingUp,
  Brain,
  Building2,
  Rocket,
  Bot,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const sections = [
  {
    id: "gestor-autoline",
    title: (
      <div className="flex items-center gap-2">
        <span>Gestor</span>
        <img
          src="https://autoline.com.br/assets/resources/logo_autoline_white_165_50.png"
          alt="Autoline"
          className="h-5"
        />
      </div>
    ),
    icon: BarChart3,
    color: "",
    items: [
      <div key="gestor-autoline-dms" className="flex items-center gap-2">
        <span>Gestor</span>
        <img
          src="https://autoline.com.br/assets/resources/logo_autoline_white_165_50.png"
          alt="Autoline"
          className="h-3 inline-block"
        />
        <span>- Gestor Autoline Lite</span>
      </div>,
      "ecosys AUTO - Gestor Autoline",
      "App Vendedor",
      "Copiloto Autoline (IA)",
      "Originação Bradesco",
    ],
  },
  {
    id: "marketplace-autoline",
    title: (
      <div className="flex items-center gap-2">
        <span>Marketplace</span>
        <img
          src="https://autoline.com.br/assets/resources/logo_autoline_white_165_50.png"
          alt="Autoline"
          className="h-5"
        />
      </div>
    ),
    icon: ShoppingBag,
    color: "",
    items: ["B2C", "App nativo", "IA para leads", "Integração App Bradesco"],
  },
  {
    id: "plataforma-dados",
    title: "Plataforma de Dados",
    icon: Brain,
    color: "",
    items: ["APIs", "Dashboards", "Open Finance", "Inteligência de mercado"],
  },
  {
    id: "diferenciais-unicos",
    title: "Diferenciais Únicos",
    icon: Sparkles,
    color: "",
    items: [
      "Ecossistema B2B + B2C integrado",
      "IA em todos os processos",
      <div key="gio-novo" className="flex items-center gap-2">
        <span className="font-bold" style={{ color: '#2B7FFF' }}>Novo GIO</span>
        <span className="text-lg">⭐</span>
        <span className="px-2 py-0.5 text-xs font-bold rounded-full" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>
          NOVO
        </span>
      </div>,
      "Parceria estratégica exclusiva Bradesco",
      "Visão futurista (Agentic Commerce Protocol)",
    ],
  },
  {
    id: "escala-entrega",
    title: "Escala da Entrega",
    icon: Rocket,
    color: "",
    items: [
      "Centenas de lojistas ativos",
      "Milhões de consumidores potenciais",
      "Múltiplos produtos financeiros",
      "Transformação digital completa do setor",
    ],
  },
];

export default function Slide6() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <div className="inline-flex items-center gap-3 mb-2 px-6 py-2 bg-white/[0.04] rounded-full border border-white/[0.08]">
            <TrendingUp className="w-6 h-6 text-[#EDEDEF]" />
            <span className="text-[#2B7FFF] text-base font-semibold">
              Proposta Atual
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDEF] mb-2">
            Ecossistema{" "}
            <span className="text-[#EDEDEF]">
              Tribo de Veículos
            </span>
            :{" "}
            <span className="text-[#EDEDEF]">
              Potencializando Resultados
            </span>
          </h2>
          <p className="text-lg text-[#8A8A8E] font-medium">
            Um salto de produto e valor, integrando B2B, B2C e Tecnologia de
            Ponta
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.slice(0, 3).map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-lg bg-white/[0.06] p-0.5 shadow-lg`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[9px] flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-[#EDEDEF]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#EDEDEF]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + index * 0.1 + itemIndex * 0.05,
                      }}
                      className="flex items-start gap-2.5"
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-white/[0.06] rounded-full mt-2" />
                      <span className="text-[#8A8A8E] text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GIO - Destaque Especial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="relative group">
            <div className="relative bg-white/[0.04] border border-white/[0.12] rounded-xl p-4 transition-all">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white p-1 shadow-white/30">
                  <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                    <Bot className="w-7 h-7 text-[#2B7FFF]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-[#2B7FFF]">
                      Novo GIO
                    </h3>
                    <span className="text-lg">⭐</span>
                    <span className="px-3 py-1 text-sm font-bold rounded-full shadow-lg" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>
                      NOVO
                    </span>
                  </div>
                  <p className="text-[#8A8A8E] leading-relaxed text-sm">
                    Hub inteligente de gestão comercial que potencializa o relacionamento do Bradesco com sua rede de lojistas, transformando dados em ação através de IA, automação e inteligência preditiva para maximizar performance e reduzir churn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.slice(3).map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-lg bg-white/[0.06] p-0.5 shadow-lg`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[9px] flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-[#EDEDEF]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#EDEDEF]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + index * 0.1 + itemIndex * 0.05,
                      }}
                      className="flex items-start gap-2.5"
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-white/[0.06] rounded-full mt-2" />
                      <span className="text-[#8A8A8E] text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="space-y-3"
        >
          <div className="relative overflow-hidden rounded-xl bg-white/[0.04] border border-white/[0.12] p-5">
            <div className="flex items-center justify-center gap-3">
              <Building2 className="w-6 h-6 text-[#EDEDEF]" />
              <span className="text-[#EDEDEF] font-semibold text-lg">
                Transformação digital completa do mercado automotivo brasileiro
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white/[0.06] rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* GIO Footnote */}
          
        </motion.div>
      </div>
      
      <SlideFooter />
    </div>
  );
}