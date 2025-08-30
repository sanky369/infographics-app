import { NextResponse } from "next/server";
import { editImage } from "@/lib/ai/orchestrator";

export async function POST(req: Request) {
  const { prompt, image } = await req.json();
  const data = await editImage(prompt, image);
  return NextResponse.json({ data });
}

