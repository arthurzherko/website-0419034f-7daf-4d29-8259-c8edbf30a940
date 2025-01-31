import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DancingTextProps {
  text: string;
  className?: string;
}

export function DancingText({ text, className }: DancingTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Typography.H2 className={cn("flex flex-wrap gap-1", className)}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={cn(
            "transition-all duration-300",
            hoveredIndex === index &&
              "animate-bounce text-primary dark:text-secondary"
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Typography.H2>
  );
}