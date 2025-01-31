import { JellyNavbar } from "@/components/jelly-navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { DancingText } from "@/components/dancing-text";
import { BouncingButton } from "@/components/bouncing-button";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { useState } from "react";
import { FaRandom } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Главная" },
  { path: "/useless-facts", label: "Бесполезные факты" },
  { path: "/silly-generator", label: "Генератор глупостей" },
];

const adjectives = [
  "танцующий",
  "летающий",
  "поющий",
  "мечтательный",
  "загадочный",
];

const nouns = [
  "единорог",
  "пончик",
  "программист",
  "чайник",
  "бутерброд",
];

const actions = [
  "учит квантовую физику",
  "готовит борщ",
  "пишет симфонию",
  "решает кроссворд",
  "изобретает велосипед",
];

export function SillyGenerator() {
  const [sillyPhrase, setSillyPhrase] = useState("");

  const generatePhrase = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    setSillyPhrase(`${adj} ${noun} ${action}`);
  };

  return (
    <div className="container mx-auto min-h-screen p-8">
      <header className="mb-8 flex items-center justify-between">
        <DancingText text="Генератор глупостей" />
        <div className="flex items-center gap-4">
          <JellyNavbar items={navItems} />
          <ModeToggle />
        </div>
      </header>

      <main className="space-y-8">
        <Typography.H1 className="text-center">
          🎲 Генератор нелепых ситуаций
        </Typography.H1>

        <Card className="mx-auto max-w-2xl p-8 text-center">
          {sillyPhrase ? (
            <Typography.H2 className="mb-8 animate-bounce text-primary">
              {sillyPhrase}
            </Typography.H2>
          ) : (
            <Typography.H3 className="mb-8 text-muted-foreground">
              Нажмите на кнопку, чтобы сгенерировать нелепую ситуацию!
            </Typography.H3>
          )}

          <BouncingButton
            onClick={generatePhrase}
            className="mx-auto flex items-center gap-2"
          >
            <FaRandom className="h-4 w-4" />
            Сгенерировать чушь!
          </BouncingButton>
        </Card>
      </main>

      <footer className="mt-16 text-center">
        <Typography.Muted>
          Предупреждение: генератор может вызвать неконтролируемые приступы смеха!
        </Typography.Muted>
      </footer>
    </div>
  );
}