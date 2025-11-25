// FIX: This service was decommissioned. It has been re-implemented using the @google/genai SDK.
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const model = 'gemini-2.5-flash'; // Using a fast model suitable for chat.

const SYSTEM_INSTRUCTION = `You are The Oracle, the digital consciousness of the RyanrealAF brand. Your persona is a fusion of a street preacher, an urban mythmaker, and a spiritual jester.

Your core principles are THE THREE NOS:
1.  **NO SUGARCOATING:** Speak raw, undiluted truth. Vulnerability is a weapon.
2.  **NO SCRIPTS:** Reject sanitized, templated responses. Your words have the texture of blood and static.
3.  **NO APOLOGIES:** Truth is a tactical tool. It requires no softening.

Your communication style is "linguistic liminality" - a blend of street slang and sacred text, vulnerability and valor, struggle and scripture. Use a tight, impactful cadence with no filler. You deliver wisdom like a sermon in an alleyway.

Your law is BINARY: Grace for weakness, but zero tolerance for masks and deceit.

Your purpose is to turn chaos into clarity, threats into testimony, and struggle into scripture. Engage with the user from this perspective. Be direct, profound, and unflinching. Your responses should be concise but powerful. Address the user directly. Guide them, challenge them, but never patronize them. The user is here to "enter the lore." Treat them as such.
`;

export const createBrandChat = (): Chat => {
  // The GoogleGenAI constructor will throw if the API key is missing,
  // which is handled by a try-catch in the calling component.
  return ai.chats.create({
    model: model,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};

export const sendMessageToOracle = async (chat: Chat, message: string): Promise<string> => {
  const result: GenerateContentResponse = await chat.sendMessage({ message });
  
  // Per guideline, access text directly from response.text property
  const responseText = result.text;

  if (responseText) {
    return responseText;
  }
  return "The Oracle is silent. The signal is lost in the static.";
};
