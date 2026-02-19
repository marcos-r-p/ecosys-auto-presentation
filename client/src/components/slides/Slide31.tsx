import { motion } from "motion/react";
import { Bot, ShoppingCart, Database, Sparkles, Search, Bell, Smartphone, Brain, BarChart3, Wifi, Zap, MessageSquare, Map, TrendingUp, Trophy, Rocket, CheckCircle2 } from "lucide-react";
import SlideFooter from "../SlideFooter";

const marketplacePhases = [
  {
    version: "V1 - MVP",
    subtitle: "Essencial",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Search, title: "Catálogo Básico", features: ["Filtros básicos (marca, modelo, ano, preço)", "Busca simples", "Listagem com fotos"] },
      { icon: Bell, title: "Área Logada", features: ["Favoritos e listas", "Alertas personalizados"] },
    ]
  },
  {
    version: "V2 - AVANÇADO",
    subtitle: "Inteligência",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Search, title: "Catálogo Expandido", features: ["Filtros avançados", "Busca inteligente IA", "Filtro localidade"] },
      { icon: Brain, title: "IA Básica", features: ['"Descubra Meu Carro"', '"Quanto Vale Meu Carro"'] },
      { icon: Smartphone, title: "App Marketplace", features: ["Nativo iOS/Android", "Push notifications"] },
    ]
  },
  {
    version: "V3 - PREMIUM",
    subtitle: "Experiência",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Sparkles, title: "Plataforma Conteúdo", features: ["Selos de qualidade", "Conteúdo curado", "SEO avançado"] },
      { icon: Brain, title: "IA Avançada", features: ["Simulação financeira", "Leads pré-aprovados"] },
    ]
  }
];

const dmsPhases = [
  {
    version: "V1 - MVP",
    subtitle: "Lançamento",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Database, title: "Gestão Autoline", features: ["Fork Gestor Lite", "Controle de acessos"] },
      { icon: Smartphone, title: "App do Vendedor", features: ["Ferramenta móvel essencial"] },
    ]
  },
  {
    version: "V2 - AVANÇADO",
    subtitle: "Integração",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: MessageSquare, title: "eConversa", features: ["WhatsApp, OLX, Facebook", "Integradores de portais"] },
      { icon: Database, title: "Originação Bradesco", features: ["Simulação integrada", "Analytics avançados"] },
    ]
  },
  {
    version: "V3 - PREMIUM",
    subtitle: "IA Completa",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Bot, title: "Copiloto Autoline", features: ["IA assistente completa", "Automações inteligentes"] },
      { icon: Database, title: "Carteira Avançada", features: ["Relacionamento e fidelização"] },
    ]
  }
];

const gioPhases = [
  {
    version: "V1 - MVP",
    subtitle: "Essencial",
    borderColor: "border-[#2B7FFF]/30",
    items: [
      { icon: MapPin, title: "Gestão de Visitas", features: ["GPS + registro", "Carteira 360°"] },
      { icon: Bot, title: "Health Score v1", features: ["Score + semáforo", "Comunicação rápida"] },
    ]
  },
  {
    version: "V2 - INTELIGÊNCIA",
    subtitle: "IA + Integrações",
    borderColor: "border-[#2B7FFF]/30",
    items: [
      { icon: Brain, title: "Priorização IA", features: ["Alertas automáticos", "Painel gerencial"] },
      { icon: Wifi, title: "Microsoft", features: ["Teams + Outlook", "Gestão de ganhos"] },
    ]
  },
  {
    version: "V3 - EVOLUÇÃO",
    subtitle: "Contínua",
    borderColor: "border-[#2B7FFF]/30",
    items: [
      { icon: Sparkles, title: "First IA Avançada", features: ["Transcrição voz", "Playbooks inteligentes"] },
      { icon: Trophy, title: "Gamificação", features: ["Ranking + desafios", "Power BI integrado"] },
    ]
  }
];

import { MapPin } from "lucide-react";

const timeline = [
  { product: "MARKETPLACE", v1: "Mês 5", v2: "Mês 9", v3: "Mês 12", color: "bg-white/[0.06]" },
  { product: "Gestor Autoline", v1: "Mês 5", v2: "Mês 9", v3: "Mês 12", color: "bg-white/[0.06]" },
  { product: "Novo GIO", v1: "Mês 1-2", v2: "Mês 3-4", v3: "Mês 5-6", color: "bg-[#2B7FFF]", special: "Evolução Contínua" },
];

