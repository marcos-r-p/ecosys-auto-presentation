import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";

const CORRECT_PASSWORD = "ecosysebbf";

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(() => {
    return sessionStorage.getItem("ecosys-auth") === "true";
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!authenticated && inputRef.current) {
      inputRef.current.focus();
    }
  }, [authenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem("ecosys-auth", "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setTimeout(() => setError(false), 3000);
      setPassword("");
    }
  };

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #0A0A0F 0%, #0D1117 50%, #0A0A0F 100%)" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #2B7FFF 0%, transparent 70%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md px-6"
      >
        {/* Logo area */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(43,127,255,0.15), rgba(43,127,255,0.05))",
              border: "1.5px solid rgba(43,127,255,0.25)",
              boxShadow: "0 0 40px rgba(43,127,255,0.1)",
            }}
          >
            <ShieldCheck className="w-8 h-8 text-[#2B7FFF]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-bold text-[#EDEDEF] tracking-tight mb-2"
          >
            Acesso Restrito
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm text-[#8A8A8E]"
          >
            Documento confidencial — insira a senha para continuar
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            x: shaking ? [0, -8, 8, -6, 6, -3, 3, 0] : 0,
          }}
          transition={shaking ? { duration: 0.4 } : { delay: 0.5, duration: 0.5 }}
          className="relative"
        >
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              border: error ? "1.5px solid rgba(239,68,68,0.5)" : "1.5px solid rgba(255,255,255,0.08)",
              transition: "border-color 0.3s ease",
            }}
          >
            <div className="flex items-center px-4 py-1">
              <Lock className="w-4 h-4 text-[#8A8A8E] shrink-0 mr-3" />
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Digite a senha de acesso"
                className="flex-1 bg-transparent text-[#EDEDEF] text-sm py-3.5 outline-none placeholder:text-[#555]"
                autoComplete="off"
              />
              <button
                type="submit"
                className="shrink-0 ml-2 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{
                  background: password.length > 0
                    ? "linear-gradient(135deg, #2B7FFF, #1a5fd4)"
                    : "rgba(255,255,255,0.05)",
                  cursor: password.length > 0 ? "pointer" : "default",
                }}
              >
                <ArrowRight className="w-4 h-4" style={{ color: password.length > 0 ? "#fff" : "#555" }} />
              </button>
            </div>
          </div>

          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-xs text-red-400 mt-3 text-center"
              >
                Senha incorreta. Tente novamente.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-[10px] text-[#555] uppercase tracking-widest">
            ecosys AUTO — Material Confidencial
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
