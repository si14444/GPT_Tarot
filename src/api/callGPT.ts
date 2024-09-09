import { OpenAIResponse } from "../types/GptResponse";
import getMajorArcanaName from "../utils/getMajorArcanaName";

export const callGPT = async (
  tarot: number[],
  type: string
): Promise<OpenAIResponse | null> => {
  const apiKey = import.meta.env.VITE_OPENAIAPI;
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `타로, ${type}, 3장, 메이저 아르카나${getMajorArcanaName(
              tarot[0]
            )},메이저 아르카나${getMajorArcanaName(
              tarot[1]
            )},메이저 아르카나${getMajorArcanaName(
              tarot[2]
            )}, 5줄 이상, 카드 하나하나 분석 없이, 종합적으로`,
          },
          {
            role: "assistant",
            content: `${type}을 종합적으로 해석한 결과는 다음과 같습니다.`,
          },
        ],
        temperature: 0.5,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Too Many Requests - Rate limit exceeded");
      } else {
        // 다른 HTTP 오류 처리
        const errorData = await response.json();
        console.error(`Error ${response.status}: ${errorData.error.message}`);
      }
      return null; // 오류 발생 시 null 반환
    }

    const responseData: OpenAIResponse = await response.json();

    return responseData;
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return null; // 오류 발생 시 null 반환
  }
};
