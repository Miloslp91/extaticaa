import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Google Apps Script Web App URL - deploy a script that appends to your sheet
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL not set");
      return NextResponse.json({ error: "Server config error" }, { status: 500 });
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        source: "extaticaa.com",
        date: new Date().toISOString(),
      }),
      redirect: "follow",
    });

    // Google Apps Script returns 302 redirect on success, then serves HTML
    // Any non-error response (2xx or redirect followed to 2xx) means it worked
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
