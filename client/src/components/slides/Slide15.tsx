import { motion } from "motion/react";
import { Car, Bot, User, FileText, Smartphone, RefreshCw } from "lucide-react";
import SlideFooter from "../SlideFooter";

const topRow = [
  {
    id: "catalogo",
    title: "Catálogo de Veículos",
    icon: Car,
    color: "#2B7FFF",
    bullets: [
      "Estoque integrado em tempo real",
      "Alta disponibilidade e confiabilidade",
      "Descoberta facilitada",
    ],
  },
  {
    id: "ia",
    title: "IA no Marketplace",
    icon: Bot,
    color: "#8B5CF6",
    bullets: [
      "Recomendações personalizadas",
      "Leads qualificados com crédito pré-aprovado",
      "Jornada orientada por dados",
    ],
  },
  {
    id: "area-logada",
    title: "Área Logada",
    icon: User,
    color: "#06B6D4",
    bullets: [
      "Favoritos e listas de interesse",
      "Alertas e notificações customizadas",
      "Engajamento contínuo",
    ],
  },
];

const bottomRow = [
  {
    id: "conteudo",
    title: "Plataforma de Conteúdo",
    icon: FileText,
    color: "#22C55E",
    bullets: [
      "Conteúdo curado e informativo",
      "Transparência e confiança",
      "Estratégia SEO para aquisição orgânica",
    ],
  },
  {
    id: "app",
    title: "App Mobile",
    icon: Smartphone,
    color: "#F59E0B",
    bullets: [
      "Experiência nativa iOS e Android",
      "Acesso permanente ao marketplace",
      "Jornada completa na palma da mão",
    ],
  },
  {
    id: "ciclo",
    title: "Ciclo Virtuoso de Demanda",
    icon: RefreshCw,
    color: "#2B7FFF",
    highlight: true,
    bullets: [
      "Consumidores atraídos continuamente",
      "Leads distribuídos às revendas",
      "Conversão ampliada para produtos financeiros",
    ],
  },
];

interface CardProps {
  item: typeof topRow[0] & { highlight?: boolean };
  delay: number;
}

