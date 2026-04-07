"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "vi") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLocale("en")}
        className={`uppercase tracking-wider transition-colors ${
          locale === "en" ? "text-accent font-medium" : "text-text-muted hover:text-text"
        }`}
      >
        EN
      </button>
      <span className="text-earth-light">/</span>
      <button
        onClick={() => switchLocale("vi")}
        className={`uppercase tracking-wider transition-colors ${
          locale === "vi" ? "text-accent font-medium" : "text-text-muted hover:text-text"
        }`}
      >
        VI
      </button>
    </div>
  );
}
