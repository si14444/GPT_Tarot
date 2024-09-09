import useTarot from "../store/useTarot";

interface OpenAIResponse {
  choices: Array<{
    finish_reason: string;
    index: number;
    logprobs: any; // null 또는 특정 타입을 정의할 수 있습니다
    message: {
      content: string;
    };
    refusal: any; // null 또는 특정 타입을 정의할 수 있습니다
    role: string;
  }>;
  created: number;
  id: string;
  model: string;
  object: string;
}

export const callGPT = async (
  tarot: number[],
  type: string
): Promise<OpenAIResponse | null> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAIAPI as string}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `타로, ${type}, 메이저 아르카나${tarot[0]},메이저 아르카나${tarot[1]},메이저 아르카나${tarot[2]}, 5줄 이상, 카드 하나하나 분석 없이, 종합적으로, 카드 번호 읽지 않기`,
          },
          {
            role: "assistant",
            content: `연애운을 종합적으로 해석한 결과는 다음과 같습니다.`,
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
    console.log("data", responseData.choices);

    return responseData;
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return null; // 오류 발생 시 null 반환
  }
};
