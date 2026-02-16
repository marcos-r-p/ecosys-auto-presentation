import { ReactNode } from "react";
import SlideFooter from "./SlideFooter";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
}

export default function SlideWrapper({ children, className = "", showFooter = true }: SlideWrapperProps) {
  return (
    <div className={`relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-12 overflow-hidden ${className}`}>
      {children}
      {showFooter && <SlideFooter />}
    </div>
  );
}
