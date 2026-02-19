import { motion } from "motion/react";
import { Shield, Clock, TrendingUp, Bot, Database, DollarSign, Zap, Code2, ArrowRight } from "lucide-react";
import SlideFooter from "../SlideFooter";

/*
 * Design: Sustentação e Evolução Contínua
 * 3 blocos: Sustentação Mensal (4 anos mín.), Projeção Anual, Novos Desenvolvimentos (R$350/h)
 * Layout responsivo: 2 colunas desktop, empilhado mobile
 */

export default function SlideInvestimento2() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-3 pb-2 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-3 flex-1">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <Shield className="w-5 h-5 text-[#2B7FFF]" />
            <h2 className="font-extrabold tracking-tight text-lg sm: text-[#EDEDEF]" style={{ fontSize: 'clamp(18px, 2.8vh, 36px)', marginBottom: 'clamp(4px, 0.6vh, 10px)', lineHeight: '1.1' }}>
              Sustentação e Evolução Contínua
            </h2>
          </div>
          <p className="text-[#8A8A8E] text-[10px] max-w-5xl mx-auto leading-snug" style={{ fontSize: 'clamp(12px, 1.6vh, 20px)' }}>
            Após a entrega dos roadmaps, entramos num modelo de operação contínua com sustentação mínima de 4 anos 
            e custo por hora para novos desenvolvimentos.
          </p>
        </motion.div>

        {/* Main Content: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 flex-1 min-h-0">

          {/* Left Column: Sustentação (3/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-2"
          >
            <h3 className="text-xs font-bold text-[#8A8A8E] uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Sustentação da Plataforma — Mínimo 4 Anos
            </h3>

            {/* AUTOLINE Sustentação */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-4 h-4 text-[#2B7FFF]" />
                <h4 className="text-sm font-bold text-[#EDEDEF]">AUTOLINE</h4>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[9px] text-[#8A8A8E]">
                    <span className="flex items-center gap-1"><span className="text-[#2B7FFF] text-[7px]">●</span> Infraestrutura cloud e licenças</span>
                    <span className="flex items-center gap-1"><span className="text-[#2B7FFF] text-[7px]">●</span> Suporte técnico 24/7</span>
                    <span className="flex items-center gap-1"><span className="text-[#2B7FFF] text-[7px]">●</span> Segurança e compliance</span>
                    <span className="flex items-center gap-1"><span className="text-[#2B7FFF] text-[7px]">●</span> Atualizações contínuas</span>
                  </div>
                  <div className="mt-1.5 text-[8px] text-[#555] border-t border-white/[0.06] pt-1">
                    Após <span className="text-[#2B7FFF] font-bold">4 anos</span>, código do Gestor Autoline, Marketplace e App repassado ao Bradesco.
                  </div>
                </div>
                <div className="bg-white/[0.06] border border-white/[0.08] rounded-lg px-4 py-2 text-center shrink-0">
                  <div className="text-[8px] text-[#8A8A8E] mb-0.5">Mensal</div>
                  <div className="text-lg font-bold text-[#EDEDEF]">R$ 768.597</div>
                </div>
              </div>
            </div>

            {/* GIO Sustentação */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-4 h-4 text-[#2B7FFF]" />
                <h4 className="text-sm font-bold text-[#EDEDEF]">NOVO GIO — COPILOTO DO GEFIN</h4>
                <span className="px-1.5 py-0.5 bg-[#2B7FFF]/10 border border-[#2B7FFF]/30 rounded text-[8px] font-bold text-[#2B7FFF]">NOVO</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[9px] text-[#8A8A8E]">
                    <span className="flex items-center gap-1"><span className="text-[#2B7FFF] text-[7px]">●</span> Infraestrutura cloud dedicada</span>
                    <span className="flex items-center gap-1"><span className="text-[#2B7FFF] text-[7px]">●</span> Suporte GEFINS 24/7</span>
                    <span className="flex items-center gap-1"><span className="text-[#2B7FFF] text-[7px]">●</span> Integrações Microsoft</span>
                    <span className="flex items-center gap-1"><span className="text-[#2B7FFF] text-[7px]">●</span> Evolução contínua de IA</span>
                  </div>
                  <div className="mt-1.5 text-[8px] text-[#555] border-t border-white/[0.06] pt-1">
                    Sustentação <span className="font-bold text-[#8A8A8E]">contínua</span>. Código GIO permanece com a ecosys AUTO.
                  </div>
                </div>
                <div className="bg-white/[0.06] border border-white/[0.08] rounded-lg px-4 py-2 text-center shrink-0">
                  <div className="text-[8px] text-[#8A8A8E] mb-0.5">Mensal</div>
                  <div className="text-lg font-bold text-[#EDEDEF]">R$ 500.000</div>
                </div>
              </div>
            </div>

            {/* Summary Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-white/[0.06] border border-white/[0.10] rounded-lg p-2.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-[#2B7FFF]" />
                  <span className="text-[9px] font-bold text-[#2B7FFF]">SUSTENTAÇÃO MENSAL</span>
                </div>
                <div className="space-y-0.5 text-[9px] mb-1">
                  <div className="flex justify-between">
                    <span className="text-[#8A8A8E]">Autoline</span>
                    <span className="text-[#EDEDEF] font-bold">R$ 768.597</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A8A8E]">Novo GIO</span>
                    <span className="text-[#EDEDEF] font-bold">R$ 500.000</span>
                  </div>
                </div>
                <div className="border-t border-white/[0.06] pt-1 flex justify-between items-center">
                  <span className="text-[9px] font-bold text-[#2B7FFF]">TOTAL</span>
                  <span className="text-sm font-bold text-[#EDEDEF]">R$ 1.268.597/mês</span>
                </div>
              </div>

              <div className="bg-white/[0.06] border border-white/[0.10] rounded-lg p-2.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#8A8A8E]" />
                  <span className="text-[9px] font-bold text-[#8A8A8E]">SUSTENTAÇÃO ANUAL</span>
                </div>
                <div className="space-y-0.5 text-[9px] mb-1">
                  <div className="flex justify-between">
                    <span className="text-[#8A8A8E]">Autoline</span>
                    <span className="text-[#EDEDEF] font-bold">R$ 9.223.164</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A8A8E]">Novo GIO</span>
                    <span className="text-[#EDEDEF] font-bold">R$ 6.000.000</span>
                  </div>
                </div>
                <div className="border-t border-white/[0.06] pt-1 flex justify-between items-center">
                  <span className="text-[9px] font-bold text-[#8A8A8E]">TOTAL</span>
                  <span className="text-sm font-bold text-[#EDEDEF]">R$ 15.223.164/ano</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Novos Desenvolvimentos (2/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-2"
          >
            <h3 className="text-xs font-bold text-[#8A8A8E] uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              Novos Desenvolvimentos
            </h3>

            {/* Custo Hora */}
            <div className="bg-gradient-to-br from-[#2B7FFF]/[0.08] to-white/[0.04] border border-[#2B7FFF]/30 rounded-lg p-4 text-center">
              <div className="text-[10px] text-[#8A8A8E] mb-1">Custo para Melhorias e Novas Funcionalidades</div>
              <div className="text-3xl font-bold text-[#EDEDEF] mb-1">R$ 350<span className="text-base text-[#8A8A8E] font-normal"> / hora</span></div>
              <div className="text-[9px] text-[#555]">Modelo flexível e transparente</div>
            </div>

            {/* Aplicável para */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 flex-1">
              <div className="text-[10px] font-bold text-[#8A8A8E] mb-2">APLICÁVEL PARA:</div>
              <div className="space-y-2">
                {[
                  { icon: TrendingUp, label: "Novas funcionalidades no Autoline e Novo GIO" },
                  { icon: Zap, label: "Integrações adicionais com sistemas terceiros" },
                  { icon: Database, label: "Customizações específicas do Bradesco" },
                  { icon: Code2, label: "Novos módulos e evoluções tecnológicas" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.08 }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3 h-3 text-[#2B7FFF]" />
                      </div>
                      <span className="text-[10px] text-[#EDEDEF] leading-snug">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Previsibilidade */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Zap className="w-3.5 h-3.5 text-[#2B7FFF]" />
                <span className="text-[10px] font-bold text-[#EDEDEF]">PREVISIBILIDADE E CONTROLE</span>
              </div>
              <p className="text-[9px] text-[#8A8A8E] leading-snug">
                Total previsibilidade sobre investimentos em inovação, permitindo adaptar o ecossistema 
                (Autoline + Novo GIO) às novas oportunidades com agilidade e transparência.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
