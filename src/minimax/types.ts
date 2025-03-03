import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

export type ChatModels = 'minimax-text-01' | 'abab6.5s-chat' | 'deepseek-r1';

export interface MiniMaxChatCompletionCreateParamsStreaming
  extends ChatCompletionCreateParamsStreaming {
  model: ChatModels | (string & {});
}
