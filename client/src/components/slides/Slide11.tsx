import { motion } from "motion/react";
import { MessageCircle, Share2, TrendingUp } from "lucide-react";
import SlideFooter from "../SlideFooter";

export default function Slide11() {
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
          
          <h2 className="text-4xl font-bold text-[#EDEDEF] mb-4">
            <span className="text-[#EDEDEF]">
              Comunicação Unificada
            </span>{" "}
            para Maximizar a Conversão
          </h2>
          <p className="text-xl text-[#8A8A8E] font-medium max-w-5xl mx-auto leading-relaxed">
            O Gestor Autoline integra e otimiza a comunicação do lojista, garantindo que nenhuma oportunidade de venda seja perdida.
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Integração Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl" />
            <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/[0.04] p-1 flex-shrink-0">
                  <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                    <Share2 className="w-8 h-8 text-[#EDEDEF]" />
                  </div>
                </div>
                <div>
                  
                  <h3 className="text-2xl font-bold text-[#EDEDEF]">
                    Integração com Redes Sociais
                  </h3>
                </div>
              </div>
              <p className="text-[#8A8A8E] leading-relaxed">
                Agende e publique automaticamente o estoque de veículos do Bradesco nos feeds do <span className="font-semibold text-[#EDEDEF]">Facebook</span> e <span className="font-semibold text-[#EDEDEF]">Instagram</span>, incluindo o <span className="font-semibold text-[#EDEDEF]">Marketplace do Meta</span>. Este recurso economiza tempo do lojista e aumenta massivamente a visibilidade do estoque, capturando leads qualificados diretamente das redes sociais.
              </p>
            </div>
          </motion.div>

          {/* eConversa */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl" />
            <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 h-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white p-1 flex-shrink-0">
                  <div className="w-full h-full bg-[#0A0A0B] rounded-[11px] flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-[#8A8A8E]" />
                  </div>
                </div>
                <div>
                  
                  <h3 className="text-2xl font-bold text-[#EDEDEF]">
                    eConversa - CRM Omnichannel
                  </h3>
                </div>
              </div>
              <p className="text-[#8A8A8E] leading-relaxed">
                Centralize todas as conversas e interações de múltiplos canais (<span className="font-semibold text-[#EDEDEF]">WhatsApp, OLX, Instagram, Facebook, Marketplace Autoline</span>) em uma única plataforma. Isso aumenta a taxa de conversão de leads, otimiza o tempo da equipe de vendas e assegura que nenhuma proposta ou pergunta do cliente fique sem resposta.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.12] p-6">
            <div className="flex items-center justify-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#EDEDEF]" />
              <span className="text-[#EDEDEF] font-semibold text-lg">
                Nenhuma oportunidade de venda será perdida com comunicação centralizada
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white/[0.06] rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}