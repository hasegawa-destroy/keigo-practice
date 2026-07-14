import { reviewText } from "./gemini.mjs";

export const handler = async (event) => {

    try {
        const body = JSON.parse(event.body);
        const result = await reviewText(body.text);

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };

    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "サーバーエラーが発生しました。",
                error: error.message
            })
        };
    }
};