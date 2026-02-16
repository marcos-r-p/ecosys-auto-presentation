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
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          
          <h2 className="text-4xl font-bold text-white mb-3">
            Gestão{" "}
            <img
              src="https://autoline.com.br/assets/resources/logo_autoline_white_165_50.png"
              alt="Autoline"
              className="h-10 inline-block align-middle"
            />
            {" "}e ecosys AUTO:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-600">
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
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:border-red-400/50 transition-all">
              <div className="mb-6">
                
                <h3 className="text-3xl font-bold text-white mb-3">
                  Gestor{" "}
                  <img
                    src="https://autoline.com.br/assets/resources/logo_autoline_white_165_50.png"
                    alt="Autoline"
                    className="h-7 inline-block align-middle"
                  />
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
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
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-md border-2 border-blue-400/30 rounded-2xl p-8 h-full hover:border-blue-400/60 transition-all">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-blue-500 text-white">
                    PREMIUM
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  ecosys AUTO
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
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
                      delay: 0.4 + index * 0.03,
                    }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">
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