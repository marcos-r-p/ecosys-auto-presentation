export function DotTexture() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" fillOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
    </div>
  );
}

export function GlowEffects() {
  return (
    <>
      {/* Blue glow - left */}
      <div
        className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-35"
        style={{
          background: "radial-gradient(circle, #3592FB 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      {/* Blue-purple glow - bottom right */}
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(circle, #3549FB 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      {/* Purple glow - top center */}
      <div
        className="absolute top-[-15%] left-[40%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #7435FB 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
    </>
  );
}

export function RoundedShapes() {
  return (
    <>
      <div
        className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] rounded-[120px] border border-white/5 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(147, 51, 234, 0.02) 100%)",
        }}
      />
      <div
        className="absolute top-[30%] left-[55%] w-[35%] h-[45%] rounded-[100px] border border-white/5 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(147, 51, 234, 0.02) 0%, rgba(59, 130, 246, 0.03) 100%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[50%] rounded-[100px] border border-white/5 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 51, 234, 0.03) 100%)",
        }}
      />
    </>
  );
}

export default function FixedBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#111214] overflow-hidden">
      <GlowEffects />
      <DotTexture />
      <RoundedShapes />
    </div>
  );
}
