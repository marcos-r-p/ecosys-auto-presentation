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
    color: "",
  },
  {
    id: "ia",
    number: "2.2",
    title: "IA no Marketplace",
    description: "IA que gera leads qualificados com crédito pré-aprovado e recomendações personalizadas.",
    icon: Bot,
    color: "",
  },
  {
    id: "area-logada",
    number: "2.3",
    title: "Área Logada",
    description: "Área personalizada com favoritos, listas de desejo e alertas customizados.",
    icon: UserCircle,
    color: "",
  },
  {
    id: "conteudo",
    number: "2.4",
    title: "Plataforma de Conteúdo",
    description: "Conteúdo curado pelo Bradesco com selos de confiança e estratégia SEO/GEO.",
    icon: FileText,
    color: "",
  },
  {
    id: "app",
    number: "2.5",
    title: "App do Marketplace",
    description: "Aplicativo nativo iOS/Android otimizado para consumo mobile, oferecendo jornada de compra completa, notificações personalizadas e experiência fluida na palma da mão.",
    icon: Smartphone,
    color: "",
  },
];

export default function Slide15() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          
          <h2 className="font-extrabold tracking-tight text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/oPnqWOABGquuztOR.png"
              alt="Autoline"
              className="h-12 inline-block align-middle"
            />
            :{" "}
            <span className="text-[#EDEDEF]">
              A Melhor Experiência
            </span>
          </h2>
          <p className="text-xl text-[#8A8A8E] font-medium max-w-5xl mx-auto leading-relaxed">
            O Marketplace Autoline serve como a vitrine B2C do ecossistema, oferecendo uma jornada intuitiva e segura para o consumidor final na descoberta, compra e financiamento de veículos.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-3">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
                <div className="flex justify-center mb-5">
                  <div
                    className={`w-14 h-14 rounded-xl bg-white/[0.06] p-1 shadow-lg`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[10px] flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-[#EDEDEF]" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#EDEDEF] text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#8A8A8E] text-sm text-center leading-relaxed">
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
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
              className="relative group"
            >
<div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-white/[0.06] p-1 flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-[#0A0A0B] rounded-[10px] flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-[#EDEDEF]" />
                    </div>
                  </div>
                  <div>
                    
                    <h3 className="text-xl font-bold text-[#EDEDEF]">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#8A8A8E] text-sm leading-relaxed">
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
        >
          <div className="relative overflow-hidden rounded-xl bg-white/[0.04] border border-white/[0.12] p-5">
            <div className="text-center">
              <p className="text-[#EDEDEF] font-semibold text-lg leading-relaxed">
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