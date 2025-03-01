import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

export type ChatModels =
    'gemini-2.0-flash-thinking-exp'
    | 'gemini-2.0-flash'
    | 'gemini-2.0-flash-lite'
    | 'imagen-3'
    | 'gemini-1.5-flash'
    | 'gemini-1.5-flash-8b'
    | 'gemini-1.5-pro';

export interface GeminiChatCompletionCreateParamsStreaming
    extends ChatCompletionCreateParamsStreaming {
    model: ChatModels | (string & {});
}
