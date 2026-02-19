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
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/oPnqWOABGquuztOR.png"
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
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/oPnqWOABGquuztOR.png"
          alt="Autoline"
          className="h-3 inline-block"
        />
        <span>- Gestor Autoline Lite</span>
      </div>,
      "Gestor Autoline Pro",
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
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/oPnqWOABGquuztOR.png"
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
    id: "novo-gio",
    title: "Copiloto do GEFIN (Novo GIO)",
    icon: Bot,
    color: "highlight",
    items: [
      "Hub inteligente de gestão comercial",
      "IA, automação e inteligência preditiva",
      "Maximizar performance e reduzir churn",
      "Gestão estratégica da rede de parceiros",
    ],
  },
  {
    id: "diferenciais-unicos",
    title: "Diferenciais Únicos",
    icon: Sparkles,
    color: "",
    items: [
      "Ecossistema B2B + B2C integrado",
      "IA em todos os processos",
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
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(circle, #2B7FFF, transparent 70%)" }} />
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-5 h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-2 px-6 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(43,127,255,0.12)", boxShadow: "0 0 12px rgba(43,127,255,0.04)" }}>
            <TrendingUp className="w-6 h-6 text-[#EDEDEF]" />
            <span className="text-[#2B7FFF] text-base font-semibold">
              Proposta Atual
            </span>
          </div>
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(4px, 0.6vh, 10px)', lineHeight: '1.1' }}>
            Ecossistema{" "}
            <span className="text-[#EDEDEF]">Tribo de Veículos</span>:{" "}
            <span className="text-[#EDEDEF]">Potencializando Resultados</span>
          </h2>
          <p className="text-[#8A8A8E] font-medium" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            Um salto de produto e valor, integrando B2B, B2C e Tecnologia de Ponta
          </p>
        </motion.div>

        {/* Grid Unificado - 3 colunas com todos os cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 flex-1">
          {sections.map((section, index) => {
            const isGio = section.id === "novo-gio";
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
                className="relative group"
              >
                <div
                  className={`relative h-full rounded-xl p-3 sm:p-4 transition-all`}
                  style={{
                    background: isGio ? "rgba(43,127,255,0.08)" : "rgba(255,255,255,0.03)",
                    border: isGio ? "2px solid rgba(43,127,255,0.3)" : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: isGio ? "0 0 25px rgba(43,127,255,0.06), inset 0 1px 0 rgba(43,127,255,0.05)" : "0 2px 12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.03)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg p-0.5 shadow-lg ${
                        isGio ? "bg-[#2B7FFF]/20" : "bg-white/[0.06]"
                      }`}
                    >
                      <div className="w-full h-full bg-[#0A0A0B] rounded-[7px] flex items-center justify-center">
                        <section.icon
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            isGio ? "text-[#2B7FFF]" : "text-[#EDEDEF]"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <h3
                        className={`text-sm sm:text-base font-bold ${
                          isGio ? "text-[#2B7FFF]" : "text-[#EDEDEF]"
                        }`}
                      >
                        {section.title}
                      </h3>
                      {isGio && (
                        <span
                          className="px-2 py-0.5 text-[10px] font-bold rounded-full"
                          style={{ backgroundColor: "#2B7FFF", color: "white" }}
                        >
                          NOVO
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2"
                      >
                        <div
                          className={`flex-shrink-0 w-1 h-1 rounded-full mt-1.5 ${
                            isGio ? "bg-[#2B7FFF]/40" : "bg-white/[0.06]"
                          }`}
                        />
                        <span className="text-[#8A8A8E] text-xs sm:text-sm leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="relative overflow-hidden rounded-xl p-3 sm:p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(43,127,255,0.12)", boxShadow: "0 0 20px rgba(43,127,255,0.03), inset 0 1px 0 rgba(255,255,255,0.03)" }}>
            <div className="flex items-center justify-center gap-3">
              <Building2 className="w-5 h-5 text-[#EDEDEF]" />
              <span className="text-[#EDEDEF] font-semibold text-sm sm:text-base">
                Transformação digital completa do mercado automotivo brasileiro
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-white/[0.06] rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
