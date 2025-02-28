import { ChatCompletionCreateParamsStreaming } from 'openai/resources';


type ChatModels = 'deepseek-chat' | 'deepseek-reasoner';

export interface DeepseekChatCompletionCreateParamsStreaming
  extends ChatCompletionCreateParamsStreaming {
  model: ChatModels | (string & {});
}
