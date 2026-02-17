import { ReactNode } from "react";
import SlideFooter from "./SlideFooter";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
}

export default function SlideWrapper({ children, className = "", showFooter = true }: SlideWrapperProps) {
  return (
    <div className={`relative w-full h-screen flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-8 overflow-hidden ${className}`}>
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl overflow-hidden">
        {children}
      </div>
      {showFooter && <SlideFooter />}
    </div>
  );
}
