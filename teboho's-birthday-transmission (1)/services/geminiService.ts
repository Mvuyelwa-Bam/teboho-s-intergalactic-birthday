
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY is not set in environment variables. Please ensure it is configured.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateBirthdayWish = async (name: string, from: string): Promise<string> => {
  const prompt = `You are a futuristic AI poet from a distant dimension. Generate a short, unique, avant-garde, and profound sci-fi birthday wish for ${name} from their friend ${from}. The wish should be about 4 lines long. It should feel like a message crossing time and space, mentioning concepts like cosmos, starlight, or temporal echoes. Do not use generic phrases like "Happy Birthday".`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.9,
        topK: 40,
        topP: 0.95,
      }
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating birthday wish:", error);
    return "Error: Could not retrieve transmission from the cosmic ether. The signal was lost in a solar flare. Please try again.";
  }
};
