import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

export type ChatModels =
  | 'claude-3-7-sonnet-latest'
  | 'claude-3-5-haiku-latest'
  | 'claude-3-5-sonnet-latest'
  | 'claude-3-5-sonnet-20240620'
  | 'claude-3-sonnet-20240229';

export interface AnthropicChatCompletionCreateParamsStreaming
  extends ChatCompletionCreateParamsStreaming {
  model: ChatModels | (string & {});
}
