import { NextResponse } from "next/server";
import { chartDesign } from "@/lib/ai/orchestrator";

export async function POST(req: Request) {
  const { profile, goal, constraints } = await req.json();
  const script = await chartDesign(profile, goal, constraints);
  return NextResponse.json(script);
}

