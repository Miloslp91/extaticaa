"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const team = [
  {
    name: "M Jay",
    role: "Founder / DJ / Saxophonist",
    image: "/images/team-mjay.jpg",
    bio: "Creative entrepreneur, saxophonist, and community architect based in Da Nang. Founder of Erosa and visionary behind Extaticaa, seamlessly integrating live performance with conscious movement. Through the \"Life of Da Nang\" platform, M Jay bridges wellness, nightlife, and community through high-end, transformative experiences.",
  },
  {
    name: "Chi Phan",
    role: "Event Producer / Creative Collaboration",
    image: "/images/team-chi.jpg",
    bio: "Over 20 years organising original events of varied nature and scale. Known in the Hoi An community for hosting creative experiences promoting art, craft and local produce. Experienced in business consulting, project management and tourguiding. Her brand: Creative Collaboration by Chi The Change.",
  },
  {
    name: "Natasha",
    role: "Dance-Movement Therapy / Plant Medicine",
    image: "/images/team-natasha.jpg",
    bio: "Dance-movement therapy facilitator, plant medicine worker, master of kundalini activations and theta healing modalities. With 6 years of experience sharing shamanic practices, she dances not how one 'should' move, but to remember herself. She helps people reconnect with their bodies, release stored emotions, and find soulful connection.",
  },
  {
    name: "DJ Kalisa",
    role: "DJ / Founder of Sri Lanka Ecstatic Dance",
    image: "/images/team-kalisa.jpg",
    bio: "Multi-genre artist, mentor, and founder of Sri Lanka Ecstatic Dance. Known for soulful, \"juicy,\" and magnetic sets, she has led transformative dance journeys across Russia and Southeast Asia. Now based in Vietnam, Kalisa performs internationally while mentoring the next generation of DJs in space-holding and embodied movement.",
  },
  {
    name: "Hua Luong",
    role: "DJ / Founder of Salt",
    image: "/images/team-hua.jpg",
    bio: "Entrepreneur from Hanoi with a deep love of the arts and community connection. Through carefully curated sets, Hua brings folk-inspired sounds that carry a sense of healing and gentle harmony. Founder of Salt and many other locations throughout Hoi An.",
  },
  {
    name: "Thao Dang",
    role: "Tantric Love Coach / Movement Alchemist",
    image: "/images/team-thao.jpg",
    bio: "Tantric love coach, embodiment guide, and movement alchemist devoted to awakening the sacred through the body. With trainings in Tantra, Shamanic rituals, energy healing, and Somatic embodiment, she weaves presence, love, and sensuality into every experience. Recently infusing her love and work into the music.",
  },
  {
    name: "Tommy",
    role: "Photographer / Cinematographer",
    image: "/images/team-tommy.jpg",
    bio: "Photographer and cinematographer in Da Nang, drawn to capturing authentic moments of expression and connection. With a background in environmental design and interest in alternative living, he is developing a project to create real-time visuals for live performances and journeys like Ecstatic Dance.",
  },
  {
    name: "Judith",
    role: "Hula Hoop Performer / Aerial Artist",
    image: "/images/team-judith.jpg",
    bio: "Hula hoop performer, model, and aerial hoop addict. Her work lives at the intersection of movement, artistry, and physical discipline, a practice she has been building for over ten years. Whether in front of a camera, in the air, or on the ground, her performances blend clean technique with plenty of personality and a touch of disco sparkle.",
  },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero */}
      <section className="section-dark py-32 md:py-40">
        <Container size="narrow">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-accent text-sm tracking-widest uppercase mb-4 font-mono">
                Extaticaa
              </p>
              <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] text-text">
                {t("title")}
              </h1>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Story */}
      <section className="section-warm py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/jungle-2.jpg"
                  alt="Ecstatic dance gathering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-[2.75rem] leading-tight text-text mb-6">
                  {t("story_title")}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="text-text-muted text-base md:text-lg space-y-4 leading-relaxed">
                  <p>{t("story_p1")}</p>
                  <p>{t("story_p2")}</p>
                  <p>{t("story_p3")}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-dark py-24 md:py-32">
        <Container>
          <SectionHeading headline={t("values_title")} />

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🌿", title: t("value_1_title"), desc: t("value_1_desc") },
              { icon: "🕊", title: t("value_2_title"), desc: t("value_2_desc") },
              { icon: "🌍", title: t("value_3_title"), desc: t("value_3_desc") },
              { icon: "🔥", title: t("value_4_title"), desc: t("value_4_desc") },
            ].map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-bg-card p-8 rounded-2xl border border-vine/10 hover:border-accent/20 hover:translate-y-[-2px] hover:shadow-md transition-all duration-300">
                  <span className="text-2xl mb-4 block">{val.icon}</span>
                  <h3 className="text-xl font-medium mb-3 text-text">{val.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="section-warm py-24 md:py-32">
        <Container size="wide">
          <SectionHeading
            headline={t("team_title")}
            subheadline="The people who hold the space, set the sound, and keep the fire burning."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-medium text-text">{member.name}</h3>
                      <p className="text-accent text-xs tracking-wider">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
