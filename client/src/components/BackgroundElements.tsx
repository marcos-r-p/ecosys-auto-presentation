export default function FixedBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#0A0A0B] overflow-hidden">
      {/* Single very subtle radial glow for minimal depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(43,127,255,0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
