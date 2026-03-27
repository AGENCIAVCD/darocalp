import { RiWhatsappFill } from "react-icons/ri";

import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function WhatsAppButton({
  href,
  children,
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  const styles = {
    primary:
      "bg-primary !text-white shadow-[0_18px_40px_rgba(111,56,29,0.28)] hover:bg-primary-strong",
    secondary:
      "border border-white/40 bg-white/12 !text-white backdrop-blur hover:bg-white/20",
    ghost:
      "border border-border bg-white/70 text-foreground hover:bg-white",
  };

  const contentColor =
    variant === "ghost" ? "text-foreground" : "!text-white";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.04em] transition-all duration-300 hover:-translate-y-0.5",
        styles[variant],
        className,
      )}
    >
      <RiWhatsappFill
        className={cn("h-4 w-4", contentColor)}
      />
      <span className={contentColor}>{children}</span>
    </a>
  );
}
