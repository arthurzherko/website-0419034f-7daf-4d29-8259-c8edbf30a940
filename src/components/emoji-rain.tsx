import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EmojiRainProps {
  emoji: string[];
  duration?: number;
}

export function EmojiRain({ emoji = ["😂", "🤪", "🤡", "🎈"], duration = 2000 }: EmojiRainProps) {
  const [particles, setParticles] = useState<{ id: number; x: number; emoji: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (particles.length < 10) {
        setParticles((current) => [
          ...current,
          {
            id: Math.random(),
            x: Math.random() * (window.innerWidth - 40),
            emoji: emoji[Math.floor(Math.random() * emoji.length)],
          },
        ]);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [emoji, particles.length]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles((current) =>
        current.filter((particle) => Date.now() - particle.id < duration)
      );
    }, duration);

    return () => clearInterval(cleanup);
  }, [duration]);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ y: -20, x: particle.x, opacity: 1 }}
            animate={{ y: window.innerHeight + 20 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: duration / 1000,
              type: "tween",
              ease: "linear",
            }}
            className="absolute text-2xl"
          >
            {particle.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}