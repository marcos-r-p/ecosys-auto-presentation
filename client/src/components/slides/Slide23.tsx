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
    description: "Gestão completa do ciclo comercial com registro estruturado de todas as interações",
  },
  {
    icon: Bot,
    title: "IA e Automação → Produtividade Multiplicada",
    description: "Tecnologia que libera o consultor para focar em relacionamento de alto valor",
  },
  {
    icon: BarChart3,
    title: "Dados Precisos → Decisões Assertivas",
    description: "Indicadores acionáveis que direcionam estratégia e execução em tempo real",
  },
  {
    icon: Zap,
    title: "Agilidade → Relacionamento Fortalecido",
    description: "Alertas e ações preventivas que reduzem inativação e fortalecem parcerias",
  },
  {
    icon: Search,
    title: "Inteligência de Campo → Estratégias Conjuntas",
    description: "Feedback estruturado do campo que retroalimenta a estratégia comercial",
  },
];

const valueProps = [
  "Saber exatamente onde focar",
  "Antecipar problemas antes que aconteçam",
  "Agir no momento certo com a abordagem certa",
  "Multiplicar resultados com menos esforço",
];

export default function Slide23() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="font-bold" style={{ color: '#2B7FFF' }}>GIO - Copiloto do GEFIN</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">: Transformando a Gestão Comercial</span>
          </h2>
          <p className="text-lg text-white/80 font-medium">
            O elo estratégico entre Bradesco e sua rede de lojistas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-orange-500/30 opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-red-400/30 rounded-2xl p-5 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-400">Desafios Atuais do GEFINS</h3>
              </div>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-base leading-tight">{challenge}</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#2B7FFF]/40 to-green-500/40 opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-[#2B7FFF]/50 rounded-2xl p-5 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2B7FFF] to-green-500 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#2B7FFF' }}>
                  GIO: A Solução Completa
                  <span className="ml-2 text-xs px-2 py-1 rounded-full shadow-lg font-bold" style={{ backgroundColor: '#2B7FFF', color: 'white' }}>NOVO</span>
                </h3>
              </div>
              <p className="text-white/90 text-base leading-relaxed mb-4">
                Hub inteligente que organiza a rotina da força de campo, cria memória institucional do relacionamento e transforma dados em ação através de priorização, alertas e execução inteligente.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-4">Pilares Estratégicos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-white/30 hover:bg-white/10 transition-all group"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-lg">
                    <div className="w-full h-full bg-[#0a1628] rounded-[10px] flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-white text-center mb-2 leading-tight">{pillar.title}</h4>
                <p className="text-xs text-white/70 text-center leading-snug">{pillar.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B7FFF]/30 via-blue-500/30 to-cyan-500/30 opacity-40 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl blur-xl" />
          <div className="relative bg-white/5 backdrop-blur-md border border-[#2B7FFF]/40 rounded-2xl p-5">
            <h3 className="text-2xl font-bold text-center mb-3" style={{ color: '#2B7FFF' }}>Proposta de Valor</h3>
            <p className="text-white/90 text-base text-center leading-relaxed mb-4">
              O <span className="font-bold" style={{ color: '#2B7FFF' }}>GIO</span> transforma a força comercial do Bradesco em uma máquina de relacionamento inteligente, onde cada consultor tem superpoderes para:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-base font-medium leading-tight">{prop}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}