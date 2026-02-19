import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SlideFooter from "../SlideFooter";

interface Executive {
  name: string;
  role: string;
  photo: string;
  isLead: boolean;
  bio: string[];
}

const executives: Executive[] = [
  {
    name: "Miguel Pantazis",
    role: "Founder & CEO",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/mcDwMtoaNFmrZXhl.jpeg",
    isLead: true,
    bio: [
      "Economista formado pelo IBMEC, empreendedor desde os 21 anos",
      "Cofundou a 4P Capital e liderou investimentos em bluefit, SPITI, b.car e flug",
      "Holding com +100 CNPJs, +4 mil colaboradores e ~R$ 1 bi/ano em faturamento",
      "Idealizou a ecosys AUTO em 2018 para transformar o ecossistema automotivo",
    ],
  },
  {
    name: "Marcos Roberto",
    role: "CRO & Co-Founder",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/IkfGwYtGHfAQAboM.jpg",
    isLead: false,
    bio: [
      "Administrador com MBA pela FGV, foco em crescimento e ativos escaláveis",
      "Elevou faturamento da CVP Fiat de R$ 47M para R$ 172M em 6 anos",
      "Liderou venda da empresa por R$ 28M em 2025, no auge da performance",
      "Cofundador da ecosys AUTO com foco em eficiência operacional e escala",
    ],
  },
];

function ExecutiveCard({ exec, index }: { exec: Executive; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
      className="flex flex-col items-center relative"
      style={{ width: "min(340px, 40vw)" }}
    >
      {/* Photo container */}
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow ring for lead */}
        {exec.isLead && (
          <div
            className="absolute -inset-1 rounded-2xl opacity-60"
            style={{
              background: "linear-gradient(135deg, #2B7FFF, #CC092F)",
              filter: "blur(8px)",
            }}
          />
        )}

        {/* Photo */}
        <div
          className={`relative overflow-hidden rounded-2xl transition-transform duration-300 ${
            isHovered ? "scale-[1.02]" : "scale-100"
          }`}
          style={{
            width: "min(300px, 36vw)",
            height: "min(380px, 46vw)",
            border: exec.isLead ? "2px solid rgba(43,127,255,0.4)" : "2px solid rgba(255,255,255,0.08)",
          }}
        >
          <img
            src={exec.photo}
            alt={exec.name}
            className="w-full h-full object-cover object-top"
            style={{ filter: "contrast(1.05) brightness(0.95)" }}
          />

          {/* Subtle gradient overlay at bottom */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: "40%",
              background: "linear-gradient(to top, rgba(10,10,11,0.85), transparent)",
            }}
          />
        </div>

        {/* Lead badge */}
        {exec.isLead && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -top-2 -right-2 px-2.5 py-1 rounded-md text-white font-bold z-20"
            style={{
              fontSize: "clamp(8px, 1vh, 11px)",
              background: "linear-gradient(135deg, #2B7FFF, #1a5fd4)",
              boxShadow: "0 2px 12px rgba(43,127,255,0.4)",
              letterSpacing: "0.05em",
            }}
          >
            LÍDER
          </motion.div>
        )}

        {/* Hover bio overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 rounded-2xl z-10 flex flex-col justify-end p-5 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(10,10,11,0.97) 50%, rgba(10,10,11,0.7) 75%, transparent)",
                backdropFilter: "blur(2px)",
              }}
            >
              <div className="space-y-2">
                {exec.bio.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-2"
                  >
                    <span
                      className="mt-1.5 shrink-0 rounded-full"
                      style={{
                        width: "5px",
                        height: "5px",
                        background: exec.isLead ? "#2B7FFF" : "#CC092F",
                      }}
                    />
                    <p
                      className="text-[#D4D4D8] leading-snug"
                      style={{ fontSize: "clamp(10px, 1.3vh, 14px)" }}
                    >
                      {line}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Name and role below photo */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 + index * 0.2 }}
      >
        <h3
          className="font-bold text-white leading-tight"
          style={{ fontSize: "clamp(16px, 2.2vh, 24px)" }}
        >
          {exec.name}
        </h3>
        <p
          className={`font-semibold mt-1 ${exec.isLead ? "text-[#2B7FFF]" : "text-[#CC092F]"}`}
          style={{ fontSize: "clamp(12px, 1.5vh, 18px)" }}
        >
          {exec.role}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function SlideEquipeUnificado() {
  return (
    <div className="h-full w-full flex flex-col px-6 md:px-10 pt-4 pb-1 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-2"
      >
        <h2
          className="font-black tracking-tight text-[#EDEDEF] leading-none"
          style={{ fontSize: "clamp(24px, 3.5vh, 44px)" }}
        >
          Quem está <span className="text-[#2B7FFF]">por trás</span>
        </h2>
        <p
          className="text-[#8A8A8E] mt-1"
          style={{ fontSize: "clamp(12px, 1.4vh, 18px)" }}
        >
          Liderança com histórico de execução e resultados comprovados
        </p>
      </motion.div>

      {/* Executive cards */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-start justify-center gap-8 md:gap-16">
          {executives.map((exec, index) => (
            <ExecutiveCard key={exec.name} exec={exec} index={index} />
          ))}
        </div>
      </div>

      {/* Hover hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center text-[#8A8A8E]/50 mb-6"
        style={{ fontSize: "clamp(9px, 1vh, 12px)" }}
      >
        Passe o mouse sobre as fotos para ver a biografia
      </motion.p>

      <SlideFooter />
    </div>
  );
}
