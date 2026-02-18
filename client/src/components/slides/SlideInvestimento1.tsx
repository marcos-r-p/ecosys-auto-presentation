import { motion } from "motion/react";
import { DollarSign, Bot, Database, ShoppingCart, Smartphone, Brain, Layers, CheckCircle2, TrendingUp, Rocket } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Investimento de Estruturação (Ano 1)
 * Mostra entregas por fase vinculadas a valores — permite antecipação de faturamento
 * Layout: cards verticais responsivos, sem timeline horizontal
 */

interface PhaseData {
  phase: string;
  months: string;
  color: string;
  borderColor: string;
  bgColor: string;
  deliveries: { icon: React.ElementType; label: string }[];
  investment: string;
  note?: string;
}

const autolinePhases: PhaseData[] = [
  {
    phase: "Fase 1",
    months: "Mês 1–4",
    color: "text-[#8A8A8E]",
    borderColor: "border-white/[0.08]",
    bgColor: "bg-white/[0.04]",
    deliveries: [
      { icon: Database, label: "Arquitetura e Infra" },
      { icon: CheckCircle2, label: "Observabilidade" },
      { icon: CheckCircle2, label: "Segurança e Governança" },
    ],
    investment: "R$ 5.861.444",
    note: "Fundação técnica",
  },
  {
    phase: "Fase 2",
    months: "Mês 5–8",
    color: "text-[#2B7FFF]",
    borderColor: "border-[#2B7FFF]/30",
    bgColor: "bg-[#2B7FFF]/[0.04]",
    deliveries: [
      { icon: ShoppingCart, label: "Marketplace V1" },
      { icon: Database, label: "Gestor Autoline V1" },
      { icon: Smartphone, label: "App do Vendedor" },
      { icon: Brain, label: "Motor Comercial (Data)" },
    ],
    investment: "R$ 7.165.814",
    note: "Produtos no mercado",
  },
  {
    phase: "Fase 3",
    months: "Mês 9–12",
    color: "text-[#2B7FFF]",
    borderColor: "border-[#2B7FFF]/50",
    bgColor: "bg-[#2B7FFF]/[0.06]",
    deliveries: [
      { icon: ShoppingCart, label: "Marketplace V2 + V3" },
      { icon: Database, label: "Gestor V2 + V3 (Copiloto IA)" },
      { icon: Smartphone, label: "App Marketplace Nativo" },
      { icon: Layers, label: "Embedded App Bradesco" },
    ],
    investment: "R$ 7.527.293",
    note: "Ecossistema completo",
  },
];

const gioPhases: PhaseData[] = [
  {
    phase: "Fase 1",
    months: "Mês 1–2",
    color: "text-[#8A8A8E]",
    borderColor: "border-white/[0.08]",
    bgColor: "bg-white/[0.04]",
    deliveries: [
      { icon: Bot, label: "MVP: Visitas + Carteira 360°" },
      { icon: CheckCircle2, label: "Health Score v1" },
    ],
    investment: "R$ 1.850.000",
    note: "Piloto 20-30 usuários",
  },
  {
    phase: "Fase 2",
    months: "Mês 3–4",
    color: "text-[#2B7FFF]",
    borderColor: "border-[#2B7FFF]/30",
    bgColor: "bg-[#2B7FFF]/[0.04]",
    deliveries: [
      { icon: Brain, label: "IA + Priorização + Alertas" },
      { icon: CheckCircle2, label: "Teams + Outlook + Painel" },
    ],
    investment: "R$ 2.050.000",
    note: "Rollout 50-100 usuários",
  },
  {
    phase: "Fase 3",
    months: "Mês 5–6",
    color: "text-[#2B7FFF]",
    borderColor: "border-[#2B7FFF]/50",
    bgColor: "bg-[#2B7FFF]/[0.06]",
    deliveries: [
      { icon: Bot, label: "First IA + Gamificação" },
      { icon: CheckCircle2, label: "Power BI + 100% Operacional" },
    ],
    investment: "R$ 2.100.000",
    note: "Operação completa",
  },
];