interface PhaseCardProps {
  phase: { version: string; subtitle: string; borderColor: string; items: { icon: React.ElementType; title: string; features: string[] }[] };
  delay: number;
  bulletColor?: string;
}

function PhaseCard({ phase, delay, bulletColor = "#8A8A8E" }: PhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`bg-white/[0.04] border ${phase.borderColor} rounded-lg p-2.5`}
    >
      <div className="mb-1.5">
        <h4 className="text-[11px] font-bold text-[#EDEDEF]">{phase.version}</h4>
        <p className="text-[9px] text-[#8A8A8E]">{phase.subtitle}</p>
      </div>
      <div className="space-y-1.5">
        {phase.items.map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-1 mb-0.5">
              <item.icon className="w-3 h-3 text-[#8A8A8E]" />
              <h5 className="text-[10px] font-bold text-[#EDEDEF]">{item.title}</h5>
            </div>
            <ul className="space-y-0 ml-4">
              {item.features.map((feature, j) => (
                <li key={j} className="text-[9px] text-[#8A8A8E] flex items-start gap-1">
                  <span style={{ color: bulletColor }} className="mt-0.5 text-[7px]">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Slide31() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-2 pb-1 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-extrabold tracking-tight text-lg sm: text-[#EDEDEF] .5" style={{ fontSize: 'clamp(18px, 2.8vh, 36px)', marginBottom: 'clamp(4px, 0.6vh, 10px)', lineHeight: '1.1' }}>
            Roadmap de Lançamento por Fases
          </h2>
          <p className="text-[#8A8A8E] text-[11px]" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            <span className="text-[#2B7FFF] font-semibold">Marketplace Autoline</span> + <span className="font-semibold">Gestor Autoline</span> + <span className="text-[#2B7FFF] font-bold">Novo GIO</span>
          </p>
        </motion.div>

        {/* MARKETPLACE AUTOLINE */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <ShoppingCart className="w-4 h-4 text-[#2B7FFF]" />
            <h3 className="text-sm font-bold text-[#2B7FFF]">MARKETPLACE AUTOLINE</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {marketplacePhases.map((phase, idx) => (
              <PhaseCard key={idx} phase={phase} delay={0.1 + idx * 0.05} bulletColor="#2B7FFF" />
            ))}
          </div>
        </div>

        {/* GESTOR AUTOLINE */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Database className="w-4 h-4 text-[#EDEDEF]" />
            <h3 className="text-sm font-bold text-[#8A8A8E]">GESTOR AUTOLINE</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {dmsPhases.map((phase, idx) => (
              <PhaseCard key={idx} phase={phase} delay={0.15 + idx * 0.05} bulletColor="#8A8A8E" />
            ))}
          </div>
        </div>

        {/* NOVO GIO */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Bot className="w-4 h-4 text-[#2B7FFF]" />
            <h3 className="text-sm font-bold text-[#2B7FFF]">NOVO GIO - COPILOTO DO GEFIN</h3>
            <span className="px-1.5 py-0.5 bg-[#2B7FFF]/20 border border-[#2B7FFF]/50 rounded text-[9px] font-bold text-[#2B7FFF]">NOVO</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {gioPhases.map((phase, idx) => (
              <PhaseCard key={idx} phase={phase} delay={0.2 + idx * 0.05} bulletColor="#2B7FFF" />
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="space-y-1"
        >
          {timeline.map((item, idx) => (
            <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-md px-3 py-1.5 flex items-center gap-3 min-w-0">
              <span className={`px-2 py-0.5 ${item.color} rounded text-[10px] font-bold text-[#EDEDEF] whitespace-nowrap`}>
                {item.product}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] flex-1 min-w-0">
                <span className="text-[#8A8A8E]">V1</span>
                <span className="font-bold text-[#EDEDEF]">{item.v1}</span>
                <span className="text-[#8A8A8E]">→</span>
                <span className="text-[#8A8A8E]">V2</span>
                <span className="font-bold text-[#EDEDEF]">{item.v2}</span>
                <span className="text-[#8A8A8E]">→</span>
                <span className="text-[#8A8A8E]">V3</span>
                <span className="font-bold text-[#EDEDEF]">{item.v3}</span>
                {item.special && (
                  <>
                    <span className="text-[#8A8A8E]">→</span>
                    <span className="font-bold text-[#2B7FFF]">{item.special}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
