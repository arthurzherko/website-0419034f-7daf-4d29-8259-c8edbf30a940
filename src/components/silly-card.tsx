import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";

interface SillyCardProps {
  title: string;
  content: string;
  className?: string;
}

export function SillyCard({ title, content, className }: SillyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:-translate-y-2",
        isHovered && "rotate-1",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-center gap-2">
          <FaHandPointRight
            className={cn(
              "h-6 w-6 text-primary transition-transform duration-300",
              isHovered && "translate-x-2"
            )}
          />
          <Typography.H3>{title}</Typography.H3>
        </div>
        <Typography.P className="mt-4">{content}</Typography.P>
      </div>
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      )}
    </Card>
  );
}