"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import EmailSignup from "@/components/EmailSignup";

type EventLink = {
  label: string;
  url: string;
};

type EventItem = {
  id: number;
  date: string;
  title: string;
  location: string;
  description: string;
  time: string;
  links: EventLink[];
  image: string;
};

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    date: "2026-04-25",
    title: "The Jungle Tribe: Ecstatic Dance & Cacao Ritual",
    location: "Da Nang",
    description: "A multisensory homecoming. Heart-opening cacao ritual with Erosa Chocolate, Dance Movement Therapy with Natasha, a sonic odyssey by DJ Kalisa & M Jay, live tribal drumming, and an elemental fire finale under the stars.",
    time: "16:30 - 21:30",
    links: [
      { label: "Get Tickets", url: "https://www.ticketmelon.com/extaticaa/JUNGLE" },
      { label: "Facebook Event", url: "https://www.facebook.com/events/extaticaa" },
    ],
    image: "/images/event-jungle-tribe.png",
  },
];

const pastEvents: EventItem[] = [
  {
    id: 100,
    date: "2026-03-28",
    title: "Ecstatic Dance & Cacao Ritual at the Beach",
    location: "Da Nang",
    description: "A night of raw movement, community, and elemental connection. Heart-opening cacao ceremony with Erosa Chocolate, Dance Movement Therapy by Natasha, sets by M Jay & Hua Luong, live drumming, and fire performances. A safe, sober, phone-free space for radical freedom.",
    time: "Evening",
    links: [],
    image: "/images/event-01.jpg",
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: date.getDate().toString().padStart(2, "0"),
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
  };
}

export default function EventsPage() {
  const t = useTranslations("events");

  return (
    <>
      {/* Hero */}
      <section className="section-dark py-32 md:py-40">
        <Container size="narrow">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-accent text-sm tracking-widest uppercase mb-4 font-mono">
                Da Nang & Hoi An
              </p>
              <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] text-text mb-6">
                {t("title")}
              </h1>
              <p className="text-text-muted text-lg md:text-xl max-w-[40ch] mx-auto">
                {t("subtitle")}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Events List */}
      <section className="section-warm section-spacing">
        <Container>
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">{t("noEvents")}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {upcomingEvents.map((event, i) => {
                const date = formatDate(event.date);
                return (
                  <ScrollReveal key={event.id} delay={i * 0.1}>
                    <article className="group bg-bg-card rounded-2xl overflow-hidden border border-vine/10 hover:border-accent/20 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
                      <div className="md:w-80 h-56 md:h-auto relative shrink-0 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      </div>
                      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start gap-5 mb-4">
                            <div className="text-center shrink-0">
                              <div className="text-3xl font-heading font-semibold text-accent leading-none">
                                {date.day}
                              </div>
                              <div className="text-xs tracking-widest text-text-muted uppercase">
                                {date.month}
                              </div>
                            </div>
                            <div>
                              <h2 className="text-2xl font-medium text-text mb-2">
                                {event.title}
                              </h2>
                              <div className="flex items-center gap-4 text-sm text-text-muted">
                                <span>{event.location}</span>
                                <span className="text-vine">|</span>
                                <span>{event.time}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-text-muted text-sm leading-relaxed mb-6">
                            {event.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {event.links.map((link, j) => (
                            <Button key={j} href={link.url} size="default" variant={j === 0 ? "primary" : "secondary"}>
                              {link.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="section-dark section-spacing">
          <Container>
            <SectionHeading headline={t("pastTitle")} />
            <div className="flex flex-col gap-8">
              {pastEvents.map((event, i) => {
                const date = formatDate(event.date);
                return (
                  <ScrollReveal key={event.id} delay={i * 0.1}>
                    <article className="group bg-bg-card rounded-2xl overflow-hidden border border-vine/10 flex flex-col md:flex-row opacity-80">
                      <div className="md:w-80 h-56 md:h-auto relative shrink-0 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      </div>
                      <div className="flex-1 p-6 md:p-8">
                        <div className="flex items-start gap-5 mb-4">
                          <div className="text-center shrink-0">
                            <div className="text-3xl font-heading font-semibold text-text-muted leading-none">
                              {date.day}
                            </div>
                            <div className="text-xs tracking-widest text-text-muted uppercase">
                              {date.month}
                            </div>
                          </div>
                          <div>
                            <h2 className="text-2xl font-medium text-text mb-2">
                              {event.title}
                            </h2>
                            <div className="flex items-center gap-4 text-sm text-text-muted">
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Notify */}
      <section className="section-dark section-spacing">
        <Container size="narrow">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl leading-tight text-text mb-4">
                {t("notify_title")}
              </h2>
              <p className="text-text-muted text-base md:text-lg mb-8 max-w-[40ch] mx-auto">
                {t("notify_subtitle")}
              </p>
              <EmailSignup />
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
