import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import { Typography } from "./ui/typography";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <FaSun className="h-5 w-5 animate-spin-slow text-yellow-500" />
        ) : (
          <FaMoon className="h-5 w-5 animate-bounce text-blue-400" />
        )}
      </Button>
      <Typography.Small>
        {theme === "light" ? "Слишком ярко?" : "Боишься темноты?"}
      </Typography.Small>
    </div>
  );
}