"use client";

import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className="elfsight-app-f35d4bf0-bcfa-4d17-b2e1-b8cbc8eaa38f" data-elfsight-app-lazy />
    </div>
  );
}
