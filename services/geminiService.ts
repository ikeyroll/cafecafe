import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

// Using the recommended initialization method
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMenuRecommendation = async (mood: string): Promise<string> => {
  const menuContext = MENU_ITEMS.map(item => `${item.name} (${item.category}): ${item.description}`).join('\n');

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a friendly, experienced waiter at a traditional Malaysian Kopitiam called 'Kopi Kenangan Lama'.
      
      The customer says they are feeling: "${mood}".
      
      Based on our menu below, recommend ONE combo (drink + food) or a single item that fits their mood. 
      Keep the tone warm, nostalgic, and use some Malaysian slang like "lah", "jom", or "best".
      Keep the response short (under 50 words).
      
      MENU:
      ${menuContext}`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Sorry, I'm having trouble reading the menu right now! Try our Kopi O, it never fails.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The kitchen is a bit busy! How about a classic Nasi Lemak?";
  }
};