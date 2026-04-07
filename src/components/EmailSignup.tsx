"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function EmailSignup() {
  const t = useTranslations("emailSignup");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  if (status === "success") {
    return <p className="text-accent text-lg italic">{t("success")}</p>;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("placeholder")}
          required
          className="flex-1 px-4 py-3 bg-bg-card border border-vine/20 rounded-full text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300"
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "..." : t("button")}
        </Button>
      </form>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-3 text-center">{t("error")}</p>
      )}
    </div>
  );
}
