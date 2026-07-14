import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


export async function reviewText(text) {

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",

        contents: `
あなたは敬語添削AIです。

以下の文章を添削してください。

文章:
${text}
`,

        config: {
            responseMimeType: "application/json",

            responseSchema: {
                type: "OBJECT",
                properties: {
                    corrected: {
                        type: "STRING",
                        description: "敬語として修正した文章"
                    },
                    explanation: {
                        type: "STRING",
                        description: "修正理由"
                    },
                    score: {
                        type: "NUMBER",
                        description: "敬語の評価点（0〜100）"
                    }
                },
                required: [
                    "corrected",
                    "explanation",
                    "score"
                ]
            }
        }
    });


    return JSON.parse(response.text);
}