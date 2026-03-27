"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroBackgroundProps = {
  images: string[];
};

export function HeroBackground({ images }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: index === 0 ? 1 : 0, scale: 1.08 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [1.08, 1.14, 1.1, 1.04],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 5,
            times: [0, 0.18, 0.62, 1],
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      ))}
    </div>
  );
}
