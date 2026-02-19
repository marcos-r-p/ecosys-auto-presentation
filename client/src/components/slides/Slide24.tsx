import { motion } from "motion/react";
import { MapPin, Users, Target, Settings, MessageCircle, Bot, Activity, Zap, Cloud } from "lucide-react";
import SlideFooter from "../SlideFooter";

const mainModules = [
  {
    icon: MapPin,
    title: "Gestão de Visitas",
    items: ["Planejamento inteligente", "Check-in GPS validado", "Roteirização automática"],
    color: "#2B7FFF",
  },
  {
    icon: Users,
    title: "Carteira 360°",
    items: ["Cadastro centralizado", "Indicadores em tempo real", "Health Score visual"],
    color: "#2B7FFF",
  },
  {
    icon: Target,
    title: "Priorização com IA",
    items: ["Alertas preditivos", "Risco de inativação antecipado", "Próximas ações sugeridas"],
    color: "#CC092F",
    highlight: true,
  },
  {
    icon: Settings,
    title: "Operação Automatizada",
    items: ["Kanban por lojista", "Checklist pós-visita", "Gatilhos comerciais"],
    color: "#2B7FFF",
  },
  {
    icon: MessageCircle,
    title: "Comunicação Rápida",
    items: ["Buzina com escalação", "Integração Teams", "Chat com histórico"],
    color: "#2B7FFF",
  },
  {
    icon: Bot,
    title: "First IA — Assistente",
    items: ["Resumo de visitas por voz", "Sugestões automáticas", "Copiloto de decisão"],
    color: "#CC092F",
    highlight: true,
  },
];

const bottomModules = [
  {
    icon: Activity,
    title: "Health Score",
    subtitle: "0-100",
    items: ["Performance · Engajamento · Qualidade"],
    badges: [
      { label: "80+: Upsell", color: "#22C55E" },
      { label: "50-79: Atenção", color: "#EAB308" },
      { label: "<50: Ação", color: "#CC092F" },
    ],
  },
  {
    icon: Zap,
    title: "Automação",
    subtitle: "Inteligente",
    items: ["Performance -20% → Tarefa urgente", "Sem visita 30d → Roteiro prioritário", "Score <40 → Plano de recuperação"],
  },
  {
    icon: Cloud,
    title: "Ecossistema",
    subtitle: "Microsoft",
    items: ["Teams · Outlook · Power BI · Azure AD"],
  },
];

export default function Slide24() {
  return (
    <div className="flex flex-col h-full px-6 sm:px-10 md:px-14 lg:px-20 pt-4 pb-1 overflow-hidden">
      {/* Content wrapper — centralizado verticalmente */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-8"
        >
          <h2
            className="font-black tracking-tight leading-none"
            style={{ fontSize: "clamp(26px, 4.5vh, 52px)" }}
          >
            <span className="text-[#CC092F]">Copiloto Comercial</span>
            <span className="text-[#EDEDEF]">: Funcionalidades</span>
          </h2>
        </motion.div>

        {/* Main 3x2 Grid — módulos principais */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
          {mainModules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 + i * 0.04 }}
              className="rounded-xl px-4 py-3 relative overflow-hidden"
              style={{
                background: mod.highlight
                  ? "linear-gradient(160deg, rgba(204,9,47,0.12), rgba(204,9,47,0.04))"
                  : "rgba(255,255,255,0.03)",
                border: mod.highlight
                  ? "2px solid rgba(204,9,47,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: mod.highlight
                  ? "0 0 30px rgba(204,9,47,0.08)"
                  : "none",
              }}
            >
              {/* Badge NOVO */}
              {mod.highlight && (
                <div
                  className="absolute top-0 right-0 px-3 py-1 rounded-bl-lg font-black uppercase tracking-wider text-white"
                  style={{
                    fontSize: "clamp(8px, 0.9vh, 11px)",
                    background: "linear-gradient(135deg, #CC092F, #E01040)",
                  }}
                >
                  NOVO
                </div>
              )}

              {/* Header do módulo */}
              <div className="flex items-center gap-3 mb-2.5">
                <div
                  className="w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${mod.color}22, ${mod.color}0D)`,
                    border: `1.5px solid ${mod.color}55`,
                  }}
                >
                  <mod.icon
                    className="w-5 h-5 md:w-6 md:h-6"
                    style={{ color: mod.color }}
                  />
                </div>
                <h3
                  className="font-extrabold leading-tight"
                  style={{
                    fontSize: "clamp(15px, 2.2vh, 24px)",
                    color: mod.highlight ? "#FFFFFF" : "#EDEDEF",
                  }}
                >
                  {mod.title}
                </h3>
              </div>

              {/* Items — max 3, texto conciso */}
              <ul className="flex flex-col gap-1.5">
                {mod.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: mod.color, opacity: mod.highlight ? 1 : 0.6 }}
                    />
                    <span
                      className="font-medium leading-snug"
                      style={{
                        fontSize: "clamp(12px, 1.5vh, 17px)",
                        color: mod.highlight ? "#E0E0E4" : "#9A9AA0",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — módulos secundários (menores) */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {bottomModules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.04 }}
              className="rounded-lg px-4 py-2.5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <mod.icon className="w-4 h-4 md:w-5 md:h-5 text-[#6A6A6E]" />
                <h4
                  className="font-bold text-[#ABABAF] leading-tight"
                  style={{ fontSize: "clamp(12px, 1.5vh, 17px)" }}
                >
                  {mod.title}{" "}
                  <span className="font-normal text-[#6A6A6E]">{mod.subtitle}</span>
                </h4>
              </div>
              {mod.items.map((item, j) => (
                <p
                  key={j}
                  className="text-[#7A7A7E] leading-snug"
                  style={{ fontSize: "clamp(10px, 1.2vh, 14px)" }}
                >
                  {item}
                </p>
              ))}
              {mod.badges && (
                <div className="flex gap-2 mt-1.5">
                  {mod.badges.map((b, k) => (
                    <span
                      key={k}
                      className="font-semibold"
                      style={{ fontSize: "clamp(9px, 1vh, 12px)", color: b.color }}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
