import { JellyNavbar } from "@/components/jelly-navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { DancingText } from "@/components/dancing-text";
import { SillyCard } from "@/components/silly-card";
import { EmojiRain } from "@/components/emoji-rain";
import { BouncingButton } from "@/components/bouncing-button";
import { Typography } from "@/components/ui/typography";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Главная" },
  { path: "/useless-facts", label: "Бесполезные факты" },
  { path: "/silly-generator", label: "Генератор глупостей" },
];

export function Home() {
  const [showEmojiRain, setShowEmojiRain] = useState(false);

  return (
    <div className="container mx-auto min-h-screen p-8">
      {showEmojiRain && (
        <EmojiRain emoji={["🤪", "🤡", "🎈", "🦄", "🌈", "🍕", "🎪"]} />
      )}
      
      <header className="mb-8 flex items-center justify-between">
        <DancingText text="Самый глупый сайт в мире" />
        <div className="flex items-center gap-4">
          <JellyNavbar items={navItems} />
          <ModeToggle />
        </div>
      </header>

      <main className="space-y-8">
        <Typography.H1 className="text-center">
          👋 Добро пожаловать в царство абсурда!
        </Typography.H1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SillyCard
            title="Почему этот сайт существует?"
            content="Потому что иногда нужно просто делать глупости! Никакого смысла, только веселье!"
          />
          <SillyCard
            title="Что здесь происходит?"
            content="Абсолютно ничего важного! Мы просто развлекаемся и делаем мир чуточку безумнее!"
          />
          <SillyCard
            title="Кому это нужно?"
            content="Тем, кто устал от серьезности! Мы здесь, чтобы улыбаться и удивляться!"
          />
        </div>

        <div className="flex justify-center">
          <BouncingButton
            onClick={() => setShowEmojiRain((prev) => !prev)}
            className="text-lg"
          >
            {showEmojiRain ? "Хватит безумия!" : "Вызвать дождь из эмодзи!"}
          </BouncingButton>
        </div>
      </main>

      <footer className="mt-16 text-center">
        <Typography.Muted>
          Сделано с 🤪 и большим количеством ненужного кода
        </Typography.Muted>
      </footer>
    </div>
  );
}