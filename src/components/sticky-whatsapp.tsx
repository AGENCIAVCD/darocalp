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
      className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#1f6b43] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(18,74,46,0.35)] ring-1 ring-white/18 transition-transform hover:-translate-y-1"
      aria-label="Falar no WhatsApp"
    >
      <RiWhatsappFill className="h-5 w-5 text-white" />
      <span className="text-white">Falar no WhatsApp</span>
    </motion.a>
  );
}
