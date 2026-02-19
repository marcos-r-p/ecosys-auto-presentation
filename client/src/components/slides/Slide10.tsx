import { motion } from "motion/react";
import { Layers, Check } from "lucide-react";
import SlideFooter from "../SlideFooter";

const gestorAutolineFeatures = [
  "Gestão de Estoque e Anúncios",
  "CRM de Vendas",
  "eConversa (WhatsApp, OLX, Facebook, Instagram e Etc)",
  "Integradores de Portais (Webmotors, OLX e etc.)",
  "Integradores de Redes Sociais",
  "Portal Whitelabel",
  "Originação de Produtos Bradesco",
  "Contratos + Assinatura Digital",
  "Simulação e Envio de Proposta (Bradesco preferencial + Credere)",
  "Relatórios Básicos",
];

const ecosysAUTOFeatures = [
  "Todos os recursos do Gestor Autoline",
  "CRM de Captação",
  "Gestão Financeira",
  "Emissão de NFe",
  "Relatórios Avançados",
  "Copilotos de IA (SDR, Estoque, GIO - GEFIN, Pós-Venda)",
  "RENAVE",
  "Permissionamento",
  "Carteira de Clientes",
  "Gestão de Pós-vendas",
  "Comissões e Metas",
  "Multi-lojas",
];

export default function Slide10() {
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
          
          <h2 className="font-extrabold tracking-tight sm: text-[#EDEDEF]" style={{ fontSize: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(6px, 1vh, 16px)', lineHeight: '1.1' }}>
            Gestão{" "}
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/oPnqWOABGquuztOR.png"
              alt="Autoline"
              className="h-10 inline-block align-middle"
            />
            {" "}e ecosys AUTO:{" "}
            <span className="text-[#EDEDEF]">
              Escolha a Versão Ideal para Sua Revenda
            </span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Gestor Autoline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
            <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 h-full hover:border-white/[0.08] transition-all">
              <div className="mb-3">
                
                <h3 className="text-3xl font-bold text-[#EDEDEF] mb-3">
                  Gestor Lite{" "}
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/oPnqWOABGquuztOR.png"
                    alt="Autoline"
                    className="h-7 inline-block align-middle"
                  />
                </h3>
                <p className="text-[#8A8A8E] text-sm leading-relaxed">
                  Foco no essencial para vender mais, ideal para revendas que buscam organizar seu processo de vendas e anúncios.
                </p>
              </div>

              <ul className="space-y-3">
                {gestorAutolineFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.03,
                    }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-[#2B7FFF] flex-shrink-0 mt-0.5" />
                    <span className="text-[#8A8A8E] text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ecosys AUTO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
            <div className="relative bg-white/[0.04] border-2 border-white/[0.08] rounded-2xl p-4 h-full hover:border-white/[0.08] transition-all">
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-white/[0.06] text-[#EDEDEF]">
                    PREMIUM
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#EDEDEF] mb-3">
                  Gestor Pro
                </h3>
                <p className="text-[#8A8A8E] text-sm leading-relaxed">
                  A gestão completa para máxima eficiência, adicionando ferramentas avançadas para revendas estruturadas.
                </p>
              </div>

              <ul className="space-y-3">
                {ecosysAUTOFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + index * 0.03,
                    }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-[#EDEDEF] flex-shrink-0 mt-0.5" />
                    <span className="text-[#8A8A8E] text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
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