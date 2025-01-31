import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  path: string;
  label: string;
}

interface JellyNavbarProps {
  items: NavItem[];
  className?: string;
}

export function JellyNavbar({ items, className }: JellyNavbarProps) {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <nav
      className={cn(
        "relative flex items-center gap-4 rounded-full bg-card p-2",
        className
      )}
    >
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        const isHovered = hoveredPath === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-primary"
            )}
            onMouseEnter={() => setHoveredPath(item.path)}
            onMouseLeave={() => setHoveredPath(null)}
          >
            <span className="relative z-10">{item.label}</span>
            {(isActive || isHovered) && (
              <motion.div
                layoutId="bubble"
                className="absolute inset-0 z-0 rounded-full bg-primary"
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.6,
                }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}