import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

export type ChatModels =
    'llama3.3:latest'
    | 'llama3.2:latest'
    | 'llama3.2-vision:latest'
    | 'deepseek-r1:latest'
    | 'qwen2.5:latest'
    | 'qwen2.5-coder:latest'
    | 'phi4:latest';

export interface OllamaChatCompletionCreateParamsStreaming
    extends ChatCompletionCreateParamsStreaming {
    model: ChatModels | (string & {});
}