export default function SlideInvestimento1() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-3 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-2 flex-1">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <Rocket className="w-5 h-5 text-[#2B7FFF]" />
            <h2 className="font-extrabold tracking-tight text-lg sm: text-[#EDEDEF]" style={{ fontSize: 'clamp(18px, 2.8vh, 36px)', marginBottom: 'clamp(4px, 0.6vh, 10px)', lineHeight: '1.1' }}>
              Investimento de Estruturação — Ano 1
            </h2>
          </div>
          <p className="text-[#8A8A8E] text-[10px] max-w-4xl mx-auto leading-snug" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            Entregas vinculadas a valores por fase. Antecipação de entregas permite antecipação de faturamento.
          </p>
        </motion.div>

        {/* Two Product Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1 min-h-0">

          {/* AUTOLINE — 12 Meses */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Database className="w-4 h-4 text-[#2B7FFF]" />
              <h3 className="text-sm font-bold text-[#EDEDEF]">AUTOLINE</h3>
              <span className="text-[9px] text-[#8A8A8E] bg-white/[0.04] border border-white/[0.06] rounded px-1.5 py-0.5">12 meses</span>
            </div>

            <div className="space-y-2 flex-1">
              {autolinePhases.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  className={`${phase.bgColor} border ${phase.borderColor} rounded-lg p-2.5 flex flex-col sm:flex-row items-start sm:items-center gap-2`}
                >
                  {/* Left: Phase info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold ${phase.color}`}>{phase.phase}</span>
                      <span className="text-[9px] text-[#8A8A8E]">{phase.months}</span>
                      {phase.note && (
                        <span className="text-[8px] text-[#555] italic hidden sm:inline">— {phase.note}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                      {phase.deliveries.map((d, i) => {
                        const Icon = d.icon;
                        return (
                          <div key={i} className="flex items-center gap-1">
                            <Icon className="w-2.5 h-2.5 text-[#8A8A8E]" />
                            <span className="text-[9px] text-[#EDEDEF]">{d.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right: Investment value */}
                  <div className="bg-white/[0.06] border border-white/[0.08] rounded-md px-3 py-1.5 text-center shrink-0">
                    <div className="text-[8px] text-[#8A8A8E] mb-0.5">Investimento</div>
                    <div className="text-sm font-bold text-[#EDEDEF] whitespace-nowrap">{phase.investment}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Autoline Total */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-2 bg-white/[0.06] border border-white/[0.10] rounded-lg p-2 flex items-center justify-between"
            >
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#2B7FFF]" />
                <span className="text-[10px] font-bold text-[#2B7FFF]">TOTAL AUTOLINE</span>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-[#EDEDEF]">R$ 20.554.551</span>
                <span className="text-[8px] text-[#8A8A8E] ml-2">ou 12x R$ 1.712.879</span>
              </div>
            </motion.div>
          </motion.div>

          {/* NOVO GIO — 6 Meses */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Bot className="w-4 h-4 text-[#2B7FFF]" />
              <h3 className="text-sm font-bold text-[#EDEDEF]">NOVO GIO — COPILOTO DO GEFIN</h3>
              <span className="text-[9px] text-[#2B7FFF] bg-[#2B7FFF]/10 border border-[#2B7FFF]/30 rounded px-1.5 py-0.5 font-bold">6 meses</span>
            </div>

            <div className="space-y-2 flex-1">
              {gioPhases.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                  className={`${phase.bgColor} border ${phase.borderColor} rounded-lg p-2.5 flex flex-col sm:flex-row items-start sm:items-center gap-2`}
                >
                  {/* Left: Phase info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold ${phase.color}`}>{phase.phase}</span>
                      <span className="text-[9px] text-[#8A8A8E]">{phase.months}</span>
                      {phase.note && (
                        <span className="text-[8px] text-[#555] italic hidden sm:inline">— {phase.note}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                      {phase.deliveries.map((d, i) => {
                        const Icon = d.icon;
                        return (
                          <div key={i} className="flex items-center gap-1">
                            <Icon className="w-2.5 h-2.5 text-[#8A8A8E]" />
                            <span className="text-[9px] text-[#EDEDEF]">{d.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right: Investment value */}
                  <div className="bg-white/[0.06] border border-white/[0.08] rounded-md px-3 py-1.5 text-center shrink-0">
                    <div className="text-[8px] text-[#8A8A8E] mb-0.5">Investimento</div>
                    <div className="text-sm font-bold text-[#EDEDEF] whitespace-nowrap">{phase.investment}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GIO Total */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mt-2 bg-white/[0.06] border border-white/[0.10] rounded-lg p-2 flex items-center justify-between"
            >
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#2B7FFF]" />
                <span className="text-[10px] font-bold text-[#2B7FFF]">TOTAL NOVO GIO</span>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-[#EDEDEF]">R$ 6.000.000</span>
                <span className="text-[8px] text-[#8A8A8E] ml-2">ou 6x R$ 1.000.000</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Grand Total Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-[#2B7FFF]/10 via-[#2B7FFF]/[0.06] to-[#2B7FFF]/10 border border-[#2B7FFF]/30 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#2B7FFF]" />
            <div>
              <div className="text-xs font-bold text-[#EDEDEF]">INVESTIMENTO TOTAL — ANO 1 (ESTRUTURAÇÃO)</div>
              <div className="text-[9px] text-[#8A8A8E]">Autoline (12 meses) + Novo GIO (6 meses) — entregas antecipáveis = faturamento antecipável</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl sm:text-2xl font-bold text-[#EDEDEF]">R$ 26.554.551</div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
