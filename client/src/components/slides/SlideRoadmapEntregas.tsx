import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, ShoppingCart, Brain, Bot, ChevronDown } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Timeline horizontal com 4 trilhas (DMS, Marketplace, Motor, Copiloto).
 * Cada mês tem entregas concretas. V1/V2/V3 são marcos destacados.
 * Hover em cada célula mostra as entregas daquele mês.
 */

interface MonthDelivery {
  items: string[];
  isVersion?: string; // "V1", "V2", "V3"
  isDiscovery?: boolean;
}

interface ProductTrack {
  name: string;
  shortName: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  months: Record<number, MonthDelivery>;
}

const tracks: ProductTrack[] = [
  {
    name: "DMS (Gestor Autoline)",
    shortName: "DMS",
    icon: Database,
    color: "#2B7FFF",
    bgColor: "rgba(43,127,255,0.15)",
    borderColor: "rgba(43,127,255,0.4)",
    months: {
      0: { items: ["Levantamento de requisitos", "Definição de arquitetura", "Setup infraestrutura e CI/CD"], isDiscovery: true },
      1: { items: ["Gestor Lite (fork)", "Controle de acessos básico", "Gestão de estoque"], isVersion: "V1" },
      2: { items: ["CRM e funil comercial", "DRE e controle financeiro"] },
      3: { items: ["Comunicação omnichannel (WhatsApp, chat)", "App do vendedor mobile"] },
      4: { items: ["Integração sistemas Bradesco (originação básica)", "Margem e precificação"] },
      5: { items: ["eConversa (OLX, Facebook, portais)", "Analytics de vendas"] },
      6: { items: ["Originação Bradesco completa (simulação integrada)", "Dashboard executivo"], isVersion: "V2" },
      7: { items: ["Insights IA para lojistas", "Sugestões de precificação inteligente"] },
      8: { items: ["Escalabilidade horizontal", "Alta disponibilidade"] },
      9: { items: ["Copiloto IA do Autoline (assistente para lojista)"] },
      10: { items: ["Disaster recovery", "Backup automatizado"] },
      11: { items: ["Automações inteligentes", "Carteira avançada de relacionamento"] },
      12: { items: ["Plataforma completa com IA", "Automações e fidelização", "Embedded app Bradesco"], isVersion: "V3" },
    },
  },
  {
    name: "Marketplace Autoline",
    shortName: "MKT",
    icon: ShoppingCart,
    color: "#06B6D4",
    bgColor: "rgba(6,182,212,0.15)",
    borderColor: "rgba(6,182,212,0.4)",
    months: {
      0: { items: ["Discovery UX", "Wireframes", "Definição de catálogo e integrações"], isDiscovery: true },
      1: { items: ["Catálogo com filtros (marca, modelo, ano, preço)", "Listagem com fotos", "Busca simples"], isVersion: "V1" },
      2: { items: ["Área logada com favoritos", "Listas de desejo", "Alertas personalizados"] },
      3: { items: ["Busca avançada", "Filtros expandidos", "SEO básico"] },
      4: { items: ["\"Descubra Meu Carro\" (recomendação IA básica)"] },
      5: { items: ["\"Quanto Vale Meu Carro\" (precificação IA)", "Filtro por localidade"] },
      6: { items: ["App nativo iOS/Android", "Push notifications", "Busca inteligente IA completa"], isVersion: "V2" },
      7: { items: ["Conteúdo curado pelo Bradesco", "Selos de qualidade"] },
      8: { items: ["SEO avançado", "Otimização de conversão"] },
      9: { items: ["Simulação financeira IA", "Leads pré-aprovados Bradesco"] },
      10: { items: ["Personalização avançada por perfil de crédito"] },
      11: { items: ["Otimização de performance", "Testes A/B"] },
      12: { items: ["Experiência premium completa", "IA financeira", "Conteúdo curado"], isVersion: "V3" },
    },
  },
  {
    name: "Motor Comercial",
    shortName: "MOTOR",
    icon: Brain,
    color: "#22C55E",
    bgColor: "rgba(34,197,94,0.15)",
    borderColor: "rgba(34,197,94,0.4)",
    months: {
      0: { items: ["Discovery de dados", "Mapeamento de fontes", "Arquitetura da plataforma de dados"], isDiscovery: true },
      1: { items: ["Coleta e integração de dados dos lojistas", "Pipeline de ingestão ativo"] },
      2: { items: ["Antecipação de demanda básica", "Health Score v1 dos lojistas", "Dashboards iniciais"], isVersion: "V1" },
      3: { items: ["Priorização de oportunidades por dados", "Alertas de performance de lojistas"] },
      4: { items: ["Share-of-wallet em tempo real", "Alertas de cross-sell"] },
      5: { items: ["Leads ultra-qualificados com perfil de crédito", "Modelos preditivos v1"] },
      6: { items: ["Dados em tempo real", "Refinamento de modelos", "Integração bidirecional Autoline ↔ GIO"], isVersion: "V2" },
      7: { items: ["Previsão de churn", "Modelos de retenção"] },
      8: { items: ["Inteligência competitiva", "Benchmarks de mercado"] },
      9: { items: ["Visão 360° completa do ecossistema", "Forecast preditivo"] },
      10: { items: ["Refinamento contínuo de modelos", "Acurácia de previsões"] },
      11: { items: ["APIs bidirecionais completas entre todos os produtos"] },
      12: { items: ["Plataforma de inteligência completa", "Decisões estratégicas baseadas em dados"], isVersion: "V3" },
    },
  },
  {
    name: "Copiloto Comercial",
    shortName: "COPILOTO",
    icon: Bot,
    color: "#CC092F",
    bgColor: "rgba(204,9,47,0.15)",
    borderColor: "rgba(204,9,47,0.4)",
    months: {
      0: { items: ["Discovery com GEFINS", "Mapeamento de processos de campo", "Definição de MVP"], isDiscovery: true },
      1: { items: ["Gestão de visitas com GPS + registro", "Carteira de lojistas básica"] },
      2: { items: ["Health Score + semáforo", "Comunicação rápida", "Piloto 20-30 GEFINS"], isVersion: "V1" },
      3: { items: ["Priorização de visitas por IA", "Alertas automáticos de lojistas em risco"] },
      4: { items: ["Integração Teams + Outlook", "Gestão de ganhos", "Painel gerencial básico"] },
      5: { items: ["Rollout 50-100 GEFINS", "Kanban de ações + SLAs"] },
      6: { items: ["Painel gerencial completo (drill-down)", "\"Modo Guerra\"", "Rollout ampliado"], isVersion: "V2" },
      7: { items: ["First IA: transcrição de voz → insights", "Resumo de visita por IA"] },
      8: { items: ["Playbooks inteligentes por IA", "Sugestões \"o que fazer com essa loja?\""] },
      9: { items: ["Gamificação: pontos, badges, ranking", "Metas por squad em tempo real"] },
      10: { items: ["Gestão de projetos estilo Trello", "Campanhas e onboarding de lojistas"] },
      11: { items: ["Power BI integrado", "Comparativos e ranking avançado"] },
      12: { items: ["100% operacional", "Embedded app Bradesco", "Experiência unificada"], isVersion: "V3" },
    },
  },
];

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function SlideRoadmapEntregas() {
  const [activeCell, setActiveCell] = useState<{ track: number; month: number } | null>(null);

  const activeDelivery = activeCell
    ? tracks[activeCell.track].months[activeCell.month]
    : null;
  const activeTrack = activeCell ? tracks[activeCell.track] : null;

  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ padding: "0 clamp(12px, 2vw, 40px)", paddingRight: "clamp(50px, 6vw, 90px)" }}>
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center shrink-0"
        style={{ paddingTop: "clamp(10px, 2vh, 32px)", paddingBottom: "clamp(4px, 1vh, 14px)" }}
      >
        <h2
          className="font-extrabold text-[#EDEDEF] tracking-tight"
          style={{ fontSize: "clamp(20px, 3.5vh, 44px)", lineHeight: "1.1", marginBottom: "clamp(2px, 0.5vh, 8px)" }}
        >
          Roadmap de Entregas — 12 Meses
        </h2>
        <p className="text-[#8A8A8E]" style={{ fontSize: "clamp(10px, 1.3vh, 16px)" }}>
          Valor entregue desde o primeiro mês — passe o mouse para ver as entregas detalhadas
        </p>
      </motion.div>

      {/* Grid principal */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-[1400px] mx-auto" style={{ gap: "clamp(2px, 0.4vh, 8px)" }}>
        {/* Header dos meses */}
        <div className="grid" style={{ gridTemplateColumns: "clamp(80px, 10vw, 140px) repeat(13, 1fr)", gap: "clamp(1px, 0.2vw, 3px)" }}>
          <div /> {/* Espaço do label */}
          {months.map((m) => (
            <div
              key={m}
              className="text-center font-bold text-[#8A8A8E]"
              style={{ fontSize: "clamp(8px, 1vh, 13px)", padding: "clamp(2px, 0.3vh, 6px) 0" }}
            >
              {m === 0 ? "M0" : `M${m}`}
            </div>
          ))}
        </div>

        {/* Trilhas */}
        {tracks.map((track, trackIdx) => {
          const Icon = track.icon;
          return (
            <motion.div
              key={trackIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + trackIdx * 0.08 }}
              className="grid items-stretch"
              style={{ gridTemplateColumns: "clamp(80px, 10vw, 140px) repeat(13, 1fr)", gap: "clamp(1px, 0.2vw, 3px)" }}
            >
              {/* Label do produto */}
              <div
                className="flex items-center gap-1.5 rounded-l-lg"
                style={{
                  padding: "clamp(4px, 0.5vh, 10px) clamp(4px, 0.5vw, 10px)",
                  background: track.bgColor,
                  borderLeft: `3px solid ${track.color}`,
                }}
              >
                <Icon style={{ width: "clamp(12px, 1.4vh, 20px)", height: "clamp(12px, 1.4vh, 20px)", color: track.color, flexShrink: 0 }} />
                <span className="font-bold text-[#EDEDEF] leading-tight" style={{ fontSize: "clamp(7px, 0.9vh, 12px)" }}>
                  {track.shortName}
                </span>
              </div>

              {/* Células dos meses */}
              {months.map((m) => {
                const delivery = track.months[m];
                if (!delivery) {
                  return (
                    <div
                      key={m}
                      className="rounded-sm bg-white/[0.02] border border-white/[0.04]"
                      style={{ minHeight: "clamp(32px, 4.5vh, 64px)" }}
                    />
                  );
                }

                const isActive = activeCell?.track === trackIdx && activeCell?.month === m;
                const isVersion = delivery.isVersion;
                const isDiscovery = delivery.isDiscovery;

                return (
                  <div
                    key={m}
                    className="relative rounded-sm cursor-pointer transition-all duration-200"
                    style={{
                      minHeight: "clamp(32px, 4.5vh, 64px)",
                      background: isActive
                        ? track.bgColor
                        : isVersion
                          ? `${track.bgColor}`
                          : isDiscovery
                            ? "rgba(255,255,255,0.03)"
                            : "rgba(255,255,255,0.02)",
                      border: isActive
                        ? `2px solid ${track.color}`
                        : isVersion
                          ? `1.5px solid ${track.borderColor}`
                          : isDiscovery
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "1px solid rgba(255,255,255,0.04)",
                      boxShadow: isActive ? `0 0 12px ${track.color}40` : "none",
                    }}
                    onMouseEnter={() => setActiveCell({ track: trackIdx, month: m })}
                    onMouseLeave={() => setActiveCell(null)}
                  >
                    <div className="flex flex-col items-center justify-center h-full" style={{ padding: "clamp(1px, 0.2vh, 4px)" }}>
                      {isVersion && (
                        <span
                          className="font-black tracking-wide"
                          style={{
                            fontSize: "clamp(8px, 1.1vh, 14px)",
                            color: track.color,
                          }}
                        >
                          {isVersion}
                        </span>
                      )}
                      {isDiscovery && (
                        <span
                          className="font-bold text-[#8A8A8E] uppercase tracking-wider"
                          style={{ fontSize: "clamp(5px, 0.65vh, 9px)" }}
                        >
                          Disc.
                        </span>
                      )}
                      {!isVersion && !isDiscovery && (
                        <div
                          className="rounded-full"
                          style={{
                            width: "clamp(4px, 0.5vh, 8px)",
                            height: "clamp(4px, 0.5vh, 8px)",
                            background: track.color,
                            opacity: 0.5,
                          }}
                        />
                      )}
                      {/* Mini label */}
                      <span
                        className="text-center text-[#8A8A8E] leading-none mt-0.5 line-clamp-2"
                        style={{ fontSize: "clamp(4px, 0.55vh, 7px)" }}
                      >
                        {delivery.items[0]?.split(" ").slice(0, 3).join(" ")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          );
        })}

        {/* Legenda */}
        <div className="flex items-center justify-center gap-4 mt-1" style={{ fontSize: "clamp(7px, 0.85vh, 11px)" }}>
          <div className="flex items-center gap-1.5">
            <div className="rounded-sm border border-white/[0.08] bg-white/[0.03]" style={{ width: "clamp(10px, 1.2vh, 16px)", height: "clamp(10px, 1.2vh, 16px)" }} />
            <span className="text-[#8A8A8E]">Discovery</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="rounded-sm bg-[#2B7FFF]/15 border border-[#2B7FFF]/40" style={{ width: "clamp(10px, 1.2vh, 16px)", height: "clamp(10px, 1.2vh, 16px)" }} />
            <span className="text-[#8A8A8E]">Marco de Versão (V1/V2/V3)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="rounded-full bg-white/30" style={{ width: "clamp(5px, 0.6vh, 8px)", height: "clamp(5px, 0.6vh, 8px)" }} />
            <span className="text-[#8A8A8E]">Entrega contínua</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ChevronDown style={{ width: "clamp(10px, 1.2vh, 16px)", height: "clamp(10px, 1.2vh, 16px)" }} className="text-[#8A8A8E]" />
            <span className="text-[#8A8A8E]">Hover para detalhes</span>
          </div>
        </div>

        {/* Painel de detalhes (hover) */}
        <AnimatePresence mode="wait">
          {activeDelivery && activeTrack && activeCell ? (
            <motion.div
              key={`${activeCell.track}-${activeCell.month}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              className="rounded-lg backdrop-blur-sm"
              style={{
                padding: "clamp(6px, 1vh, 14px) clamp(10px, 1.5vw, 24px)",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${activeTrack.color}40`,
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <activeTrack.icon style={{ width: "clamp(12px, 1.4vh, 18px)", height: "clamp(12px, 1.4vh, 18px)", color: activeTrack.color }} />
                <span className="font-bold text-[#EDEDEF]" style={{ fontSize: "clamp(10px, 1.2vh, 16px)" }}>
                  {activeTrack.name} — Mês {activeCell.month}
                  {activeDelivery.isVersion && (
                    <span className="ml-2 px-2 py-0.5 rounded font-black" style={{ background: `${activeTrack.color}30`, color: activeTrack.color, fontSize: "clamp(8px, 1vh, 13px)" }}>
                      {activeDelivery.isVersion}
                    </span>
                  )}
                  {activeDelivery.isDiscovery && (
                    <span className="ml-2 px-2 py-0.5 rounded font-bold bg-white/[0.06] text-[#8A8A8E]" style={{ fontSize: "clamp(8px, 1vh, 13px)" }}>
                      DISCOVERY
                    </span>
                  )}
                </span>
              </div>
              <div className="flex flex-wrap" style={{ gap: "clamp(4px, 0.5vw, 10px)" }}>
                {activeDelivery.items.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-white/[0.04] border border-white/[0.08] text-[#C8C8CD] font-medium"
                    style={{ padding: "clamp(2px, 0.3vh, 5px) clamp(6px, 0.8vw, 12px)", fontSize: "clamp(8px, 1vh, 13px)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="text-center"
              style={{ padding: "clamp(6px, 1vh, 14px)", fontSize: "clamp(8px, 1vh, 13px)" }}
            >
              <span className="text-[#555]">Passe o mouse sobre qualquer célula para ver as entregas detalhadas</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SlideFooter />
    </div>
  );
}
