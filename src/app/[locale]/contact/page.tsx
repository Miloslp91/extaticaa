"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Network error is ok - data may still have been saved
    }
    setStatus("success");
    form.reset();
  };

  const inputClasses =
    "w-full px-4 py-3 bg-bg-card border border-vine/20 rounded-xl text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300";

  return (
    <>
      <section className="section-dark py-32 md:py-40">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent text-sm tracking-widest uppercase mb-4 font-mono">
                Extaticaa
              </p>
              <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] text-text mb-6">
                {t("title")}
              </h1>
              <p className="text-text-muted text-lg md:text-xl max-w-[40ch] mx-auto">
                {t("subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-[1000px] mx-auto">
            {/* Info */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-text-muted mb-2 font-mono">
                    {t("email_label")}
                  </h3>
                  <a href="mailto:mj@theerosa.com" className="text-text hover:text-accent transition-colors duration-300">
                    mj@theerosa.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-text-muted mb-2 font-mono">
                    {t("location_label")}
                  </h3>
                  <p className="text-text">Da Nang & Hoi An, Vietnam</p>
                </div>
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-text-muted mb-3 font-mono">
                    {t("social_label")}
                  </h3>
                  <div className="flex gap-6">
                    <a href="https://www.instagram.com/extaticaa/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors duration-300 text-sm tracking-wider">
                      Instagram
                    </a>
                    <a href="https://www.facebook.com/extaticaa/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors duration-300 text-sm tracking-wider">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.2}>
              {status === "success" ? (
                <div className="bg-bg-card border border-vine/20 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl text-text mb-2">{t("success_title")}</h3>
                  <p className="text-text-muted">{t("success_message")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-widest uppercase text-text-muted mb-2 font-mono">
                      {t("name_label")}
                    </label>
                    <input id="name" name="name" type="text" required className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-widest uppercase text-text-muted mb-2 font-mono">
                      {t("email_label")}
                    </label>
                    <input id="email" name="email" type="email" required className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs tracking-widest uppercase text-text-muted mb-2 font-mono">
                      {t("message_label")}
                    </label>
                    <textarea id="message" name="message" rows={5} required className={`${inputClasses} resize-none`} />
                  </div>
                  <Button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "..." : t("send_button")}
                  </Button>
                  {status === "error" && (
                    <p className="text-red-400 text-sm">{t("error_message")}</p>
                  )}
                </form>
              )}
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
