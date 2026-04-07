"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import EmailSignup from "@/components/EmailSignup";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/jungle-2.jpg"
            alt="Ecstatic dance gathering by the ocean"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/60 to-bg/95" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 md:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="max-w-[680px]">
              <ScrollReveal>
                <p className="text-accent text-sm tracking-widest uppercase mb-4 font-mono">
                  Da Nang & Hoi An, Vietnam
                </p>
                <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] text-text mb-6 [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]">
                  {t("subtitle")}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-text/70 text-lg md:text-xl mb-8 max-w-[45ch] [text-shadow:_0_1px_10px_rgba(0,0,0,0.4)]">
                  {t("description")}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p className="text-text/40 text-sm italic mb-8 max-w-[45ch]">
                  Where the jungle meets the ocean. Where strangers become tribe.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/events">
                    <Button size="lg">{t("cta_events")}</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="secondary" size="lg">{t("cta_discover")}</Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero image right */}
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-h-[70vh]">
                <Image
                  src="/images/jungle-3.jpg"
                  alt="Tribal dance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ─── ABOUT PREVIEW ─── */}
      <section className="section-warm py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/jungle-1.jpg"
                  alt="Connection with nature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-accent text-sm tracking-widest uppercase mb-4 font-mono">
                  {t("about_link")}
                </p>
                <h2 className="text-3xl md:text-[2.75rem] lg:text-[3.25rem] leading-tight text-text mb-6">
                  {t("about_title")}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="text-text-muted text-lg md:text-xl mb-8 max-w-[45ch] space-y-4">
                  <p>{t("about_p1")}</p>
                  <p>{t("about_p2")}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <Link href="/about">
                  <Button variant="ghost">{t("about_link")} &rarr;</Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>


      {/* ─── WHAT IS ECSTATIC DANCE ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/jungle-4.jpg"
            alt="Wild jungle"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bg/85" />
        </div>

        <Container className="relative z-10">
          <SectionHeading
            headline={t("what_title")}
            subheadline={t("what_description")}
          />

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: "🌿", title: t("pillar_nature"), desc: t("pillar_nature_desc") },
              { icon: "🔥", title: t("pillar_movement"), desc: t("pillar_movement_desc") },
              { icon: "🤝", title: t("pillar_community"), desc: t("pillar_community_desc") },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-bg/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-vine/20 hover:border-accent/30 hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300">
                  <span className="text-4xl mb-6 block">{item.icon}</span>
                  <h3 className="text-xl font-medium mb-4 text-text">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>


      {/* ─── UPCOMING EVENTS ─── */}
      <section className="section-warm py-24 md:py-32">
        <Container size="narrow">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-[2.75rem] lg:text-[3.25rem] leading-tight text-text mb-4">
                {t("events_title")}
              </h2>
              <p className="text-text-muted text-lg md:text-xl mb-8 max-w-[40ch] mx-auto">
                {t("events_subtitle")}
              </p>
              <Link href="/events">
                <Button size="lg">{t("events_cta")}</Button>
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ─── INSTAGRAM FEED ─── */}
      <section className="section-dark py-24 md:py-32">
        <Container>
          <SectionHeading
            headline={t("ig_title")}
            subheadline="@extaticaa"
          />
          <InstagramFeed />
        </Container>
      </section>


      {/* ─── EMAIL SIGNUP ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/jungle-2.jpg"
            alt="Jungle canopy"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bg/85" />
        </div>

        <Container size="narrow" className="relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl leading-tight text-text mb-4">
                {t("signup_title")}
              </h2>
              <p className="text-text-muted text-base md:text-lg mb-8 max-w-[40ch] mx-auto">
                {t("signup_subtitle")}
              </p>
              <EmailSignup />
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
