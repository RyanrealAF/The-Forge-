import { GoogleGenAI, Chat } from "@google/genai";
import { BRAND_SYSTEM_PROMPT } from '../constants';

const getAiClient = () => {
  if (!process.env.API_KEY) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const createBrandChat = (): Chat => {
  const ai = getAiClient();
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: BRAND_SYSTEM_PROMPT,
      temperature: 0.8, // Slightly higher for "Whimsical Edge" and creative flow
      topK: 40,
    },
  });
};

export const sendMessageToOracle = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "...Static...";
  } catch (error) {
    console.error("Oracle Disconnected:", error);
    return "Signal lost. The void is silent right now.";
  }
};