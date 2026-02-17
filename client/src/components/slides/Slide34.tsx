import { motion } from "motion/react";
import { Shield, TrendingUp, Clock, Bot, Zap, DollarSign } from "lucide-react";
import SlideFooter from "../SlideFooter";

export default function Slide34() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-2 pb-1 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#EDEDEF] mb-1">
            Modelo Pós-Lançamento: Sustentação e Evolução Contínua
          </h2>
          <p className="text-[10px] text-[#8A8A8E] max-w-5xl mx-auto leading-snug">
            Após a entrega dos roadmaps (Autoline 12 meses + GIO 6 meses), entramos num modelo de operação contínua que garante estabilidade, 
            segurança e evolução constante do ecossistema completo.
          </p>
        </motion.div>

        {/* Main Content - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Column 1: Sustentação da Plataforma */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 h-full">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#2B7FFF]" />
                <h3 className="text-sm font-bold text-[#EDEDEF]">Sustentação da Plataforma</h3>
              </div>
              <p className="text-[9px] text-[#8A8A8E] mb-2 leading-snug">
                Garante que as plataformas se mantenham operacionais, performáticas e seguras.
              </p>

              {/* AUTOLINE */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-2.5 mb-2">
                <h4 className="text-[11px] font-bold text-[#2B7FFF] mb-1">AUTOLINE</h4>
                <div className="bg-white/[0.04] border border-white/[0.06] rounded p-2 mb-2 text-center">
                  <div className="text-[9px] text-[#2B7FFF] mb-0.5">Custo Mensal de Sustentação</div>
                  <div className="text-lg font-bold text-[#EDEDEF]">R$ 768.597,00</div>
                </div>
                <ul className="space-y-0.5 mb-1.5">
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#2B7FFF] mt-0.5 text-[7px]">●</span><span>Infraestrutura cloud e licenças</span></li>
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#2B7FFF] mt-0.5 text-[7px]">●</span><span>Suporte técnico e monitorização 24/7</span></li>
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#2B7FFF] mt-0.5 text-[7px]">●</span><span>Segurança, compliance e atualizações</span></li>
                </ul>
                <div className="border-t border-white/[0.06] pt-1.5">
                  <p className="text-[8px] text-[#8A8A8E] leading-snug">
                    <span className="text-[#2B7FFF] font-bold">4 anos</span> de operação. Após, código do Gestor Autoline, Marketplace e App repassado ao Bradesco.
                  </p>
                </div>
              </div>

              {/* GIO */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-2.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <Bot className="w-3.5 h-3.5 text-[#2B7FFF]" />
                  <h4 className="text-[11px] font-bold text-[#2B7FFF]">NOVO GIO - COPILOTO DO GEFIN</h4>
                  <span className="px-1 py-0.5 bg-white/[0.04] border border-white/[0.08] rounded text-[8px] font-bold text-[#8A8A8E]">NOVO</span>
                </div>
                <div className="bg-white/[0.04] border border-white/[0.06] rounded p-2 mb-2 text-center">
                  <div className="text-[9px] text-[#8A8A8E] mb-0.5">Custo Mensal de Sustentação</div>
                  <div className="text-lg font-bold text-[#EDEDEF]">R$ 500.000,00</div>
                </div>
                <ul className="space-y-0.5 mb-1.5">
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#8A8A8E] mt-0.5 text-[7px]">●</span><span>Infraestrutura cloud dedicada</span></li>
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#8A8A8E] mt-0.5 text-[7px]">●</span><span>Suporte especializado GEFINS 24/7</span></li>
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#8A8A8E] mt-0.5 text-[7px]">●</span><span>Integrações Microsoft (Teams, Outlook, Power BI)</span></li>
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#8A8A8E] mt-0.5 text-[7px]">●</span><span>Evolução contínua de IA e Health Score</span></li>
                </ul>
                <div className="border-t border-white/[0.06] pt-1.5">
                  <p className="text-[8px] text-[#8A8A8E] leading-snug">
                    Sustentação <span className="font-bold">contínua</span>. Código GIO permanece com a ecosys AUTO.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Melhorias e Novas Demandas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#EDEDEF]" />
                <h3 className="text-sm font-bold text-[#EDEDEF]">Melhorias e Novas Demandas</h3>
              </div>
              <p className="text-[9px] text-[#8A8A8E] mb-2 leading-snug">
                Modelo flexível e transparente para evolução dos produtos fora dos roadmaps iniciais.
              </p>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-2.5 mb-2">
                <div className="bg-white/[0.04] border border-white/[0.06] rounded p-2 mb-2 text-center">
                  <div className="text-[9px] text-[#8A8A8E] mb-0.5">Custo para Melhorias</div>
                  <div className="text-2xl font-bold text-[#EDEDEF]">R$ 350,00 / hora</div>
                </div>
                <div className="text-[9px] font-bold text-[#8A8A8E] mb-1">Aplicável para:</div>
                <ul className="space-y-0.5">
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#8A8A8E] mt-0.5 text-[7px]">●</span><span>Novas funcionalidades no Autoline e Novo GIO</span></li>
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#8A8A8E] mt-0.5 text-[7px]">●</span><span>Integrações adicionais com sistemas terceiros</span></li>
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#8A8A8E] mt-0.5 text-[7px]">●</span><span>Customizações específicas do Bradesco</span></li>
                  <li className="text-[9px] text-[#8A8A8E] flex items-start gap-1"><span className="text-[#8A8A8E] mt-0.5 text-[7px]">●</span><span>Desenvolvimento de novos módulos e evoluções tecnológicas</span></li>
                </ul>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-2.5 mt-auto">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap className="w-3 h-3 text-[#8A8A8E]" />
                  <div className="text-[9px] font-bold text-[#8A8A8E]">PREVISIBILIDADE E CONTROLE</div>
                </div>
                <p className="text-[8px] text-[#8A8A8E] leading-snug">
                  Total previsibilidade sobre investimentos em inovação, permitindo adaptar o ecossistema 
                  (Autoline + Novo GIO) às novas oportunidades com agilidade e transparência.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-2"
        >
          {/* Total Sustentação Mensal */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <DollarSign className="w-3.5 h-3.5 text-[#EDEDEF]" />
              <h4 className="text-[9px] font-bold text-[#2B7FFF]">SUSTENTAÇÃO MENSAL</h4>
            </div>
            <div className="space-y-0.5 mb-1.5">
              <div className="flex justify-between text-[9px]">
                <span className="text-[#8A8A8E]">Autoline:</span>
                <span className="text-[#EDEDEF] font-bold">R$ 768.597/mês</span>
              </div>
              <div className="flex justify-between text-[9px]">
                <span className="text-[#8A8A8E]">Novo GIO:</span>
                <span className="text-[#EDEDEF] font-bold">R$ 500.000/mês</span>
              </div>
            </div>
            <div className="border-t border-white/[0.06] pt-1">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-[#2B7FFF]">TOTAL:</span>
                <span className="text-sm font-bold text-[#EDEDEF]">R$ 1.268.597/mês</span>
              </div>
            </div>
          </div>

          {/* Total Sustentação Anual */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Clock className="w-3.5 h-3.5 text-[#8A8A8E]" />
              <h4 className="text-[9px] font-bold text-[#8A8A8E]">SUSTENTAÇÃO ANUAL</h4>
            </div>
            <div className="space-y-0.5 mb-1.5">
              <div className="flex justify-between text-[9px]">
                <span className="text-[#8A8A8E]">Autoline:</span>
                <span className="text-[#EDEDEF] font-bold">R$ 9.223.164/ano</span>
              </div>
              <div className="flex justify-between text-[9px]">
                <span className="text-[#8A8A8E]">Novo GIO:</span>
                <span className="text-[#EDEDEF] font-bold">R$ 6.000.000/ano</span>
              </div>
            </div>
            <div className="border-t border-white/[0.06] pt-1">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-[#8A8A8E]">TOTAL:</span>
                <span className="text-sm font-bold text-[#EDEDEF]">R$ 15.223.164/ano</span>
              </div>
            </div>
          </div>

          {/* Investimento Ano 1 */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#EDEDEF]" />
              <h4 className="text-[9px] font-bold text-[#8A8A8E]">DESENVOLVIMENTO ANO 1</h4>
            </div>
            <div className="space-y-0.5 mb-1.5">
              <div className="flex justify-between text-[9px]">
                <span className="text-[#8A8A8E]">Autoline (12m):</span>
                <span className="text-[#EDEDEF] font-bold">R$ 20.554.551</span>
              </div>
              <div className="flex justify-between text-[9px]">
                <span className="text-[#8A8A8E]">Novo GIO (6m):</span>
                <span className="text-[#EDEDEF] font-bold">R$ 6.000.000</span>
              </div>
            </div>
            <div className="border-t border-white/[0.06] pt-1">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-[#8A8A8E]">TOTAL:</span>
                <span className="text-sm font-bold text-[#EDEDEF]">R$ 26.554.551</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
