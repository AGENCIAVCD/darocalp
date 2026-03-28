import { RiWhatsappFill } from "react-icons/ri";

import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "olive";
  className?: string;
};

export function WhatsAppButton({
  href,
  children,
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  const styles = {
    primary: "fancy-button fancy-button--warm !text-white",
    secondary:
      "border border-white/40 bg-white/12 !text-white backdrop-blur hover:bg-white/20",
    ghost: "fancy-button fancy-button--light text-foreground",
    olive: "fancy-button fancy-button--olive !text-white",
  };

  const contentColor =
    variant === "ghost" ? "text-foreground" : "!text-white";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-[0.01em] transition-all duration-300",
        styles[variant],
        className,
      )}
    >
      <span className="fancy-button__content">
        <RiWhatsappFill className={cn("h-4 w-4", contentColor)} />
        <span className={contentColor}>{children}</span>
      </span>
    </a>
  );
}
