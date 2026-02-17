import { motion } from "motion/react";
import { Bot, ShoppingCart, Database, Sparkles, Search, Bell, Smartphone, Brain, BarChart3, Wifi, Zap, MessageSquare, Map, TrendingUp, Trophy, Rocket, CheckCircle2 } from "lucide-react";
import SlideFooter from "../SlideFooter";

const marketplacePhases = [
  {
    version: "V1 - MVP",
    subtitle: "Essencial",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Search, title: "Catálogo Básico", features: ["Filtros básicos (marca, modelo, ano, preço)", "Busca simples", "Listagem com fotos"] },
      { icon: Bell, title: "Área Logada", features: ["Favoritos e listas", "Alertas personalizados", "Histórico buscas"] },
    ]
  },
  {
    version: "V2 - AVANÇADO",
    subtitle: "Inteligência",
    color: "from-blue-600/20 to-purple-600/20",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Search, title: "Catálogo Expandido", features: ["Filtros avançados (combustível, transmissão, cor, km)", "Busca inteligente IA", "Filtro localidade"] },
      { icon: Brain, title: "IA Básica", features: ['"Descubra Meu Carro"', '"Quanto Vale Meu Carro"'] },
      { icon: Smartphone, title: "App Marketplace", features: ["Nativo iOS/Android", "Jornada mobile", "Push notifications", "Offline limitado"] },
    ]
  },
  {
    version: "V3 - PREMIUM",
    subtitle: "Experiência",
    color: "from-purple-600/20 to-pink-600/20",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Sparkles, title: "Plataforma Conteúdo", features: ["Selos de qualidade", "Conteúdo curado Bradesco", "Gestão de conteúdo", "SEO avançado"] },
      { icon: Brain, title: "IA Avançada", features: ["Simulação financeira integrada", "Leads com crédito pré-aprovado", "Recomendações comportamentais"] },
    ]
  }
];

const dmsPhases = [
  {
    version: "V1 - MVP",
    subtitle: "Lançamento",
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Database, title: "Gestão Autoline", features: ["Fork Gestor Lite", "Versão simplificada", "Controle de acessos"] },
      { icon: Smartphone, title: "App do Vendedor", features: ["Ferramenta móvel essencial", "Equipe de vendas"] },
    ]
  },
  {
    version: "V2 - EXPANSÃO",
    subtitle: "Integração",
    color: "from-green-600/20 to-teal-600/20",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: MessageSquare, title: "Comunicação Unificada", features: ["eConversa multi-canal (OLX, Facebook, Instagram, Telegram)", "Integradores Portais", "Integradores Redes Sociais", "Publicação automática"] },
      { icon: Wifi, title: "Integrações", features: ["API de Integração", "Conectar sistemas parceiros"] },
      { icon: Zap, title: "Originação Bradesco", features: ["Integração financeira direta"] },
      { icon: BarChart3, title: "Analytics", features: ["Relatórios Avançados", "Dashboard Avançado", "Performance detalhada"] },
    ]
  },
  {
    version: "V3 - IA",
    subtitle: "Automação",
    color: "from-teal-600/20 to-cyan-600/20",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Bot, title: "Copiloto Autoline", features: ["IA assistente geral", "Auxilia em todas etapas", "Vendas, estoque, atendimento, pós-venda", "Sugestões inteligentes"] },
      { icon: TrendingUp, title: "Gestão Avançada", features: ["Carteira de Clientes", "Relacionamento e fidelização"] },
    ]
  }
];

