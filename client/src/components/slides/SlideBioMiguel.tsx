
import { motion } from "motion/react";
import { User } from 'lucide-react';
import SlideFooter from "../SlideFooter";

const SlideBioMiguel = () => {
  return (
    <div className="h-full w-full bg-[#0A0A0B] text-[#EDEDEF] flex flex-col justify-center items-center p-8 lg:p-16">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-around gap-12">
        
        {/* Person Cards */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Miguel Pantazis - Highlighted */}
          <motion.div 
            className="relative bg-gray-900/50 rounded-2xl p-6 flex flex-col items-center text-center border border-transparent"
            style={{
              borderImage: 'linear-gradient(to bottom, #2B7FFF, #0A0A0B) 1',
              boxShadow: '0 0 20px 5px rgba(43, 127, 255, 0.3)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-[#8A8A8E]" />
            </div>
            <h2 className="font-bold text-xl text-white">Miguel Pantazis</h2>
            <p className="text-[#2B7FFF] font-semibold">Founder e CEO</p>
          </motion.div>

          {/* Marcos Roberto - Dimmed */}
          <motion.div 
            className="bg-gray-900/30 rounded-2xl p-6 flex flex-col items-center text-center opacity-60 border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-[#8A8A8E]" />
            </div>
            <h2 className="font-bold text-xl text-white">Marcos Roberto</h2>
            <p className="text-[#8A8A8E]">CRO e Co-Founder</p>
          </motion.div>
        </div>

        {/* Bio Text */}
        <motion.div 
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p 
            className="text-[#EDEDEF] text-left"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)', lineHeight: 'clamp(1.5rem, 2.5vw, 1.8rem)' }}
          >
            Formado em Economia, estudou no IBMEC, morou nos Estados Unidos e hoje atua em diversas empresas da 4P. Iniciou sua jornada empreendedora em 2013 com 21 anos e, ao lado dos irmãos, fundou sua primeira empresa: a BP Incorporadora. Em 2016, os irmãos iniciaram a diversificação de investimento e atuação fundando a 4P Capital. Alavancaram o crescimento das empresas que fundaram e investiram como a bluefit, SPITI, b.car, flug e outras. Apaixonados pelo segmento auto, em 2018 iniciaram a construção da Plataforma ecosys AUTO para atender suas investidas batcar/b.car. Hoje, a holding empresarial conta com mais de 100 CNPJs ativos e mais de 4 mil colaboradores em seus negócios com um faturamento consolidado de aproximadamente 1 bilhão por ano.
          </p>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
};

export default SlideBioMiguel;
