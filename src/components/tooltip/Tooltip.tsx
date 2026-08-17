import React from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({ children, text, position = "top" }: TooltipProps) => {
  const tooltipPosition = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  const arrowPosition = {
    top: "top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[var(--text-color)]",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-[var(--text-color)]",
    left: "left-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[var(--text-color)]",
    right: "right-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-[var(--text-color)]",
  };

  return (
    <div className="relative inline-flex group">
      <div className="cursor-pointer">
        {children}
      </div>

      <div className={`absolute ${tooltipPosition[position]} z-50 px-4 py-2 rounded-lg bg-[var(--text-color)] text-[var(--bg-color)] text-sm font-medium shadow-lg whitespace-nowrap pointer-events-none opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-200 ease-out`}>
        {text}

        <span className={`absolute w-0 h-0 ${arrowPosition[position]}`} />
      </div>
    </div>
  );
};

export default Tooltip;