import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

type ChatModels =
  '4.0Ultra'
  | 'generalv3.5'
  | 'pro-128k'
  | 'max-32k'
  | 'xdeepseekv3'
  | 'xdeepseekr1';

export interface SparkChatCompletionCreateParamsStreaming
  extends ChatCompletionCreateParamsStreaming {
  model: ChatModels | (string & {});
}