const gioPhases = [
  {
    version: "V1 - CORE",
    subtitle: "Gestão",
    color: "from-[#2B7FFF]/20 to-blue-600/20",
    borderColor: "border-[#2B7FFF]/40",
    items: [
      { icon: Map, title: "Gestão de Visitas", features: ["Planejamento", "Check-in/out GPS", "Registro estruturado", "Histórico completo"] },
      { icon: Database, title: "Carteira 360°", features: ["Cadastro completo", "Memória relacionamento", "Performance real", "Health Score v1"] },
      { icon: Sparkles, title: "Priorização", features: ["Direcionamento HQ", "Alertas automáticos", "Próximas ações"] },
      { icon: Zap, title: "Gestão Ganhos", features: ["Comissões", "Transparência"] },
      { icon: MessageSquare, title: "Comunicação", features: ['"Buzina"', "Teams integrado", "Chat contextual"] },
    ]
  },
  {
    version: "V2 - IA",
    subtitle: "Inteligência",
    color: "from-blue-600/20 to-indigo-600/20",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Map, title: "Geolocalização", features: ["Roteirização inteligente", "Mapa de calor", "Sugestão próxima visita", "Modo offline"] },
      { icon: Brain, title: "IA Preditiva", features: ["Plano de semana sugerido", "First IA - Assistente", "Health Score v2 refinado", "Previsão churn"] },
      { icon: Wifi, title: "Microsoft Ecosystem", features: ["Teams integrado", "Outlook sincronizado", "Power BI dashboards", "Azure AD SSO"] },
      { icon: Trophy, title: "Gamificação", features: ["Pontos e badges", "Ranking", "Metas squad"] },
    ]
  },
  {
    version: "V3 - EVOLUÇÃO",
    subtitle: "Contínua",
    color: "from-indigo-600/20 to-purple-600/20",
    borderColor: "border-white/[0.08]",
    items: [
      { icon: Sparkles, title: "First IA Avançada", features: ["Transcrição voz", "Resumo automático", "Playbooks inteligentes", "Timing de venda"] },
      { icon: BarChart3, title: "Analytics Avançado", features: ["Previsão de churn refinada", "Drill-down completo", "Inteligência competitiva"] },
      { icon: Trophy, title: "Gamificação Evolução", features: ["Ranking dinâmico", "Desafios", "Conquistas", "Incentivos"] },
      { icon: Database, title: "Projetos Avançados", features: ["Templates customizáveis", "Automações complexas", "Métricas OKR"] },
    ]
  }
];

const timeline = [
  { product: "MARKETPLACE", v1: "Mês 5", v2: "Mês 9", v3: "Mês 12", color: "bg-white/[0.06]" },
  { product: "Gestor Autoline", v1: "Mês 5", v2: "Mês 9", v3: "Mês 12", color: "bg-white/[0.06]" },
  { product: "Novo GIO", v1: "Mês 1-2", v2: "Mês 3-4", v3: "Mês 5-6", color: "bg-[#2B7FFF]", special: "Evolução Contínua" },
];

