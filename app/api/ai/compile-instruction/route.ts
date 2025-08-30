import { NextResponse } from "next/server";
import { compileInstruction } from "@/lib/ai/orchestrator";

export async function POST(req: Request) {
  const { instruction, snapshot, tokens } = await req.json();
  const script = await compileInstruction(instruction, snapshot, tokens);
  return NextResponse.json(script);
}

