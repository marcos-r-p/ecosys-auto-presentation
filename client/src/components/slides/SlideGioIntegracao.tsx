import { motion } from "motion/react";
import {
  ArrowRight, ArrowDown, ArrowUp,
  TrendingUp, DollarSign, Activity, Star,
  Target, MessageSquare, GraduationCap, Bell,
  Brain, PieChart
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const flowLeft = [
  { icon: TrendingUp, text: "Performance real (vendas, conversão, ticket)" },
  { icon: DollarSign, text: "Volume de financiamentos e produtos" },
  { icon: Activity, text: "Engajamento com o sistema" },
  { icon: Star, text: "Qualidade dos anúncios e estoque" },
];

const flowRight = [
  { icon: Target, text: "Prioridades comerciais e campanhas" },
  { icon: MessageSquare, text: "Feedback de campo (objeções, mercado)" },
  { icon: GraduationCap, text: "Treinamentos e suporte direcionado" },
  { icon: Bell, text: "Novidades e atualizações de produtos" },
];

const flowDown = [
  { icon: Brain, text: "Inteligência consolidada 360° do lojista" },
  { icon: PieChart, text: "Share of wallet e potencial não explorado" },
];

export default function SlideGioIntegracao() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-3 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col flex-1" style={{ gap: 'clamp(8px, 1.2vh, 20px)' }}>
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
            Integração <span style={{ color: '#2B7FFF' }}>GIO</span> com Ecossistema
          </h2>
          <p className="text-[#8A8A8E] font-medium" style={{ fontSize: 'clamp(11px, 1.4vh, 18px)' }}>
            Fluxo bidirecional de dados para máxima inteligência
          </p>
        </motion.div>

        {/* Diagram + Flows */}
        <div className="flex-1 flex flex-col justify-center" style={{ gap: 'clamp(8px, 1.2vh, 20px)' }}>
          {/* Top row: 3 system boxes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center"
            style={{ gap: 'clamp(12px, 2vw, 40px)' }}
          >
            {/* Gestor Autoline */}
            <div
              className="bg-white/[0.06] border border-white/[0.12] rounded-2xl flex flex-col items-center justify-center hover:border-white/30 transition-all"
              style={{ padding: 'clamp(12px, 2vh, 32px) clamp(16px, 2.5vw, 40px)', minWidth: 'clamp(120px, 14vw, 200px)' }}
            >
              <h3 className="font-bold text-[#EDEDEF] text-center" style={{ fontSize: 'clamp(12px, 1.6vh, 22px)' }}>
                GESTOR<br />AUTOLINE
              </h3>
              <p className="text-[#555] text-center" style={{ fontSize: 'clamp(9px, 1vh, 14px)', marginTop: 'clamp(2px, 0.3vh, 6px)' }}>
                (Lojista)
              </p>
            </div>

            {/* Arrows */}
            <div className="flex flex-col items-center" style={{ gap: 'clamp(2px, 0.3vh, 4px)' }}>
              <ArrowRight className="text-[#2B7FFF]" style={{ width: 'clamp(20px, 2.5vh, 36px)', height: 'clamp(20px, 2.5vh, 36px)' }} />
              <ArrowRight className="text-[#555] rotate-180" style={{ width: 'clamp(20px, 2.5vh, 36px)', height: 'clamp(20px, 2.5vh, 36px)' }} />
            </div>

            {/* GIO Copiloto */}
            <div
              className="bg-white/[0.06] border border-[#2B7FFF]/50 rounded-2xl flex flex-col items-center justify-center transition-all"
              style={{ padding: 'clamp(12px, 2vh, 32px) clamp(16px, 2.5vw, 40px)', minWidth: 'clamp(120px, 14vw, 200px)' }}
            >
              <h3 className="font-bold text-center" style={{ fontSize: 'clamp(12px, 1.6vh, 22px)', color: '#2B7FFF' }}>
                GIO COPILOTO<br />GEFIN
              </h3>
              <span
                className="block text-center rounded-full font-bold"
                style={{
                  fontSize: 'clamp(7px, 0.8vh, 11px)',
                  padding: 'clamp(1px, 0.2vh, 3px) clamp(6px, 0.8vh, 12px)',
                  marginTop: 'clamp(3px, 0.4vh, 8px)',
                  backgroundColor: '#2B7FFF',
                  color: 'white',
                }}
              >
                NOVO
              </span>
            </div>

            {/* Arrows */}
            <div className="flex flex-col items-center" style={{ gap: 'clamp(2px, 0.3vh, 4px)' }}>
              <ArrowRight className="text-[#555]" style={{ width: 'clamp(20px, 2.5vh, 36px)', height: 'clamp(20px, 2.5vh, 36px)' }} />
              <ArrowUp className="text-[#555]" style={{ width: 'clamp(20px, 2.5vh, 36px)', height: 'clamp(20px, 2.5vh, 36px)' }} />
            </div>

            {/* Plataforma de Dados */}
            <div
              className="bg-white/[0.06] border border-white/[0.12] rounded-2xl flex flex-col items-center justify-center hover:border-white/30 transition-all"
              style={{ padding: 'clamp(12px, 2vh, 32px) clamp(16px, 2.5vw, 40px)', minWidth: 'clamp(120px, 14vw, 200px)' }}
            >
              <h3 className="font-bold text-[#EDEDEF] text-center" style={{ fontSize: 'clamp(12px, 1.6vh, 22px)' }}>
                PLATAFORMA<br />DE DADOS
              </h3>
              <p className="text-[#555] text-center" style={{ fontSize: 'clamp(9px, 1vh, 14px)', marginTop: 'clamp(2px, 0.3vh, 6px)' }}>
                (Inteligência)
              </p>
            </div>
          </motion.div>

          {/* Flow cards - 3 columns */}
          <div className="grid grid-cols-3" style={{ gap: 'clamp(6px, 0.8vh, 14px)' }}>
            {/* Autoline → GIO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white/[0.04] border border-white/[0.08] rounded-xl hover:border-white/[0.12] transition-all"
              style={{ padding: 'clamp(8px, 1.2vh, 20px)' }}
            >
              <div className="flex items-center mb-2" style={{ gap: 'clamp(4px, 0.5vh, 8px)' }}>
                <ArrowRight className="text-[#EDEDEF]" style={{ width: 'clamp(12px, 1.4vh, 18px)', height: 'clamp(12px, 1.4vh, 18px)' }} />
                <h4 className="font-bold text-[#EDEDEF] leading-tight" style={{ fontSize: 'clamp(10px, 1.3vh, 16px)' }}>
                  Autoline → GIO
                </h4>
              </div>
              <div className="flex flex-col" style={{ gap: 'clamp(3px, 0.5vh, 8px)' }}>
                {flowLeft.map((item, idx) => (
                  <div key={idx} className="flex items-start" style={{ gap: 'clamp(4px, 0.5vh, 8px)' }}>
                    <item.icon
                      className="text-[#555] flex-shrink-0"
                      style={{ width: 'clamp(10px, 1.2vh, 16px)', height: 'clamp(10px, 1.2vh, 16px)', marginTop: '1px' }}
                    />
                    <span className="text-[#8A8A8E] leading-snug" style={{ fontSize: 'clamp(8px, 1.1vh, 14px)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* GIO → Autoline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white/[0.04] border border-[#2B7FFF]/40 rounded-xl hover:border-[#2B7FFF]/60 transition-all"
              style={{ padding: 'clamp(8px, 1.2vh, 20px)' }}
            >
              <div className="flex items-center mb-2" style={{ gap: 'clamp(4px, 0.5vh, 8px)' }}>
                <ArrowRight className="text-[#2B7FFF] rotate-180" style={{ width: 'clamp(12px, 1.4vh, 18px)', height: 'clamp(12px, 1.4vh, 18px)' }} />
                <h4 className="font-bold leading-tight" style={{ fontSize: 'clamp(10px, 1.3vh, 16px)', color: '#2B7FFF' }}>
                  GIO → Autoline
                </h4>
              </div>
              <div className="flex flex-col" style={{ gap: 'clamp(3px, 0.5vh, 8px)' }}>
                {flowRight.map((item, idx) => (
                  <div key={idx} className="flex items-start" style={{ gap: 'clamp(4px, 0.5vh, 8px)' }}>
                    <item.icon
                      className="text-[#555] flex-shrink-0"
                      style={{ width: 'clamp(10px, 1.2vh, 16px)', height: 'clamp(10px, 1.2vh, 16px)', marginTop: '1px' }}
                    />
                    <span className="text-[#8A8A8E] leading-snug" style={{ fontSize: 'clamp(8px, 1.1vh, 14px)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ambos → Plataforma */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white/[0.04] border border-white/[0.08] rounded-xl hover:border-white/[0.12] transition-all"
              style={{ padding: 'clamp(8px, 1.2vh, 20px)' }}
            >
              <div className="flex items-center mb-2" style={{ gap: 'clamp(4px, 0.5vh, 8px)' }}>
                <ArrowDown className="text-[#EDEDEF]" style={{ width: 'clamp(12px, 1.4vh, 18px)', height: 'clamp(12px, 1.4vh, 18px)' }} />
                <h4 className="font-bold text-[#EDEDEF] leading-tight" style={{ fontSize: 'clamp(10px, 1.3vh, 16px)' }}>
                  Ambos → Plataforma de Dados
                </h4>
              </div>
              <div className="flex flex-col" style={{ gap: 'clamp(3px, 0.5vh, 8px)' }}>
                {flowDown.map((item, idx) => (
                  <div key={idx} className="flex items-start" style={{ gap: 'clamp(4px, 0.5vh, 8px)' }}>
                    <item.icon
                      className="text-[#555] flex-shrink-0"
                      style={{ width: 'clamp(10px, 1.2vh, 16px)', height: 'clamp(10px, 1.2vh, 16px)', marginTop: '1px' }}
                    />
                    <span className="text-[#8A8A8E] leading-snug" style={{ fontSize: 'clamp(8px, 1.1vh, 14px)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              {/* Cycle note */}
              <div
                className="bg-white/[0.04] border border-white/[0.06] rounded-lg text-center"
                style={{ padding: 'clamp(4px, 0.5vh, 8px)', marginTop: 'clamp(6px, 0.8vh, 12px)' }}
              >
                <span className="text-[#555] font-medium" style={{ fontSize: 'clamp(7px, 0.9vh, 12px)' }}>
                  Ciclo virtuoso: dados do campo retroalimentam a estratégia
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
