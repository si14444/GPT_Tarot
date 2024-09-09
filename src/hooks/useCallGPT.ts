import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { OpenAIResponse } from "../types/GptResponse";
import { callGPT } from "../api/callGPT";

export function useCallGPT(
  tarot: number[],
  type: string,
  enabled: boolean
): UseQueryResult<OpenAIResponse, Error> {
  const QUERY_KEY = "GetGPT";

  return useQuery({
    queryKey: [QUERY_KEY, tarot, type],
    queryFn: () => callGPT(tarot, type),
    enabled, // enabled 옵션을 사용하여 쿼리 실행을 제어합니다.
  });
}
