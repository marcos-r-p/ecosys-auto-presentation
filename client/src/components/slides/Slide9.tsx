import { motion } from "motion/react";
import {
  Database,
  Brain,
  Building2,
  Package,
  Users,
  DollarSign,
  MessageSquare,
  Smartphone,
  Target,
  Activity,
  Bell,
  TrendingUp,
  Lightbulb,
  CreditCard,
  PieChart,
  Zap,
  BarChart3,
  Link2,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const block1Items = [
  { icon: Package, text: "Gestão de estoque e vendas" },
  { icon: Users, text: "CRM e funil comercial" },
  { icon: DollarSign, text: "Controle financeiro e DRE" },
  { icon: MessageSquare, text: "Comunicação omnichannel" },
  { icon: Smartphone, text: "App do vendedor mobile" },
];

const block2Items = [
  { icon: Target, text: "Priorização de oportunidades" },
  { icon: Activity, text: "Health Score de lojistas" },
  { icon: Bell, text: "Alertas de performance" },
  { icon: TrendingUp, text: "Margem e precificação" },
  { icon: Lightbulb, text: "Insights para GEFINS" },
];

const block3Items = [
  { icon: CreditCard, text: "Originação de crédito e seguros" },
  { icon: PieChart, text: "Share-of-wallet em tempo real" },
  { icon: Zap, text: "Alertas de cross-sell" },
  { icon: BarChart3, text: "Dashboard executivo" },
  { icon: Link2, text: "Integração sistemas Bradesco" },
];

export default function Slide9() {
  return (
    <div className="flex flex-col h-full px-6 sm:px-10 md:px-14 lg:px-20 pt-4 pb-1 overflow-hidden">
      {/* Content wrapper — centralizado verticalmente */}
      <div className="flex-1 flex flex-col justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center mb-4"
      >
        <h2
          className="font-black tracking-tight text-[#EDEDEF] leading-none"
          style={{ fontSize: "clamp(30px, 5vh, 60px)" }}
        >
          Gestor Autoline:{" "}
          <span className="text-[#2B7FFF]">Plataforma Estratégica</span>
        </h2>
        <p
          className="text-[#8A8A8E] font-medium mt-2"
          style={{ fontSize: "clamp(13px, 1.6vh, 20px)" }}
        >
          Sistema central que conecta operação da revenda, força comercial Bradesco e originação financeira
        </p>
      </motion.div>

      {/* Three Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5" style={{ flex: "0 1 auto" }}>
        {/* BLOCO 1 — Base Operacional */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl px-5 md:px-6 py-4"
          style={{
            background: "rgba(43,127,255,0.06)",
            border: "1px solid rgba(43,127,255,0.18)",
          }}
        >
          {/* Header do bloco */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(43,127,255,0.25), rgba(43,127,255,0.08))",
                border: "1.5px solid rgba(43,127,255,0.4)",
              }}
            >
              <Database className="w-6 h-6 md:w-7 md:h-7 text-[#2B7FFF]" />
            </div>
            <div>
              <h3
                className="font-extrabold text-[#EDEDEF] leading-tight"
                style={{ fontSize: "clamp(20px, 3vh, 34px)" }}
              >
                Base Operacional
              </h3>
              <span
                className="font-bold uppercase tracking-[0.15em] text-[#2B7FFF]"
                style={{ fontSize: "clamp(9px, 1.1vh, 13px)" }}
              >
                ECOSYS CORE
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full mb-3"
            style={{ background: "linear-gradient(to right, rgba(43,127,255,0.45), transparent)" }}
          />

          {/* Items */}
          <ul className="flex flex-col gap-2">
            {block1Items.map((item, j) => (
              <li key={j} className="flex items-center gap-2.5">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[#2B7FFF] opacity-70 flex-shrink-0" />
                <span
                  className="text-[#C8C8CD] font-medium leading-snug"
                  style={{ fontSize: "clamp(13px, 1.7vh, 20px)" }}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* BLOCO 2 — Inteligência IA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl px-5 md:px-6 py-4"
          style={{
            background: "rgba(139,92,246,0.06)",
            border: "1px solid rgba(139,92,246,0.18)",
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(139,92,246,0.08))",
                border: "1.5px solid rgba(139,92,246,0.4)",
              }}
            >
              <Brain className="w-6 h-6 md:w-7 md:h-7 text-[#8B5CF6]" />
            </div>
            <div>
              <h3
                className="font-extrabold text-[#EDEDEF] leading-tight"
                style={{ fontSize: "clamp(20px, 3vh, 34px)" }}
              >
                Inteligência IA
              </h3>
              <span
                className="font-bold uppercase tracking-[0.15em] text-[#8B5CF6]"
                style={{ fontSize: "clamp(9px, 1.1vh, 13px)" }}
              >
                COPILOTO
              </span>
            </div>
          </div>

          <div
            className="h-px w-full mb-3"
            style={{ background: "linear-gradient(to right, rgba(139,92,246,0.45), transparent)" }}
          />

          <ul className="flex flex-col gap-2">
            {block2Items.map((item, j) => (
              <li key={j} className="flex items-center gap-2.5">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[#8B5CF6] opacity-70 flex-shrink-0" />
                <span
                  className="text-[#C8C8CD] font-medium leading-snug"
                  style={{ fontSize: "clamp(13px, 1.7vh, 20px)" }}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* BLOCO 3 — Exclusivo Bradesco (DESTAQUE FORTE) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-2xl px-5 md:px-6 py-4 relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, rgba(204,9,47,0.12), rgba(204,9,47,0.04))",
            border: "2px solid rgba(204,9,47,0.45)",
            boxShadow: "0 0 50px rgba(204,9,47,0.1), 0 4px 20px rgba(204,9,47,0.06)",
          }}
        >
          {/* Badge */}
          <div
            className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl font-black uppercase tracking-wider text-white"
            style={{
              fontSize: "clamp(9px, 1vh, 12px)",
              background: "linear-gradient(135deg, #CC092F, #E01040)",
              letterSpacing: "0.12em",
            }}
          >
            Diferencial
          </div>

          {/* Glow */}
          <div
            className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-25 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(204,9,47,0.35), transparent 70%)",
            }}
          />

          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(204,9,47,0.3), rgba(204,9,47,0.12))",
                border: "1.5px solid rgba(204,9,47,0.5)",
              }}
            >
              <Building2 className="w-6 h-6 md:w-7 md:h-7 text-[#CC092F]" />
            </div>
            <div>
              <h3
                className="font-extrabold text-white leading-tight"
                style={{ fontSize: "clamp(20px, 3vh, 34px)" }}
              >
                Exclusivo Bradesco
              </h3>
              <span
                className="font-bold uppercase tracking-[0.15em] text-[#CC092F]"
                style={{ fontSize: "clamp(9px, 1.1vh, 13px)" }}
              >
                DIFERENCIAL COMPETITIVO
              </span>
            </div>
          </div>

          <div
            className="h-px w-full mb-3 relative z-10"
            style={{ background: "linear-gradient(to right, rgba(204,9,47,0.55), transparent)" }}
          />

          <ul className="flex flex-col gap-2 relative z-10">
            {block3Items.map((item, j) => (
              <li key={j} className="flex items-center gap-2.5">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[#CC092F] flex-shrink-0" />
                <span
                  className="text-[#E0E0E4] font-semibold leading-snug"
                  style={{ fontSize: "clamp(13px, 1.7vh, 20px)" }}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Footer strategic message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-4 text-center"
      >
        <p
          className="text-[#8A8A8E] font-medium"
          style={{ fontSize: "clamp(12px, 1.4vh, 17px)" }}
        >
          O Gestor Autoline torna-se a{" "}
          <span className="text-[#EDEDEF] font-bold">
            infraestrutura digital da distribuição Bradesco
          </span>{" "}
          no mercado de seminovos.
        </p>
      </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
