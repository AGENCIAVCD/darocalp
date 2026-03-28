"use client";

import { motion } from "framer-motion";
import { RiWhatsappFill } from "react-icons/ri";

type StickyWhatsAppProps = {
  href: string;
};

export function StickyWhatsApp({ href }: StickyWhatsAppProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 left-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1f6b43] text-xs font-semibold text-white shadow-[0_18px_50px_rgba(18,74,46,0.35)] ring-1 ring-white/18 transition-transform hover:-translate-y-1 sm:bottom-5 sm:left-5 sm:h-auto sm:w-auto sm:gap-3 sm:px-5 sm:py-3.5 sm:text-sm"
      aria-label="Falar no WhatsApp"
    >
      <RiWhatsappFill className="h-4 w-4 text-white sm:h-5 sm:w-5" />
      <span className="hidden text-white sm:inline">Falar no WhatsApp</span>
    </motion.a>
  );
}
