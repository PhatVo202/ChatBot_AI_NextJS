import { NextResponse } from "next/server";

import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const POST = async (req: Request) => {
  const body = await req.json();

  const model = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: body.content,
  });

  return NextResponse.json({ message: ` ${model.text}` });
};
