import { motion } from "motion/react";
import {
  MapPin, Users, Target, Settings, MessageCircle,
  Bot, Mic, Activity, Zap, BarChart3, Award, Trello,
  Cloud
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const blocks = [
  {
    icon: MapPin,
    title: "Gestão Inteligente",
    color: "#EDEDEF",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: MapPin, text: "Visitas com GPS, check-in/out e roteirização inteligente" },
      { icon: Users, text: "Carteira 360° — cadastro, histórico e memória institucional" },
      { icon: MessageCircle, text: "\"Buzina\" — pedido de apoio com escalação + Teams" },
      { icon: Settings, text: "Kanban de tarefas, checklist pós-visita e gatilhos automáticos" },
    ],
  },
  {
    icon: Activity,
    title: "Health Score (0-100)",
    color: "#2B7FFF",
    borderColor: "border-[#2B7FFF]/50",
    items: [
      { icon: Activity, text: "5 componentes: Performance 30%, Qualidade 20%, Engajamento 20%, Produtos 15%, Relacionamento 15%" },
      { icon: Target, text: "Semáforo: Verde (80+) manutenção, Amarelo (50-79) atenção, Vermelho (<50) ação imediata" },
      { icon: Zap, text: "Automação: queda -20% → tarefa urgente; sem visita >30d → roteiro prioritário" },
    ],
  },
  {
    icon: Mic,
    title: "First IA — Assistente",
    color: "#2B7FFF",
    borderColor: "border-[#2B7FFF]/50",
    items: [
      { icon: Mic, text: "Voz → Insights: transcrição + análise + tarefas automáticas" },
      { icon: Bot, text: "\"O que fazer com essa loja?\" / \"Qual minha prioridade hoje?\"" },
      { icon: Target, text: "\"Modo Guerra\": lista diária de atenção imediata com priorização IA" },
    ],
  },
  {
    icon: BarChart3,
    title: "Painel e Gamificação",
    color: "#EDEDEF",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: BarChart3, text: "Drill-down: Região → Consultor → Loja, funil + metas + forecast" },
      { icon: Award, text: "Gamificação: pontos, badges, ranking (reativação +50pts, meta +100pts)" },
      { icon: Trello, text: "Gestão de campanhas estilo Kanban + boards customizáveis" },
    ],
  },
];

const techStack = [
  { icon: Cloud, label: "Teams", desc: "Comunicação + alertas" },
  { icon: Cloud, label: "Outlook", desc: "Sincronização de agenda" },
  { icon: Cloud, label: "Power BI", desc: "Dashboards executivos" },
  { icon: Cloud, label: "Azure AD", desc: "SSO + governança" },
];

export default function SlideGioPlataforma() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-3 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col flex-1" style={{ gap: 'clamp(6px, 1vh, 16px)' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="font-extrabold tracking-tight text-[#EDEDEF]"
            style={{ fontSize: 'clamp(20px, 3.2vh, 44px)', marginBottom: 'clamp(2px, 0.4vh, 8px)', lineHeight: '1.1' }}
          >
            <span style={{ color: '#2B7FFF' }}>Copiloto do GEFIN</span>
            <span className="text-[#EDEDEF]">: A Plataforma Completa</span>
          </h2>
          <p className="text-[#8A8A8E] font-medium" style={{ fontSize: 'clamp(11px, 1.4vh, 18px)' }}>
            Todas as funcionalidades em um único hub inteligente
          </p>
        </motion.div>

        {/* Grid 2x2 - Blocos funcionais */}
        <div className="grid grid-cols-2 flex-1" style={{ gap: 'clamp(6px, 0.8vh, 14px)' }}>
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              className="flex"
            >
              <div
                className={`bg-white/[0.04] border ${block.borderColor} rounded-xl hover:border-white/[0.15] transition-all w-full flex flex-col`}
                style={{ padding: 'clamp(8px, 1.2vh, 20px)' }}
              >
                {/* Block header */}
                <div className="flex items-center mb-2" style={{ gap: 'clamp(4px, 0.6vh, 10px)' }}>
                  <div
                    className="rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0"
                    style={{ width: 'clamp(24px, 3vh, 40px)', height: 'clamp(24px, 3vh, 40px)' }}
                  >
                    <block.icon
                      className="text-[#EDEDEF]"
                      style={{ width: 'clamp(12px, 1.6vh, 22px)', height: 'clamp(12px, 1.6vh, 22px)' }}
                    />
                  </div>
                  <h3
                    className="font-bold leading-tight"
                    style={{ fontSize: 'clamp(11px, 1.6vh, 20px)', color: block.color }}
                  >
                    {block.title}
                    {(block.title.includes("Health") || block.title.includes("First")) && (
                      <span
                        className="ml-2 rounded-full font-bold align-middle"
                        style={{
                          fontSize: 'clamp(7px, 0.8vh, 11px)',
                          padding: 'clamp(1px, 0.2vh, 3px) clamp(4px, 0.6vh, 8px)',
                          backgroundColor: '#2B7FFF',
                          color: 'white',
                        }}
                      >
                        NOVO
                      </span>
                    )}
                  </h3>
                </div>

                {/* Block items */}
                <div className="flex-1 flex flex-col" style={{ gap: 'clamp(3px, 0.5vh, 8px)' }}>
                  {block.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start" style={{ gap: 'clamp(4px, 0.5vh, 8px)' }}>
                      <item.icon
                        className="text-[#555] flex-shrink-0"
                        style={{
                          width: 'clamp(10px, 1.2vh, 16px)',
                          height: 'clamp(10px, 1.2vh, 16px)',
                          marginTop: 'clamp(1px, 0.2vh, 3px)',
                        }}
                      />
                      <span
                        className="text-[#8A8A8E] leading-snug"
                        style={{ fontSize: 'clamp(8px, 1.1vh, 14px)' }}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white/[0.03] border border-white/[0.06] rounded-lg flex items-center justify-center"
          style={{ padding: 'clamp(4px, 0.6vh, 12px) clamp(8px, 1vh, 20px)', gap: 'clamp(12px, 2vw, 40px)' }}
        >
          <span className="text-[#555] font-bold" style={{ fontSize: 'clamp(8px, 1vh, 13px)' }}>
            Ecossistema Microsoft:
          </span>
          {techStack.map((tech, idx) => (
            <div key={idx} className="flex items-center" style={{ gap: 'clamp(3px, 0.4vh, 6px)' }}>
              <span className="font-bold text-[#EDEDEF]" style={{ fontSize: 'clamp(8px, 1vh, 13px)' }}>
                {tech.label}
              </span>
              <span className="text-[#555]" style={{ fontSize: 'clamp(7px, 0.9vh, 12px)' }}>
                {tech.desc}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
