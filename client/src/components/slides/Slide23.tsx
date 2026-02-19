import { motion } from "motion/react";
import { X, Check, Target, Bot, BarChart3, Zap, Search } from "lucide-react";
import SlideFooter from "../SlideFooter";

const challenges = [
  "Gestão Descentralizada - Sem visão consolidada da carteira de parceiros",
  "Memória Institucional Perdida - Histórico de relacionamento disperso entre consultores",
  "Priorização Manual - Dificuldade em identificar quais lojistas necessitam atenção",
  "Ausência de Inteligência Preditiva - Não antecipa riscos de inativação ou churn",
  "Processos Manuais - Tempo desperdiçado em tarefas administrativas",
];

const pillars = [
  {
    icon: Target,
    title: "Controle e Organização → Resultados Tangíveis",
  },
  {
    icon: Bot,
    title: "IA e Automação → Produtividade Multiplicada",
  },
  {
    icon: BarChart3,
    title: "Dados Precisos → Decisões Assertivas",
  },
  {
    icon: Zap,
    title: "Agilidade → Relacionamento Fortalecido",
  },
  {
    icon: Search,
    title: "Inteligência de Campo → Estratégias Conjuntas",
  },
];


export default function Slide23() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            <span className="font-bold" style={{ color: '#2B7FFF' }}>Novo GIO</span>
            <span className="text-[#EDEDEF]">: Copiloto Comercial</span>
          </h2>
          <p className="text-[#8A8A8E] text-lg font-medium" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            O elo estratégico entre Bradesco e sua rede de lojistas transformando a Gestão Comercial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-3">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/[0.04] opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl" />
            <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
                  <X className="w-6 h-6 text-[#EDEDEF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#CC092F]">Desafios Atuais do GEFINS</h3>
              </div>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-[#EDEDEF] flex-shrink-0 mt-0.5" />
                    <span className="text-[#EDEDEF] text-base leading-tight">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/[0.04] from-[#2B7FFF]/40 to-green-500/40 opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl" />
            <div className="relative bg-white/[0.04] border border-[#2B7FFF]/50 rounded-2xl p-5 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] from-[#2B7FFF] to-green-500 flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#EDEDEF]" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#2B7FFF' }}>
                  GIO: A Solução Completa
                  <span className="ml-2 text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>NOVO</span>
                </h3>
              </div>
              <p className="text-[#EDEDEF] text-base leading-relaxed mb-4">
                Hub inteligente que organiza a rotina da força de campo, cria memória institucional do relacionamento e transforma dados em ação através de priorização, alertas e execução inteligente.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-bold text-[#EDEDEF] text-center mb-4">Pilares Estratégicos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 hover:border-white/[0.12] hover:bg-white/[0.06] transition-all group"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-lg">
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[10px] flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-[#EDEDEF]" />
                    </div>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-[#EDEDEF] text-center mb-2 leading-tight">{pillar.title}</h4>

              </div>
            ))}
          </div>
        </motion.div>


      </div>

      <SlideFooter />
    </div>
  );
}