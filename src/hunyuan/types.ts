import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

export type ChatModels =
  | 'hunyuan-TurboS'
  | 'hunyuan-turbo'
  | 'hunyuan-large'
  | 'hunyuan-large-longcontext'
  | 'hunyuan-standard'
  | 'hunyuan-standard-256K'
  | 'hunyuan-translation'
  | 'hunyuan-translation-lite'
  | 'hunyuan-role'
  | 'hunyuan-functioncall'
  | 'hunyuan-code'
  | 'hunyuan-turbo-vision'
  | 'hunyuan-vision'
  | 'hunyuan-embedding';

export interface HunYuanChatCompletionCreateParamsStreaming
  extends ChatCompletionCreateParamsStreaming {
  extra_body?: object;
  model: ChatModels | (string & {});
}
