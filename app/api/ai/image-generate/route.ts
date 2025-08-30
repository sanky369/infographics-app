import { NextResponse } from "next/server";
import { generateImage } from "@/lib/ai/orchestrator";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const data = await generateImage(prompt);
  return NextResponse.json({ data });
}

