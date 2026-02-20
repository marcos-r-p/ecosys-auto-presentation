import { useState, useEffect } from "react";

/**
 * RotateDeviceOverlay
 * Detects portrait orientation on mobile and shows an animated overlay
 * asking the user to rotate the device to landscape mode.
 */
export default function RotateDeviceOverlay() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // Only show on mobile/tablet devices (touch-capable + narrow screen)
      const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isPortrait = window.innerHeight > window.innerWidth;
      const isSmallScreen = window.innerWidth < 1024;
      setShowOverlay(isMobile && isPortrait && isSmallScreen);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", () => {
      // Small delay for orientation change to settle
      setTimeout(checkOrientation, 150);
    });

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (!showOverlay) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(145deg, #0a0f1a 0%, #0d1525 40%, #111d33 100%)",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(43,127,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Phone animation container */}
      <div className="relative mb-10">
        {/* Phone SVG with rotation animation */}
        <div className="animate-rotate-phone">
          <svg
            width="80"
            height="130"
            viewBox="0 0 80 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Phone body */}
            <rect
              x="4"
              y="4"
              width="72"
              height="122"
              rx="12"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2.5"
              fill="rgba(255,255,255,0.03)"
            />
            {/* Screen */}
            <rect
              x="10"
              y="18"
              width="60"
              height="94"
              rx="4"
              fill="rgba(43,127,255,0.08)"
              stroke="rgba(43,127,255,0.15)"
              strokeWidth="1"
            />
            {/* Top speaker */}
            <rect
              x="28"
              y="9"
              width="24"
              height="3"
              rx="1.5"
              fill="rgba(255,255,255,0.2)"
            />
            {/* Bottom home indicator */}
            <rect
              x="26"
              y="118"
              width="28"
              height="3"
              rx="1.5"
              fill="rgba(255,255,255,0.15)"
            />
            {/* Screen content lines */}
            <rect x="18" y="30" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
            <rect x="18" y="40" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
            <rect x="18" y="50" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
            <rect x="18" y="65" width="44" height="20" rx="3" fill="rgba(43,127,255,0.06)" stroke="rgba(43,127,255,0.1)" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Rotation arrow */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 animate-pulse-arrow">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 2.25C16.5 2.25 20.25 6 20.25 6L16.5 9.75"
              stroke="rgba(43,127,255,0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.25 6H8.25C5.35 6 3 8.35 3 11.25V12"
              stroke="rgba(43,127,255,0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 21.75C7.5 21.75 3.75 18 3.75 18L7.5 14.25"
              stroke="rgba(43,127,255,0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.75 18H15.75C18.65 18 21 15.65 21 12.75V12"
              stroke="rgba(43,127,255,0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="text-center px-8 relative z-10">
        <h2
          className="text-xl font-bold mb-3 tracking-tight"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Rotacione seu dispositivo
        </h2>
        <p
          className="text-sm leading-relaxed max-w-[260px] mx-auto"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Para uma melhor experiência, visualize esta apresentação com o celular na horizontal.
        </p>
      </div>

      {/* ecosys AUTO branding */}
      <div
        className="absolute bottom-8 text-xs tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        ecosys AUTO
      </div>
    </div>
  );
}
