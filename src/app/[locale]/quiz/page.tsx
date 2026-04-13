"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

type MoverType = "wild" | "flow" | "root" | "spark";

const questions = [
  {
    q: "You hear music start playing. What do you do first?",
    options: [
      { text: "Jump in and let your whole body go", type: "wild" as MoverType },
      { text: "Close your eyes and sway slowly", type: "flow" as MoverType },
      { text: "Feel the ground, plant your feet", type: "root" as MoverType },
      { text: "Look around, smile, grab someone's hand", type: "spark" as MoverType },
    ],
  },
  {
    q: "Your favorite place in nature?",
    options: [
      { text: "Deep jungle, wild and untamed", type: "wild" as MoverType },
      { text: "A river, always moving, always changing", type: "flow" as MoverType },
      { text: "A mountain, solid and still", type: "root" as MoverType },
      { text: "The beach at sunset, warm and open", type: "spark" as MoverType },
    ],
  },
  {
    q: "What kind of music moves you most?",
    options: [
      { text: "Tribal drums, fast and loud", type: "wild" as MoverType },
      { text: "Ambient, layered, like waves", type: "flow" as MoverType },
      { text: "Deep bass, slow and heavy", type: "root" as MoverType },
      { text: "Upbeat, fun, makes you smile", type: "spark" as MoverType },
    ],
  },
  {
    q: "After a long week, you need...",
    options: [
      { text: "To scream, shake, release everything", type: "wild" as MoverType },
      { text: "To breathe, stretch, let go slowly", type: "flow" as MoverType },
      { text: "Silence, stillness, just to sit with yourself", type: "root" as MoverType },
      { text: "Laughter, friends, something fun", type: "spark" as MoverType },
    ],
  },
  {
    q: "In a group, you are usually the one who...",
    options: [
      { text: "Brings the energy, gets everyone moving", type: "wild" as MoverType },
      { text: "Holds space, makes everyone feel safe", type: "flow" as MoverType },
      { text: "Stays calm when everything gets chaotic", type: "root" as MoverType },
      { text: "Makes people laugh and connects strangers", type: "spark" as MoverType },
    ],
  },
];

const results: Record<MoverType, { emoji: string; title: string; description: string; element: string }> = {
  wild: {
    emoji: "🔥",
    title: "The Wild One",
    description: "You move like fire. When the drums hit, your body knows what to do before your mind catches up. You don't hold back. You are raw energy, tribal instinct, and pure release. The dance floor comes alive when you step on it.",
    element: "You would love our live tribal drumming and fire performances.",
  },
  flow: {
    emoji: "🌊",
    title: "The Flow",
    description: "You move like water. Soft, powerful, always finding the path. Eyes closed, body liquid, you disappear into the music and come back transformed. You remind everyone that surrender is the deepest strength.",
    element: "You would love our cacao ceremonies and Dance Movement Therapy.",
  },
  root: {
    emoji: "🌿",
    title: "The Root",
    description: "You move like earth. Grounded, intentional, every step with purpose. While others fly, you hold the ground. Your presence is the anchor that makes everyone else feel safe enough to let go.",
    element: "You would love our jungle clearing events and breathwork sessions.",
  },
  spark: {
    emoji: "✨",
    title: "The Spark",
    description: "You move like light. Playful, unpredictable, contagious. You turn strangers into friends in seconds. Your gift is joy, and the dance floor needs your energy to remind everyone that movement is play.",
    element: "You would love our community circles and sunset beach gatherings.",
  },
};

export default function QuizPage() {
  const t = useTranslations("quiz");
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<MoverType, number>>({ wild: 0, flow: 0, root: 0, spark: 0 });
  const [result, setResult] = useState<MoverType | null>(null);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleAnswer = (type: MoverType) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const winner = (Object.entries(newScores) as [MoverType, number][]).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
      setResult(winner);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus("loading");
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {}
    setEmailStatus("success");
  };

  const restart = () => {
    setCurrent(0);
    setScores({ wild: 0, flow: 0, root: 0, spark: 0 });
    setResult(null);
    setEmailStatus("idle");
    setEmail("");
  };

  return (
    <section className="section-dark" style={{ paddingTop: "clamp(5rem, 8vw, 10rem)", paddingBottom: "clamp(5rem, 8vw, 10rem)" }}>
      <Container size="narrow">
        {/* Title */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-widest uppercase mb-4 font-mono">
              {t("label")}
            </p>
            <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] text-text mb-6">
              {t("title")}
            </h1>
            <p className="text-text-muted text-lg md:text-xl max-w-[40ch] mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Quiz or Result */}
        {result === null ? (
          <div className="bg-bg-card rounded-2xl border border-vine/10 p-8 md:p-10">
            {/* Progress */}
            <div className="flex gap-2 mb-8">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-1 rounded-full transition-all duration-300"
                  style={{ backgroundColor: i <= current ? "#c8956c" : "#3a5a2e33" }}
                />
              ))}
            </div>

            {/* Question */}
            <p className="text-text-muted text-xs tracking-widest uppercase mb-2">
              {current + 1} / {questions.length}
            </p>
            <h2 className="text-2xl md:text-3xl text-text mb-8 font-heading">
              {questions[current].q}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.type)}
                  className="text-left px-6 py-4 rounded-xl border border-vine/20 text-text hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-bg-card rounded-2xl border border-vine/10 p-8 md:p-12 mb-8">
              <p className="text-6xl mb-6">{results[result].emoji}</p>
              <p className="text-accent text-sm tracking-widest uppercase mb-2">{t("resultLabel")}</p>
              <h2 className="text-3xl md:text-4xl text-text mb-6 font-heading">{results[result].title}</h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6 max-w-[50ch] mx-auto">
                {results[result].description}
              </p>
              <p className="text-accent italic">
                {results[result].element}
              </p>
            </div>

            {/* Email capture */}
            {emailStatus === "success" ? (
              <p className="text-accent text-lg italic mb-8">{t("emailSuccess")}</p>
            ) : (
              <div className="mb-8">
                <p className="text-text mb-4">{t("emailPrompt")}</p>
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 px-4 py-3 bg-bg border border-vine/20 rounded-full text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                  <Button type="submit" disabled={emailStatus === "loading"}>
                    {emailStatus === "loading" ? "..." : t("emailButton")}
                  </Button>
                </form>
              </div>
            )}

            <button onClick={restart} className="text-text-muted hover:text-accent transition-colors text-sm tracking-wider uppercase cursor-pointer">
              {t("retake")}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
