import { motion } from "motion/react";
import { Smartphone, Users, MessageCircle, CreditCard, Bot, ClipboardCheck } from "lucide-react";
import SlideFooter from "../SlideFooter";

const features = [
  {
    id: "crm",
    number: "1.5.1",
    title: "CRM e Fluxo de Vendas Móvel",
    description: "Gerencie o funil de vendas, acompanhe leads e atualize status de negociações diretamente pelo celular, com total flexibilidade.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "comunicacao",
    number: "1.5.2",
    title: "Comunicação Integrada",
    description: "Acesse o eConversa de qualquer lugar para responder leads do WhatsApp, OLX e redes sociais, sem perder nenhuma oportunidade.",
    icon: MessageCircle,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "originacao",
    number: "1.5.3",
    title: "Originação de Produtos Bradesco",
    description: "Envie propostas de financiamento e seguros Bradesco em tempo real, agilizando o fechamento de negócios diretamente do app.",
    icon: CreditCard,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "copiloto",
    number: "1.5.4",
    title: "Copiloto de Atendimento para App",
    description: "Conte com a Inteligência Artificial para auxiliar na qualificação de leads e fornecer respostas rápidas e precisas aos clientes.",
    icon: Bot,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "precificacao",
    number: "1.5.5",
    title: "Precificação Rápida e Checklist para o App",
    description: "Avalie veículos na hora e realize checklists de entrada de forma digital, garantindo agilidade e padronização no processo.",
    icon: ClipboardCheck,
    color: "from-red-500 to-pink-500",
  },
];

export default function Slide14() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          
          <h2 className="text-5xl font-bold text-white mb-4">
            App do Vendedor:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              A Venda na Palma da Mão
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-5xl mx-auto leading-relaxed">
            O App do Vendedor é a ferramenta móvel essencial que coloca o poder da Autoline e dos produtos Bradesco na palma da mão do seu time. Projetado para acelerar o processo de vendas e garantir autonomia, ele permite acessar todas as informações necessárias, seja no pátio da loja ou em um atendimento externo.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {features.slice(0, 3).map((feature, index) => (
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
                    index === 0
                      ? "#3b82f6"
                      : index === 1
                      ? "#a855f7"
                      : "#22c55e"
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
                    
                    <h3 className="text-lg font-bold text-white">
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

        {/* Bottom Row - Centralized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl blur-xl pointer-events-none -z-10"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0 ? "#eab308" : "#ef4444"
                  }, transparent)`,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 h-full hover:border-white/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-0.5 shadow-lg flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[9px] flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    
                    <h3 className="text-lg font-bold text-white">
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