export default function Slide31() {
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
          <h2 className="text-4xl font-bold bg-white/[0.04] bg-clip-text text-transparent mb-2">
            Roadmap de Lançamento por Fases
          </h2>
          <p className="text-lg text-[#8A8A8E]">
            Evolução estratégica e validada: <span className="text-[#2B7FFF] font-semibold">Marketplace Autoline</span> + <span className="text-[#8A8A8E] font-semibold">Gestor Autoline</span> + <span className="text-[#2B7FFF] font-bold">Novo GIO</span>
          </p>
        </motion.div>

        {/* MARKETPLACE AUTOLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <ShoppingCart className="w-7 h-7 text-[#2B7FFF]" />
            <h3 className="text-2xl font-bold text-[#2B7FFF]">MARKETPLACE AUTOLINE</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {marketplacePhases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className={`bg-white/[0.06] border ${phase.borderColor} rounded-xl p-4`}
              >
                <div className="mb-3">
                  <h4 className="text-lg font-bold text-[#EDEDEF]">{phase.version}</h4>
                  <p className="text-sm text-[#8A8A8E]">{phase.subtitle}</p>
                </div>
                <div className="space-y-3">
                  {phase.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-4 h-4 text-[#8A8A8E]" />
                        <h5 className="text-sm font-bold text-[#EDEDEF]">{item.title}</h5>
                      </div>
                      <ul className="space-y-0.5 ml-6">
                        {item.features.map((feature, j) => (
                          <li key={j} className="text-xs text-[#8A8A8E] flex items-start gap-1">
                            <span className="text-[#2B7FFF] mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GESTOR AUTOLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-7 h-7 text-[#EDEDEF]" />
            <h3 className="text-2xl font-bold text-[#8A8A8E]">GESTOR AUTOLINE</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dmsPhases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                className={`bg-white/[0.06] border ${phase.borderColor} rounded-xl p-4`}
              >
                <div className="mb-3">
                  <h4 className="text-lg font-bold text-[#EDEDEF]">{phase.version}</h4>
                  <p className="text-sm text-[#8A8A8E]">{phase.subtitle}</p>
                </div>
                <div className="space-y-3">
                  {phase.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-4 h-4 text-[#8A8A8E]" />
                        <h5 className="text-sm font-bold text-[#EDEDEF]">{item.title}</h5>
                      </div>
                      <ul className="space-y-0.5 ml-6">
                        {item.features.map((feature, j) => (
                          <li key={j} className="text-xs text-[#8A8A8E] flex items-start gap-1">
                            <span className="text-[#8A8A8E] mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GIO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Bot className="w-7 h-7 text-[#2B7FFF]" />
            <h3 className="text-2xl font-bold text-[#2B7FFF]">GIO - COPILOTO DO GEFIN</h3>
            <span className="px-2 py-0.5 bg-[#2B7FFF]/20 border border-[#2B7FFF]/50 rounded text-xs font-bold text-[#2B7FFF]">NOVO</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gioPhases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                className={`bg-white/[0.06] border ${phase.borderColor} rounded-xl p-4`}
              >
                <div className="mb-3">
                  <h4 className="text-lg font-bold text-[#EDEDEF]">{phase.version}</h4>
                  <p className="text-sm text-[#8A8A8E]">{phase.subtitle}</p>
                </div>
                <div className="space-y-3">
                  {phase.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-4 h-4 text-[#8A8A8E]" />
                        <h5 className="text-sm font-bold text-[#EDEDEF]">{item.title}</h5>
                      </div>
                      <ul className="space-y-0.5 ml-6">
                        {item.features.map((feature, j) => (
                          <li key={j} className="text-xs text-[#8A8A8E] flex items-start gap-1">
                            <span className="text-[#2B7FFF] mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h4 className="text-xl font-bold text-[#EDEDEF] mb-4 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-[#8A8A8E]" />
            Cronograma de Implementação
          </h4>
          <div className="space-y-3 overflow-x-auto">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 min-w-[500px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-32 flex-shrink-0">
                    <span className={`px-3 py-1 ${item.color} rounded font-bold text-[#EDEDEF] text-sm`}>
                      {item.product}
                    </span>
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#8A8A8E]">V1</span>
                      <span className="text-sm font-bold text-[#EDEDEF]">{item.v1}</span>
                    </div>
                    <span className="text-[#8A8A8E]">───►</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#8A8A8E]">V2</span>
                      <span className="text-sm font-bold text-[#EDEDEF]">{item.v2}</span>
                    </div>
                    <span className="text-[#8A8A8E]">───►</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#8A8A8E]">V3</span>
                      <span className="text-sm font-bold text-[#EDEDEF]">{item.v3}</span>
                    </div>
                    {item.special && (
                      <>
                        <span className="text-[#8A8A8E]">───►</span>
                        <span className="text-sm font-bold text-[#2B7FFF]">{item.special}</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Destaques + Callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Destaques */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-[#EDEDEF]" />
              <h4 className="text-lg font-bold text-[#EDEDEF]">Destaques</h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8A8A8E] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#8A8A8E]"><span className="font-bold">Entrega Incremental:</span> Cada fase adiciona valor sem depender da seguinte</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EDEDEF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#8A8A8E]"><span className="font-bold">Validação de Mercado:</span> Feedback contínuo dos usuários guia evolução</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EDEDEF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#8A8A8E]"><span className="font-bold text-[#2B7FFF]">GIO Acelerado:</span> 6 meses vs 12 meses (Autoline), pronto para uso antes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8A8A8E] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#8A8A8E]"><span className="font-bold">Integração Natural:</span> Sistemas evoluem de forma coordenada e integrada</span>
              </li>
            </ul>
          </motion.div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/[0.04] border-2 border-white/[0.08] rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-[#EDEDEF]" />
              <h4 className="text-lg font-bold text-[#8A8A8E]">ESTRATÉGIA DE FASES</h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#8A8A8E] mt-0.5">•</span>
                <span className="text-sm text-[#EDEDEF]">Entrega rápida de valor (MVP funcional em 5 meses)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A8A8E] mt-0.5">•</span>
                <span className="text-sm text-[#EDEDEF]">Iteração baseada em feedback real</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A8A8E] mt-0.5">•</span>
                <span className="text-sm text-[#EDEDEF]">Complexidade crescente validada pelo uso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A8A8E] mt-0.5">•</span>
                <span className="text-sm text-[#EDEDEF] font-bold text-[#2B7FFF]">GIO operacional em 6 meses (antes do Autoline V3)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}