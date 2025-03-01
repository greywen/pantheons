import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

export type ChatModels =
    'grok-3'
    | 'grok-2-latest'
    | 'grok-2-vision-latest';

export interface XAIChatCompletionCreateParamsStreaming
    extends ChatCompletionCreateParamsStreaming {
    model: ChatModels | (string & {});
}
