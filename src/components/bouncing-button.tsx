import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface BouncingButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function BouncingButton({
  children,
  className,
  onClick,
}: BouncingButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Button
      className={cn(
        "transition-all duration-300",
        isPressed && "animate-bounce",
        className
      )}
      onClick={() => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 1000);
        onClick?.();
      }}
    >
      {children}
    </Button>
  );
}