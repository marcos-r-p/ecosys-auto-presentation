import { motion } from "motion/react";
import { Database, Brain, Building2 } from "lucide-react";
import SlideFooter from "../SlideFooter";

const blocks = [
  {
    icon: Database,
    title: "Base Operacional",
    subtitle: "ECOSYS CORE",
    color: "#2B7FFF",
    bg: "rgba(43,127,255,0.06)",
    borderColor: "rgba(43,127,255,0.18)",
    items: [
      "Gestão de estoque e vendas",
      "CRM e funil comercial",
      "Controle financeiro e DRE",
      "Comunicação omnichannel",
      "App do vendedor mobile",
    ],
  },
  {
    icon: Brain,
    title: "Inteligência IA",
    subtitle: "COPILOTO",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
    borderColor: "rgba(139,92,246,0.18)",
    items: [
      "Priorização de oportunidades",
      "Health Score de lojistas",
      "Alertas de performance",
      "Margem e precificação",
      "Insights para GEFINS",
    ],
  },
  {
    icon: Building2,
    title: "Exclusivo Bradesco",
    subtitle: "DIFERENCIAL",
    color: "#CC092F",
    bg: "rgba(204,9,47,0.06)",
    borderColor: "rgba(204,9,47,0.18)",
    items: [
      "Originação de crédito e seguros",
      "Share-of-wallet em tempo real",
      "Alertas de cross-sell",
      "Dashboard executivo",
      "Integração sistemas Bradesco",
    ],
  },
];

export default function Slide9() {
  return (
    <div className="flex flex-col h-full px-6 sm:px-10 md:px-14 lg:px-20 pt-4 sm:pt-5 pb-2 overflow-hidden">
      {/* Header — dominante */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-center mb-4 md:mb-5"
      >
        <h2
          className="font-black tracking-tight text-[#EDEDEF] leading-[1.05]"
          style={{ fontSize: "clamp(26px, 4.2vh, 54px)" }}
        >
          Gestor Autoline
        </h2>
        <p
          className="text-[#8A8A8E] font-medium mt-1 max-w-3xl mx-auto"
          style={{ fontSize: "clamp(13px, 1.6vh, 20px)" }}
        >
          Plataforma que conecta revenda, força comercial e originação financeira
        </p>
      </motion.div>

      {/* Three Blocks — preenchidos */}
      <div className="flex-1 grid grid-cols-3 gap-3 md:gap-4 min-h-0">
        {blocks.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
            className="flex"
          >
            <div
              className="flex flex-col w-full rounded-2xl p-5 md:p-6"
              style={{
                background: block.bg,
                border: `1px solid ${block.borderColor}`,
              }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-1">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${block.color}25, ${block.color}10)`,
                    border: `1.5px solid ${block.color}40`,
                  }}
                >
                  <block.icon
                    className="w-6 h-6 md:w-7 md:h-7"
                    style={{ color: block.color }}
                  />
                </div>
                <div>
                  <h3
                    className="font-extrabold text-[#EDEDEF] leading-tight"
                    style={{ fontSize: "clamp(16px, 2.2vh, 26px)" }}
                  >
                    {block.title}
                  </h3>
                  <span
                    className="font-bold uppercase tracking-[0.15em]"
                    style={{
                      fontSize: "clamp(9px, 1vh, 12px)",
                      color: block.color,
                    }}
                  >
                    {block.subtitle}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full my-3"
                style={{
                  background: `linear-gradient(to right, ${block.color}50, ${block.color}10)`,
                }}
              />

              {/* Items — texto grande, sem ícones pequenos */}
              <ul className="flex flex-col gap-2.5 md:gap-3 flex-1">
                {block.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.3 + i * 0.12 + j * 0.05,
                    }}
                    className="flex items-center gap-2.5"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: block.color, opacity: 0.7 }}
                    />
                    <span
                      className="text-[#C8C8CD] font-medium leading-snug"
                      style={{ fontSize: "clamp(13px, 1.6vh, 18px)" }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer message — compacto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="mt-3 md:mt-4"
      >
        <p
          className="text-center text-[#6A6A6E] italic"
          style={{ fontSize: "clamp(11px, 1.2vh, 15px)" }}
        >
          Infraestrutura digital da distribuição Bradesco no mercado de
          seminovos
        </p>
      </motion.div>

      <SlideFooter />
    </div>
  );
}
