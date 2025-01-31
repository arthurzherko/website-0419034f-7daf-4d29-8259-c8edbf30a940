import { JellyNavbar } from "@/components/jelly-navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { DancingText } from "@/components/dancing-text";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Главная" },
  { path: "/useless-facts", label: "Бесполезные факты" },
  { path: "/silly-generator", label: "Генератор глупостей" },
];

const uselessFacts = [
  "Бананы на самом деле ягоды, а клубника - нет!",
  "Когда утки крякают, эхо не возникает, и никто не знает почему!",
  "Человек не может чихнуть с открытыми глазами!",
  "Медузы существуют уже более 650 миллионов лет и до сих пор не имеют мозга!",
  "Ленивцы могут задерживать дыхание под водой до 40 минут!",
  "У осьминогов три сердца!",
  "Фламинго от природы белые, розовыми они становятся из-за водорослей!",
];

export function UselessFacts() {
  const [selectedFact, setSelectedFact] = useState<number | null>(null);

  return (
    <div className="container mx-auto min-h-screen p-8">
      <header className="mb-8 flex items-center justify-between">
        <DancingText text="Бесполезные факты" />
        <div className="flex items-center gap-4">
          <JellyNavbar items={navItems} />
          <ModeToggle />
        </div>
      </header>

      <main className="space-y-8">
        <Typography.H1 className="text-center">
          🤓 Абсолютно бесполезные факты
        </Typography.H1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {uselessFacts.map((fact, index) => (
            <Card
              key={index}
              className={`cursor-pointer p-6 transition-all duration-300 hover:scale-105 ${
                selectedFact === index ? "border-primary" : ""
              }`}
              onClick={() => setSelectedFact(index)}
            >
              <div className="flex items-start gap-2">
                <FaStar
                  className={`h-6 w-6 transition-colors ${
                    selectedFact === index
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />
                <Typography.P>{fact}</Typography.P>
              </div>
            </Card>
          ))}
        </div>

        {selectedFact !== null && (
          <Typography.H3 className="text-center text-primary">
            Поздравляем! Теперь вы знаете еще один бесполезный факт! 🎉
          </Typography.H3>
        )}
      </main>

      <footer className="mt-16 text-center">
        <Typography.Muted>
          Эти факты не сделают вас умнее, но зато теперь есть о чем поговорить!
        </Typography.Muted>
      </footer>
    </div>
  );
}