import { ChatCompletionCreateParamsStreaming } from 'openai/resources';


type QianFanText =
  'ernie-4.0-8k-latest'
  | 'ernie-4.0-8k-preview'
  | 'ernie-4.0-8k'
  | 'ernie-4.0-turbo-8k-latest'
  | 'ernie-4.0-turbo-8k-preview'
  | 'ernie-4.0-turbo-8k'
  | 'ernie-4.0-turbo-128k'
  | 'ernie-3.5-8k-preview'
  | 'ernie-3.5-8k'
  | 'ernie-3.5-128k'
  | 'ernie-speed-8k'
  | 'ernie-speed-128k'
  | 'ernie-speed-pro-128k'
  | 'ernie-lite-8k'
  | 'ernie-lite-pro-128k'
  | 'ernie-tiny-8k'
  | 'ernie-char-8k'
  | 'ernie-char-fiction-8k'
  | 'ernie-novel-8k'
  | 'deepseek-v3'
  | 'deepseek-r1'
  | 'deepseek-r1-distill-qwen-32b'
  | 'deepseek-r1-distill-qwen-14b'
  | 'deepseek-r1-distill-qwen-7b'
  | 'deepseek-r1-distill-qwen-1.5b'
  | 'deepseek-r1-distill-llama-70b'
  | 'deepseek-r1-distill-llama-8b'
  | 'deepseek-r1-distill-qianfan-llama-70b'
  | 'deepseek-r1-distill-qianfan-llama-8b';

type QianFanVL = 'deepseek-vl2' | 'deepseek-vl2-small'

type ChatModels = QianFanText | QianFanVL;

export interface QianFanChatCompletionCreateParamsStreaming
  extends ChatCompletionCreateParamsStreaming {
  model: ChatModels | (string & {});
  web_search?: {
    enable: boolean,
    enable_citation: boolean,
    enable_trace: boolean
  }
}
