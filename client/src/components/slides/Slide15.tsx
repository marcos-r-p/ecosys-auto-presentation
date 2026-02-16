import { motion } from "motion/react";
import { ShoppingBag, Package, Bot, UserCircle, FileText, Smartphone } from "lucide-react";
import SlideFooter from "../SlideFooter";

const features = [
  {
    id: "catalogo",
    number: "2.1",
    title: "Catálogo de Veículos",
    description: "Estoque das revendas integrado em tempo real com o Gestor Autoline, garantindo disponibilidade e precisão.",
    icon: Package,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ia",
    number: "2.2",
    title: "IA no Marketplace",
    description: "IA que gera leads qualificados com crédito pré-aprovado e recomendações personalizadas.",
    icon: Bot,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "area-logada",
    number: "2.3",
    title: "Área Logada",
    description: "Área personalizada com favoritos, listas de desejo e alertas customizados.",
    icon: UserCircle,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "conteudo",
    number: "2.4",
    title: "Plataforma de Conteúdo",
    description: "Conteúdo curado pelo Bradesco com selos de confiança e estratégia SEO.",
    icon: FileText,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "app",
    number: "2.5",
    title: "App do Marketplace",
    description: "Aplicativo nativo iOS/Android otimizado para consumo mobile, oferecendo jornada de compra completa, notificações personalizadas e experiência fluida na palma da mão.",
    icon: Smartphone,
    color: "from-red-500 to-pink-500",
  },
];

export default function Slide15() {
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
            <img
              src="https://autoline.com.br/assets/resources/logo_autoline_white_165_50.png"
              alt="Autoline"
              className="h-12 inline-block align-middle"
            />
            :{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              A Melhor Experiência
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-5xl mx-auto leading-relaxed">
            O Marketplace Autoline serve como a vitrine B2C do ecossistema, oferecendo uma jornada intuitiva e segura para o consumidor final na descoberta, compra e financiamento de veículos.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
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
                <div className="flex justify-center mb-5">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-1 shadow-lg`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[10px] flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-1 shadow-lg flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0a1628] rounded-[10px] flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
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

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6"
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/20 via-red-500/20 to-red-600/20 border border-white/30 p-5 shadow-lg shadow-red-500/10">
            <div className="text-center">
              <p className="text-white font-semibold text-lg leading-relaxed">
                O Marketplace cria um ciclo virtuoso, atraindo consumidores e gerando leads qualificados que são direcionados aos lojistas, incentivando o uso do Gestor Autoline e, consequentemente, a conversão de vendas com os produtos Bradesco.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}