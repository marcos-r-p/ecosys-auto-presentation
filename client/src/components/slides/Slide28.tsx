import { motion } from "motion/react";
import { Bot, Mic, BarChart3, Award, Trello } from "lucide-react";
import SlideFooter from "../SlideFooter";

const firstAIFeatures = [
  {
    icon: Mic,
    title: "Voz → Insights",
    items: [
      "Resumo automático de visita (transcrição + análise + tarefas)",
      "Sugestão do que registrar (evita campos vazios)",
      "Perguntas respondidas: \"O que fazer com essa loja?\" / \"Qual minha prioridade hoje?\"",
    ],
  },
];

const managerialFeatures = [
  "Drill-down: Região → Consultor → Loja → Segmento",
  "Funil comercial + metas + forecast + alertas",
  "\"Modo Guerra\": Lista diária de atenção imediata",
  "Comparativos e ranking",
];

const gamificationPoints = [
  { action: "Execução no prazo", points: "+10 pts" },
  { action: "Qualidade de registro", points: "+5 pts" },
  { action: "Reativação de inativo", points: "+50 pts" },
  { action: "Crescimento acima meta", points: "+100 pts" },
];

const projectTypes = [
  "Campanhas comerciais (planejamento → execução → resultados)",
  "Iniciativas regionais (lançamentos, eventos)",
  "Onboarding de novos lojistas (checklist estruturado)",
  "Boards customizáveis por equipe/objetivo",
];

export default function Slide28() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Bot className="w-14 h-14 text-[#2B7FFF]" />
            <h2 className="text-5xl font-bold text-[#2B7FFF]">
              Novo GIO
            </h2>
          </div>
          <h3 className="text-3xl font-bold text-[#EDEDEF] mb-2">
            Assistente Inteligente e Gamificação
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          {/* First IA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/[0.04] from-[#2B7FFF]/20 to-blue-600/20 border border-white/[0.12] rounded-xl p-5 h-full shadow-[#2B7FFF]/20">
              <h4 className="text-2xl font-bold text-[#2B7FFF] mb-4 flex items-center gap-2">
                <Mic className="w-7 h-7" />
                First IA - Assistente Inteligente
              </h4>
              
              <div className="space-y-3">
                {firstAIFeatures.map((feature, idx) => (
                  <div key={idx}>
                    <h5 className="text-lg font-bold text-[#EDEDEF] mb-2 flex items-center gap-2">
                      <feature.icon className="w-6 h-6 text-[#2B7FFF]" />
                      {feature.title}
                    </h5>
                    <ul className="space-y-1.5">
                      {feature.items.map((item, i) => (
                        <li key={i} className="text-base text-[#8A8A8E] flex items-start gap-2">
                          <span className="text-[#2B7FFF] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Managerial Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 h-full">
              <h4 className="text-2xl font-bold text-[#8A8A8E] mb-4 flex items-center gap-2">
                <BarChart3 className="w-7 h-7" />
                Painel Gerencial
              </h4>
              
              <h5 className="text-lg font-bold text-[#EDEDEF] mb-3">Visão Executiva:</h5>
              <ul className="space-y-2">
                {managerialFeatures.map((feature, idx) => (
                  <li key={idx} className="text-base text-[#8A8A8E] flex items-start gap-2">
                    <span className="text-[#8A8A8E] mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Gamification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
              <h4 className="text-2xl font-bold text-[#8A8A8E] mb-4 flex items-center gap-2">
                <Award className="w-7 h-7" />
                Gestão de Times e Gamificação
              </h4>
              
              <h5 className="text-lg font-bold text-[#EDEDEF] mb-3">🎯 Execução + Motivação:</h5>
              <div className="space-y-2 mb-4">
                <p className="text-base text-[#8A8A8E]">• Kanban de ações (time + individual) + SLAs</p>
                <p className="text-base text-[#8A8A8E]">• Metas por squad em tempo real</p>
                <p className="text-base text-[#8A8A8E] font-bold">• Gamificação: pontos, badges, ranking</p>
              </div>

              <div className="bg-[#0A0A0B]/60 border border-white/[0.08] rounded-lg p-3">
                <div className="grid grid-cols-2 gap-2">
                  {gamificationPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white/[0.04] rounded px-2 py-1">
                      <span className="text-sm text-[#8A8A8E]">{point.action}</span>
                      <span className="text-sm font-bold text-[#8A8A8E]">{point.points}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
              <h4 className="text-2xl font-bold text-[#2B7FFF] mb-4 flex items-center gap-2">
                <Trello className="w-7 h-7" />
                Gestão de Projetos
              </h4>
              
              <h5 className="text-lg font-bold text-[#EDEDEF] mb-3">📋 Projetos Estruturados (Estilo Trello):</h5>
              <ul className="space-y-2">
                {projectTypes.map((type, idx) => (
                  <li key={idx} className="text-base text-[#8A8A8E] flex items-start gap-2">
                    <span className="text-[#2B7FFF] mt-1">•</span>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}