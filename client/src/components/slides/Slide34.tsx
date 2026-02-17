import { motion } from "motion/react";
import { Shield, TrendingUp, Clock, Bot, Zap, DollarSign } from "lucide-react";
import SlideFooter from "../SlideFooter";

export default function Slide34() {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-15 overflow-y-auto">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl font-bold text-[#EDEDEF] mb-3">
            Modelo Pós-Lançamento: Sustentação e Evolução Contínua
          </h2>
          <p className="text-sm text-[#8A8A8E] max-w-5xl mx-auto leading-relaxed">
            Após a entrega dos roadmaps (Autoline 12 meses + GIO 6 meses), entramos num modelo de operação contínua que garante a estabilidade, 
            segurança e evolução constante do ecossistema completo, estabelecendo um framework de custos totalmente transparente.
          </p>
        </motion.div>

        {/* Main Content - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* Column 1: Sustentação da Plataforma */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-[#2B7FFF]" />
                <h3 className="text-xl font-bold text-[#EDEDEF]">Sustentação da Plataforma</h3>
              </div>
              <p className="text-xs text-[#8A8A8E] mb-5 leading-relaxed">
                Garante que as plataformas se mantenham operacionais, performáticas e seguras, cobrindo todos os custos recorrentes 
                para manutenção do ecossistema integrado.
              </p>

              {/* AUTOLINE */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 mb-4">
                <h4 className="text-base font-bold text-[#2B7FFF] mb-2">AUTOLINE</h4>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 mb-3 text-center">
                  <div className="text-xs text-[#2B7FFF] mb-1">Custo Mensal de Sustentação</div>
                  <div className="text-2xl font-bold text-[#EDEDEF]">R$ 768.597,00</div>
                </div>

                <div className="mb-3">
                  <div className="text-xs font-bold text-[#8A8A8E] mb-2">O que está incluso:</div>
                  <ul className="space-y-1">
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#2B7FFF] mt-0.5">•</span>
                      <span>Custos de infraestrutura cloud e licenças de software</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#2B7FFF] mt-0.5">•</span>
                      <span>Equipe de suporte técnico e monitorização contínua (24/7)</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#2B7FFF] mt-0.5">•</span>
                      <span>Manutenção de segurança e compliance</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#2B7FFF] mt-0.5">•</span>
                      <span>Atualizações de performance e estabilidade</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08] pt-3">
                  <div className="text-xs font-bold text-[#8A8A8E] mb-1">Duração e Transferência:</div>
                  <p className="text-[10px] text-[#8A8A8E] leading-relaxed">
                    Durante <span className="text-[#2B7FFF] font-bold">4 anos</span> após o desenvolvimento mantemos a operação por esse valor mensal. 
                    Após esse período, o código do Gestor Autoline (DMS Lite), Marketplace e App do Marketplace é repassado ao Bradesco. 
                    Os códigos da ecosys AUTO (DMS Pro) e App do Vendedor permanecem com a ecosys.
                  </p>
                </div>
              </div>

              {/* GIO */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-5 h-5" style={{ color: '#2B7FFF' }} />
                  <h4 className="text-base font-bold" style={{ color: '#2B7FFF' }}>
                    <span className="font-bold">GIO</span> - COPILOTO DO GEFIN
                  </h4>
                  <span className="px-2 py-0.5 bg-white/[0.04] border border-white/[0.08] rounded text-[9px] font-bold text-[#8A8A8E]">
                    NOVO
                  </span>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 mb-3 text-center">
                  <div className="text-xs text-[#8A8A8E] mb-1">Custo Mensal de Sustentação</div>
                  <div className="text-2xl font-bold text-[#EDEDEF]">R$ 500.000,00</div>
                </div>

                <div className="mb-3">
                  <div className="text-xs font-bold text-[#8A8A8E] mb-2">O que está incluso:</div>
                  <ul className="space-y-1">
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Infraestrutura cloud dedicada para força comercial</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Suporte técnico especializado para equipe GEFINS (24/7)</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Manutenção de integrações Microsoft (Teams, Outlook, Power BI, Azure AD)</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Evolução contínua de algoritmos de IA e Health Score</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Atualizações de segurança e compliance</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Monitoramento e otimização de performance</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08] pt-3">
                  <div className="text-xs font-bold text-[#8A8A8E] mb-1">Duração:</div>
                  <p className="text-[10px] text-[#8A8A8E] leading-relaxed">
                    Sustentação <span className="text-[#8A8A8E] font-bold">contínua</span> com evolução permanente do sistema. 
                    O código <span className="font-bold">GIO</span> permanece com a ecosys AUTO, garantindo suporte especializado e evolução tecnológica constante.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Melhorias e Novas Demandas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-[#EDEDEF]" />
                <h3 className="text-xl font-bold text-[#EDEDEF]">Melhorias e Novas Demandas</h3>
              </div>
              <p className="text-xs text-[#8A8A8E] mb-5 leading-relaxed">
                Modelo flexível e transparente para evolução dos produtos, aplicável a novas funcionalidades, integrações ou 
                demandas estratégicas que surjam fora do âmbito dos roadmaps iniciais.
              </p>

              <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 mb-4">
                <div className="text-xs font-bold text-[#8A8A8E] mb-3">Foco:</div>
                <ul className="space-y-1.5 mb-4">
                  <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                    <span className="text-[#8A8A8E] mt-0.5">•</span>
                    <span>Inovação e adaptação às novas oportunidades de mercado</span>
                  </li>
                  <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                    <span className="text-[#8A8A8E] mt-0.5">•</span>
                    <span>Investimentos realizados sob demanda para garantir previsibilidade orçamentária</span>
                  </li>
                  <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                    <span className="text-[#8A8A8E] mt-0.5">•</span>
                    <span>Evolução ágil baseada em feedback e necessidades do negócio</span>
                  </li>
                </ul>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 mb-4 text-center">
                  <div className="text-xs text-[#8A8A8E] mb-1">Custo para Melhorias</div>
                  <div className="text-3xl font-bold text-[#EDEDEF]">R$ 350,00 / hora</div>
                </div>

                <div className="mb-3">
                  <div className="text-xs font-bold text-[#8A8A8E] mb-2">Aplicável para:</div>
                  <ul className="space-y-1">
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Novas funcionalidades no Autoline</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Novas funcionalidades no <span className="font-bold">GIO</span> - Copiloto do GEFIN</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Integrações adicionais com sistemas terceiros</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Customizações específicas do Bradesco</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Desenvolvimento de novos módulos</span>
                    </li>
                    <li className="text-[10px] text-[#8A8A8E] flex items-start gap-1.5">
                      <span className="text-[#8A8A8E] mt-0.5">•</span>
                      <span>Evoluções tecnológicas (novas IAs, automações)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#8A8A8E]" />
                  <div className="text-xs font-bold text-[#8A8A8E]">PREVISIBILIDADE E CONTROLE</div>
                </div>
                <p className="text-[10px] text-[#8A8A8E] leading-relaxed">
                  Garante total previsibilidade e controle sobre os investimentos em inovação, permitindo adaptar o ecossistema 
                  completo (Autoline + <span className="font-bold">GIO</span>) às novas oportunidades de mercado com agilidade e transparência total.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Total Sustentação Mensal */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-[#EDEDEF]" />
              <h4 className="text-xs font-bold text-[#2B7FFF]">TOTAL SUSTENTAÇÃO MENSAL</h4>
            </div>
            <div className="space-y-1.5 mb-3">
              <div className="flex justify-between text-[10px]">
                <span className="text-[#8A8A8E]">Autoline:</span>
                <span className="text-[#EDEDEF] font-bold">R$ 768.597,00/mês</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[#8A8A8E]"><span className="font-bold">GIO</span> - Copiloto:</span>
                <span className="text-[#EDEDEF] font-bold">R$ 500.000,00/mês</span>
              </div>
            </div>
            <div className="border-t border-white/[0.08] pt-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#2B7FFF]">TOTAL:</span>
                <span className="text-lg font-bold text-[#EDEDEF]">R$ 1.268.597,00/mês</span>
              </div>
            </div>
          </div>

          {/* Total Sustentação Anual */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-[#8A8A8E]" />
              <h4 className="text-xs font-bold text-[#8A8A8E]">TOTAL SUSTENTAÇÃO ANUAL</h4>
            </div>
            <div className="space-y-1.5 mb-3">
              <div className="flex justify-between text-[10px]">
                <span className="text-[#8A8A8E]">Autoline:</span>
                <span className="text-[#EDEDEF] font-bold">R$ 9.223.164,00/ano</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[#8A8A8E]"><span className="font-bold">GIO</span> - Copiloto:</span>
                <span className="text-[#EDEDEF] font-bold">R$ 6.000.000,00/ano</span>
              </div>
            </div>
            <div className="border-t border-white/[0.08] pt-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#8A8A8E]">TOTAL:</span>
                <span className="text-lg font-bold text-[#EDEDEF]">R$ 15.223.164,00/ano</span>
              </div>
            </div>
          </div>

          {/* Investimento Ano 1 */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-[#EDEDEF]" />
              <h4 className="text-xs font-bold text-[#8A8A8E]">DESENVOLVIMENTO ANO 1</h4>
            </div>
            <div className="space-y-1.5 mb-3">
              <div className="flex justify-between text-[10px]">
                <span className="text-[#8A8A8E]">Autoline (12 meses):</span>
                <span className="text-[#EDEDEF] font-bold">R$ 20.554.551,00</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[#8A8A8E]"><span className="font-bold">GIO</span> (6 meses):</span>
                <span className="text-[#EDEDEF] font-bold">R$ 6.000.000,00</span>
              </div>
            </div>
            <div className="border-t border-white/[0.08] pt-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#8A8A8E]">TOTAL:</span>
                <span className="text-lg font-bold text-[#EDEDEF]">R$ 26.554.551,00</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}