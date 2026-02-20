import { motion } from 'motion/react';

const phases = [
  {
    year: '2019–2021',
    label: 'Sistema Legado',
    subtitle: 'Primeira versão do ERP automotivo',
    description: 'Interface funcional com foco em controle financeiro e operações básicas de loja.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/SBmBaLGkCeBTwGgf.png',
    borderColor: 'rgba(255,255,255,0.15)',
    glowColor: 'rgba(255,255,255,0.05)',
    tagColor: 'bg-white/10 text-white/70',
    tag: 'V1',
  },
  {
    year: '2022–2024',
    label: 'Ecosys Auto v1',
    subtitle: 'Plataforma integrada com design moderno',
    description: 'Nova arquitetura com sidebar, controle de estoque visual e integrações com portais.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/caFnyKUbBqoIDnRP.png',
    borderColor: 'rgba(43,127,255,0.3)',
    glowColor: 'rgba(43,127,255,0.08)',
    tagColor: 'bg-blue-500/20 text-blue-400',
    tag: 'V2',
  },
  {
    year: '2025+',
    label: 'Ecosys Auto v2',
    subtitle: 'Marketplace & IA nativa',
    description: 'Interface fluida com kanban, busca inteligente e experiência mobile-first.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030817825/JzEfcJTWPmhGwvFY.png',
    borderColor: 'rgba(43,127,255,0.5)',
    glowColor: 'rgba(43,127,255,0.15)',
    tagColor: 'bg-blue-500/30 text-blue-300',
    tag: 'V3',
  },
];

export default function SlideEvolucaoSistema() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1220 50%, #0a0e1a 100%)' }}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(43,127,255,0.15) 0%, transparent 70%)' }} />

      {/* Header */}
      <div className="flex-shrink-0 pt-16 pb-6 px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-white tracking-tight"
        >
          Evolução do <span className="text-blue-400">Sistema</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base text-white/50 mt-2"
        >
          Do ERP legado à plataforma inteligente — cada versão um salto em tecnologia e experiência.
        </motion.p>
      </div>

      {/* Timeline connector line */}
      <div className="flex-shrink-0 flex items-center justify-center px-12 mb-4">
        <div className="relative w-full max-w-[1300px] h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-500/40 to-blue-400/60 rounded-full" />
          {/* Dots on the line */}
          {phases.map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${(i / (phases.length - 1)) * 100}%` }}
            >
              <div
                className="w-4 h-4 rounded-full border-2 -translate-x-1/2"
                style={{
                  borderColor: i === 2 ? '#3b82f6' : i === 1 ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.3)',
                  background: i === 2 ? 'rgba(59,130,246,0.3)' : i === 1 ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.1)',
                  boxShadow: i === 2 ? '0 0 12px rgba(59,130,246,0.4)' : 'none',
                }}
              />
            </div>
          ))}
          {/* Animated pulse on the line */}
          <motion.div
            className="absolute top-0 h-full w-24 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)' }}
            animate={{ left: ['-10%', '110%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1 flex items-start justify-center px-8 pb-16">
        <div className="grid grid-cols-3 gap-8 max-w-[1300px] w-full">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden interactive-card"
              style={{
                border: `1px solid ${phase.borderColor}`,
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                boxShadow: `0 0 30px ${phase.glowColor}`,
              }}
            >
              {/* Version tag */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider ${phase.tagColor}`}>
                  {phase.tag}
                </span>
              </div>

              {/* Screenshot */}
              <div className="relative w-full overflow-hidden flex items-center justify-center" style={{ height: '260px', background: '#0c111d' }}>
                <img
                  src={phase.image}
                  alt={phase.label}
                  className="w-[92%] h-[90%] object-contain rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }}
                />
                {/* Subtle gradient only at bottom for text transition */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0c111d] to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-6">
                <div className="text-xs font-semibold text-blue-400/70 tracking-widest uppercase mb-1">
                  {phase.year}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {phase.label}
                </h3>
                <p className="text-sm font-medium text-white/60 mb-3">
                  {phase.subtitle}
                </p>
                <p className="text-sm text-white/40 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                  background: i === 2
                    ? 'linear-gradient(90deg, transparent, #3b82f6, transparent)'
                    : i === 1
                    ? 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Arrow indicators between cards */}
      <div className="absolute top-[55%] left-0 right-0 flex justify-center pointer-events-none" style={{ zIndex: 5 }}>
        <div className="max-w-[1300px] w-full px-8 grid grid-cols-3 gap-8">
          {[0, 1].map((i) => (
            <div key={i} className="flex justify-end items-center pr-[-16px]">
              <motion.div
                className="flex items-center"
                style={{ position: 'absolute', left: `${33.3 * (i + 1)}%`, transform: 'translateX(-50%)' }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-40">
                  <path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
