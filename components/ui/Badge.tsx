import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "coral" | "light";
};

const variants = {
  default: "bg-ocean text-white",
  coral: "bg-coral text-white",
  light: "bg-white/90 text-ocean",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
