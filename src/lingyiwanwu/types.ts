import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

export type ChatModels =
    "yi-lightning"
    | "yi-large"
    | "yi-large-fc"
    | "yi-medium"
    | "yi-vision"
    | "yi-vision-solution"
    | "yi-vision-v2"
    | "yi-medium-200k"
    | "yi-spark"
    | "yi-large-preview";

export interface LingYiWanWuChatCompletionCreateParamsStreaming
    extends ChatCompletionCreateParamsStreaming {
    model: ChatModels | (string & {});
}
