import { motion } from "motion/react";
import { Award, Shield, FileCheck, TrendingUp } from "lucide-react";
import SlideFooter from "../SlideFooter";

export default function Slide18() {
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
          
          <h2 className="text-4xl font-bold text-white mb-4">
            A Plataforma de Conteúdo:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600 drop-shadow-lg">
              Transparência, Credibilidade e Gestão
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-5xl mx-auto leading-relaxed">
            A Plataforma de Conteúdo Autoline é um pilar estratégico que atua em três frentes para garantir a máxima transparência e informação detalhada no marketplace. Essa sinergia eleva o desempenho orgânico (SEO) e qualifica drasticamente o lead, reduzindo a fricção na compra.
          </p>
        </motion.div>

        {/* Two Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Selos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white p-1 shadow-2xl flex-shrink-0">
                  <div className="w-full h-full bg-[#0a1628] rounded-[11px] flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  
                  <h3 className="text-2xl font-bold text-white">
                    Sistema de Selos de Qualidade e Verificação
                  </h3>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 leading-relaxed">
                    Identifica lojas com documentação validada e boa reputação na plataforma (CSAT dos Clientes), garantindo a credibilidade do parceiro.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 leading-relaxed">
                    Destaca veículos que passaram por reviews de curadoria própria da Autoline, atestando a qualidade e minimizando riscos de transação.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Plataforma de Gestão */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white p-1 shadow-2xl flex-shrink-0">
                  <div className="w-full h-full bg-[#0a1628] rounded-[11px] flex items-center justify-center">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  
                  <h3 className="text-2xl font-bold text-white">
                    Plataforma de Gestão de Conteúdo (Bradesco)
                  </h3>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Ferramenta interna dedicada ao time Bradesco para gerenciar, curar e validar todo o conteúdo do marketplace (descrições, fotos, selos e dados de lojistas/veículos), assegurando consistência e compliance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-400/50 p-6 shadow-lg shadow-green-500/10">
            <div className="flex items-center gap-4">
              <TrendingUp className="w-8 h-8 text-white flex-shrink-0" />
              <p className="text-white font-semibold text-lg leading-relaxed">
                A combinação destes pilares garante que o consumidor chegue ao lojista com alta confiança e grande parte das dúvidas resolvidas. O resultado é um aumento no volume de tráfego orgânico, leads mais qualificados e, consequentemente, uma maior taxa de conversão para os lojistas parceiros.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}