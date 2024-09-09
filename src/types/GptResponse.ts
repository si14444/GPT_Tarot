export interface OpenAIResponse {
  choices: Array<{
    finish_reason: string;
    index: number;
    logprobs: any;
    message: {
      content: string;
    };
    refusal: any;
    role: string;
  }>;
  created: number;
  id: string;
  model: string;
  object: string;
}
