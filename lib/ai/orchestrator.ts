import { GoogleGenerativeAI } from "@google/generative-ai";
import type { EditScript } from "@/lib/types/edit-script";

const client = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function compileInstruction(
  instruction: string,
  snapshot?: unknown,
  tokens?: unknown,
): Promise<EditScript> {
  const model = client.getGenerativeModel({ model: "gemini-2.5-pro" });
  const parts: any[] = [{ text: instruction }];
  if (snapshot) parts.push({ text: JSON.stringify(snapshot) });
  if (tokens) parts.push({ text: JSON.stringify(tokens) });

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    responseMimeType: "application/json",
  });

  const text = result.response?.text();
  return text ? (JSON.parse(text) as EditScript) : { ops: [] };
}

export async function generateImage(prompt: string): Promise<string | undefined> {
  const model = client.getGenerativeModel({
    model: "gemini-2.5-flash-image-preview",
  });

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  const data = result.response?.candidates?.[0]?.content?.parts?.find(
    (p: any) => p.inlineData,
  )?.inlineData?.data;
  return data;
}

export async function editImage(
  prompt: string,
  image: string,
): Promise<string | undefined> {
  const model = client.getGenerativeModel({
    model: "gemini-2.5-flash-image-preview",
  });

  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt },
          { inlineData: { mimeType: "image/png", data: image } },
        ],
      },
    ],
  });

  const data = result.response?.candidates?.[0]?.content?.parts?.find(
    (p: any) => p.inlineData,
  )?.inlineData?.data;
  return data;
}

export async function chartDesign(
  profile: unknown,
  goal: string,
  constraints?: unknown,
): Promise<EditScript> {
  const model = client.getGenerativeModel({ model: "gemini-2.5-pro" });
  const parts: any[] = [
    { text: `Profile:${JSON.stringify(profile)}` },
    { text: `Goal:${goal}` },
  ];
  if (constraints) parts.push({ text: `Constraints:${JSON.stringify(constraints)}` });

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    responseMimeType: "application/json",
  });

  const text = result.response?.text();
  return text ? (JSON.parse(text) as EditScript) : { ops: [] };
}

