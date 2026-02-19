
import { motion } from "motion/react";
import { User } from 'lucide-react';
import SlideFooter from "../SlideFooter";

export default function SlideBioMarcos() {
  return (
    <div className="h-full w-full bg-[#0A0A0B] text-[#EDEDEF] flex flex-col justify-center items-center p-4 md:p-16">
      <div className="w-full flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 p-1">
                <User className="w-24 h-24 text-gray-500" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Miguel Pantazis</h3>
            <p className="text-[#8A8A8E]">Founder e CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-[0_0_20px_5px_rgba(43,127,255,0.3)]">
                <User className="w-24 h-24 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Marcos Roberto</h3>
            <p className="text-[#2B7FFF]">CRO e Co-Founder</p>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto text-center">
            <p style={{fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'}} className="leading-relaxed">
                Marcos Roberto é administrador com MBA pela FGV e empreendedor focado em crescimento e construção de ativos escaláveis. Assumiu a gestão da CVP Fiat em 2019 após um ciclo prolongado de prejuízos. Em seis anos, elevou o faturamento de R$ 47 milhões para R$ 172 milhões, restaurou rentabilidade e liderou a venda da empresa por R$ 28 milhões em 2025, no auge da performance. É sócio da b.car e cofundador da ecosys AUTO, plataforma SaaS voltada à gestão e inteligência para revendas, com foco em eficiência operacional, previsibilidade de receita e escala.
            </p>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}