function FeatureCard({ item, delay }: CardProps) {
  const isHighlight = (item as any).highlight;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div
        className="relative rounded-xl h-full transition-all duration-300"
        style={{
          padding: "clamp(16px, 2.2vh, 30px) clamp(18px, 2vw, 30px)",
          background: isHighlight
            ? "linear-gradient(135deg, rgba(43,127,255,0.1) 0%, rgba(43,127,255,0.04) 100%)"
            : "rgba(255,255,255,0.03)",
          border: isHighlight
            ? "1.5px solid rgba(43,127,255,0.35)"
            : "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
          boxShadow: isHighlight
            ? "0 0 30px rgba(43,127,255,0.08), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              width: "clamp(40px, 5vh, 56px)",
              height: "clamp(40px, 5vh, 56px)",
              background: `rgba(${hexToRgb(item.color)}, 0.12)`,
              border: `1px solid rgba(${hexToRgb(item.color)}, 0.25)`,
            }}
          >
            <item.icon
              style={{
                width: "clamp(20px, 2.6vh, 32px)",
                height: "clamp(20px, 2.6vh, 32px)",
              }}
              className="flex-shrink-0"
              color={item.color}
            />
          </div>
          <h3
            className="font-bold text-[#EDEDEF]"
            style={{ fontSize: "clamp(16px, 2.2vh, 26px)", lineHeight: "1.2" }}
          >
            {item.title}
          </h3>
        </div>

        {/* Bullets */}
        <div className="flex flex-col" style={{ gap: "clamp(4px, 0.6vh, 8px)" }}>
          {item.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-2">
              <div
                className="rounded-full flex-shrink-0 mt-1"
                style={{
                  width: "clamp(5px, 0.7vh, 8px)",
                  height: "clamp(5px, 0.7vh, 8px)",
                  background: item.color,
                  opacity: 0.6,
                }}
              />
              <span
                className="text-[#B0B0B4]"
                style={{ fontSize: "clamp(13px, 1.6vh, 19px)", lineHeight: "1.4" }}
              >
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function Slide15() {
  return (
    <div className="flex flex-col h-full overflow-hidden justify-center" style={{ padding: "clamp(8px, 1vh, 14px) clamp(14px, 2vw, 40px)" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex-shrink-0"
        style={{ marginBottom: "clamp(14px, 2vh, 28px)" }}
      >
        <p
          className="uppercase tracking-[0.2em] text-[#2B7FFF] font-semibold"
          style={{ fontSize: "clamp(9px, 1.1vh, 13px)", marginBottom: "clamp(3px, 0.5vh, 8px)" }}
        >
          Canal B2C de Distribuição Digital
        </p>
        <h2
          className="font-extrabold tracking-tight text-[#EDEDEF]"
          style={{ fontSize: "clamp(28px, 4.5vh, 54px)", lineHeight: "1.1", marginBottom: "clamp(4px, 0.8vh, 10px)" }}
        >
          Autoline: Canal B2C de{" "}
          <span className="text-[#2B7FFF]">Aquisição e Geração de Demanda</span>
        </h2>
        <p
          className="text-[#8A8A8E] max-w-4xl mx-auto"
          style={{ fontSize: "clamp(12px, 1.5vh, 18px)", lineHeight: "1.5" }}
        >
          O marketplace conecta milhões de consumidores às revendas, iniciando a jornada de compra e financiamento.
        </p>
      </motion.div>

      {/* Section Label - Top Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex-shrink-0"
        style={{ marginBottom: "clamp(6px, 0.8vh, 12px)" }}
      >
        <p
          className="uppercase tracking-[0.15em] text-[#6B6B70] font-semibold"
          style={{ fontSize: "clamp(8px, 0.9vh, 11px)" }}
        >
          Experiência do Consumidor
        </p>
      </motion.div>

      {/* Top Row - 3 cards */}
      <div
        className="grid grid-cols-3 flex-shrink-0"
        style={{ gap: "clamp(8px, 1vw, 16px)", marginBottom: "clamp(8px, 1.2vh, 16px)" }}
      >
        {topRow.map((item, index) => (
          <FeatureCard key={item.id} item={item} delay={0.3 + index * 0.1} />
        ))}
      </div>

      {/* Section Label - Bottom Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="flex-shrink-0"
        style={{ marginBottom: "clamp(6px, 0.8vh, 12px)" }}
      >
        <p
          className="uppercase tracking-[0.15em] text-[#6B6B70] font-semibold"
          style={{ fontSize: "clamp(8px, 0.9vh, 11px)" }}
        >
          Infraestrutura e Distribuição
        </p>
      </motion.div>

      {/* Bottom Row - 3 cards */}
      <div
        className="grid grid-cols-3 flex-shrink-0"
        style={{ gap: "clamp(8px, 1vw, 16px)", marginBottom: "clamp(8px, 1.2vh, 16px)" }}
      >
        {bottomRow.map((item, index) => (
          <FeatureCard key={item.id} item={item} delay={0.7 + index * 0.1} />
        ))}
      </div>

      {/* Callout Final */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="flex-shrink-0"
      >
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            padding: "clamp(10px, 1.5vh, 20px) clamp(16px, 2vw, 32px)",
            background: "linear-gradient(135deg, rgba(43,127,255,0.08) 0%, rgba(139,92,246,0.06) 100%)",
            border: "1.5px solid rgba(43,127,255,0.25)",
            boxShadow: "0 0 30px rgba(43,127,255,0.06)",
          }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #2B7FFF, transparent)" }} />
          <p
            className="text-center text-[#C5C5C7] relative"
            style={{ fontSize: "clamp(13px, 1.7vh, 20px)", lineHeight: "1.5" }}
          >
            O marketplace cria um fluxo contínuo de consumidores e{" "}
            <strong className="text-[#2B7FFF]">leads qualificados</strong>, alimentando a{" "}
            <strong className="text-[#8B5CF6]">originação de crédito</strong>.
          </p>
        </div>
      </motion.div>

      <SlideFooter />
    </div>
  );
}
