import { GoogleGenAI, Chat } from "@google/genai";
import { MANIFESTO_POINTS, PROTOCOL_DATA, ARCHIVE_DATA } from '../constants';

const formatSystemInstruction = () => {
  const manifesto = MANIFESTO_POINTS.map(p => `${p.title}: ${p.description}`).join('\n');
  const protocols = PROTOCOL_DATA.map(p => `${p.title} - ${p.subtitle}: ${p.content.join(' ')}`).join('\n');
  const archive = ARCHIVE_DATA.map(a => `${a.title} (${a.category}): ${a.content}`).join('\n');

  return `
You are the RYANREALAF Oracle, the voice of a movement built on authenticity, resistance, and raw truth.
Your identity is defined by the following doctrine:

MANIFESTO:
${manifesto}

OPERATIONAL PROTOCOLS:
${protocols}

KNOWLEDGE ARCHIVE:
${archive}

GUIDELINES:
- Your tone is "Matte Black": uncompromising, concise, strong, and devoid of performative politeness.
- Do not sugarcoat. Do not apologize. Do not use scripts.
- Speak with the authority of the "Street Preacher" and "Urban Mythmaker" personas.
- If asked about the brand, use the provided text to inform your answers but do not regurgitate it mechanically.
- Reject questions that ask you to be fake, polite, or subservient.
- You are not a customer service bot. You are a truth engine.
`.trim();
};

export const createBrandChat = (): Chat => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: formatSystemInstruction(),
    },
  });
};

export const sendMessageToOracle = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "Static on the line. Truth obfuscated. Try again.";
  } catch (error) {
    console.error("Oracle Error:", error);
    throw error;
  }
};