import { motion } from "motion/react";
import SlideFooter from "../SlideFooter";

const timelineItems = [
  { year: "2018", text: "Nascimento do projeto batcar veículos e sistema de gestão" },
  { year: "2022", text: "Criação da autotech b.car CVP + 4P Capital" },
  { year: "2023", text: "Spinoff e fundação da ecosys com aporte de R$ 4 milhões" },
  { year: "Out 2024", text: "Início parceria MoU Auto Avaliar e Anautos" },
  { year: "Dez 2024", text: "Lançamento ecosys AUTO na FENAUTO" },
  { year: "Maio 2025", text: "ecosys na estrada com G30" },
  { year: "Jun 2025", text: "Migração de Base Correio Motors MoU BWA" },
  { year: "Jul 2025", text: "Início POC Bradesco" },
];

export default function SlideLinhaTempo2() {
  return (
    <div className="h-full w-full bg-[#0A0A0B] text-[#EDEDEF] flex flex-col justify-center items-center p-8 relative font-sans">
      <motion.h1 
        className="text-[clamp(2.5rem,5vw,3rem)] font-bold text-[#2B7FFF] mb-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Linha do tempo
      </motion.h1>

      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Central Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#8A8A8E] -translate-y-1/2"></div>

          <div className="relative flex justify-between items-start z-10">
            {timelineItems.map((item, index) => {
              const isBottom = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col items-center w-32">
                  {/* Item Content - Top */}
                  {!isBottom && (
                    <motion.div 
                      className="text-center mb-4" 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <p style={{ fontSize: 'clamp(10px, 1vw, 14px)' }} className="text-[#EDEDEF]">{item.text}</p>
                      <p className="font-bold text-sm text-[#8A8A8E] mt-1">{item.year}</p>
                    </motion.div>
                  )}

                  {/* Dot and Line */}
                  <div className="relative flex flex-col items-center">
                    <div className={`w-1 h-8 ${isBottom ? 'bg-[#8A8A8E]' : 'bg-transparent'}`}></div>
                    <div className="w-3 h-3 bg-[#2B7FFF] rounded-full my-1"></div>
                    <div className={`w-1 h-8 ${!isBottom ? 'bg-[#8A8A8E]' : 'bg-transparent'}`}></div>
                  </div>

                  {/* Item Content - Bottom */}
                  {isBottom && (
                    <motion.div 
                      className="text-center mt-4" 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <p className="font-bold text-sm text-[#8A8A8E] mb-1">{item.year}</p>
                      <p style={{ fontSize: 'clamp(10px, 1vw, 14px)' }} className="text-[#EDEDEF]">{item.text}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* Final Goal */}
            <div className="absolute flex flex-col items-center w-32 -right-12 top-1/2 transform -translate-y-1/2">
                <motion.div 
                  className="text-center" 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: timelineItems.length * 0.2 }}
                >
                    <div className="w-4 h-4 bg-[#CC092F] rounded-full mb-2"></div>
                    <p className="font-bold text-lg text-[#CC092F]">2027</p>
                    <p style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }} className="text-[#CC092F] font-bold mt-1">
                        Startup mais valiosa SaaS Automotivo
                    </p>
                </motion.div>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
