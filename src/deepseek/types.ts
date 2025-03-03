import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

type ChatModels = 'deepseek-chat' | 'deepseek-reasoner';

export interface DeepSeekChatCompletionCreateParamsStreaming
  extends ChatCompletionCreateParamsStreaming {
  model: ChatModels | (string & {});
}
