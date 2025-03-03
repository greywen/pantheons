import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

export type SiliconFlowText =
  'deepseek-ai/DeepSeek-R1'
  | 'Pro/deepseek-ai/DeepSeek-R1'
  | 'deepseek-ai/DeepSeek-V3'
  | 'Pro/deepseek-ai/DeepSeek-V3'
  | 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B'
  | 'deepseek-ai/DeepSeek-R1-Distill-Qwen-14B'
  | 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B'
  | 'deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B'
  | 'Pro/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B'
  | 'Pro/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B'
  | 'deepseek-ai/DeepSeek-V2.5'
  | 'Qwen/Qwen2.5-72B-Instruct-128K'
  | 'Qwen/Qwen2.5-72B-Instruct'
  | 'Qwen/Qwen2.5-32B-Instruct'
  | 'Qwen/Qwen2.5-14B-Instruct'
  | 'Qwen/Qwen2.5-7B-Instruct'
  | 'Qwen/Qwen2.5-Coder-32B-Instruct'
  | 'Qwen/Qwen2.5-Coder-7B-Instruct'
  | 'Qwen/Qwen2-7B-Instruct'
  | 'Qwen/Qwen2-1.5B-Instruct'
  | 'Qwen/QwQ-32B-Preview'
  | 'TeleAI/TeleChat2'
  | 'THUDM/glm-4-9b-chat'
  | 'Vendor-A/Qwen/Qwen2.5-72B-Instruct'
  | 'internlm/internlm2_5-7b-chat'
  | 'internlm/internlm2_5-20b-chat'
  | 'Pro/Qwen/Qwen2.5-7B-Instruct'
  | 'Pro/Qwen/Qwen2-7B-Instruct'
  | 'Pro/Qwen/Qwen2-1.5B-Instruct'
  | 'Pro/THUDM/chatglm3-6b'
  | 'Pro/THUDM/glm-4-9b-chat';

type SiliconFlowVL =
  | 'Qwen/QVQ-72B-Preview'
  | 'deepseek-ai/deepseek-vl2'
  | 'Qwen/Qwen2-VL-72B-Instruct'
  | 'OpenGVLab/InternVL2-26B'
  | 'Pro/Qwen/Qwen2-VL-7B-Instruct'
  | 'Pro/OpenGVLab/InternVL2-8B'
  | 'TeleAI/TeleMM';

type ChatModels = SiliconFlowText | SiliconFlowVL;

export interface SiliconFlowChatCompletionCreateParamsStreaming
  extends ChatCompletionCreateParamsStreaming {
  model: ChatModels | (string & {});
}
