import { motion } from "motion/react";
import { Heart, BarChart3, MessageSquare, Bot, CreditCard, Smartphone } from "lucide-react";
import SlideFooter from "../SlideFooter";

const features = [
  {
    id: "gestao",
    number: "1.1",
    title: "Gestão Autoline e ecosys AUTO",
    description: "Escolha a Versão Ideal para Sua Revenda",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "comunicacao",
    number: "1.2",
    title: "Comunicação Unificada",
    description: "Otimize a comunicação do lojista, garantindo que nenhuma oportunidade de venda seja perdida",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "copiloto",
    number: "1.3",
    title: "Copiloto Autoline",
    description: "Uma suíte de agentes de Inteligência Artificial que trabalham 24/7, incluindo o GIO - Copiloto do GEFIN, para transformar a revenda em um hub de alta performance e rentabilidade para o lojista.",
    icon: Bot,
    color: "from-green-500 to-emerald-500",
    highlight: true,
  },
  {
    id: "originacao",
    number: "1.4",
    title: "Originação e Produtos Bradesco",
    description: "Produtos financeiros do Bradesco são oferecidos de forma integrada e contextualizada dentro do processo natural de vendas da revenda",
    icon: CreditCard,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "app-vendedor",
    number: "1.5",
    title: "App do Vendedor",
    description: "Ferramenta móvel para vendas e atendimento em qualquer lugar.",
    icon: Smartphone,
    color: "from-red-500 to-pink-500",
  },
];

export default function Slide9() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          
          <h2 className="text-5xl font-bold text-white mb-4">
            Gestor{" "}
            <img
              src="https://autoline.com.br/assets/resources/logo_autoline_white_165_50.png"
              alt="Autoline"
              className="h-12 inline-block align-middle"
            />
            :{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              O Coração da Estratégia
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-5xl mx-auto leading-relaxed">
            O Gestor Autoline é o DMS central que digitaliza e organiza o dia a dia da revenda, tornando-se indispensável. Ele integra a originação de produtos Bradesco de forma natural e sem fricção no fluxo de trabalho do lojista.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6">
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0 ? "#3b82f6" : "#a855f7"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full hover:border-white/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-0.5 shadow-lg flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[9px] flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Copiloto Highlight - Full Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-xl blur-2xl" />
            <div className="relative bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-md border-2 border-green-400/50 rounded-xl p-6 hover:border-green-400/80 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-white p-1 shadow-2xl flex-shrink-0">
                  <div className="w-full h-full bg-[#0a1628] rounded-[11px] flex items-center justify-center">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Copiloto Autoline
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {features[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0 ? "#eab308" : "#ef4444"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full hover:border-white/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-0.5 shadow-lg flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[9px] flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}