import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

type QWenMax =
  | 'qwen-max-latest'
  | 'qwen-max'
  | 'qwen-max-0125'
  | 'qwen2.5-Max'
  | 'qwen-max-0919'
  | 'qwen-max-0428'
  | 'qwen-max-0403'
  | 'qwen-max-0107';
type QWenPlus =
  | 'qwen-plus-latest'
  | 'qwen-plus'
  | 'qwen-plus-0125'
  | 'qwen-plus-0112'
  | 'qwen-plus-1220'
  | 'qwen-plus-1127'
  | 'qwen-plus-1125'
  | 'qwen-plus-0919'
  | 'qwen-plus-0806'
  | 'qwen-plus-0723​'
  | 'qwen-plus-0624'
  | 'qwen-plus-0206';
type QWenTurbo = 'qwen-turbo-latest' | 'qwen-turbo';
type QWenLong = 'qwen-long';
type QWenOmni =
  | 'qwen-omni-turbo-latest'
  | 'qwen-omni-turbo'
  | 'qwen-omni-turbo-2025-01-19';
type QWenVL = 'qwen-vl-max-latest' | 'qwen-vl-max' | 'qwen-vl-max-0125';
type QWenORC = 'qwen-vl-ocr-latest' | 'qwen-vl-ocr' | 'qwen-vl-ocr-1028';
type QWenAudio =
  | 'qwen-audio-turbo-latest'
  | 'qwen-audio-turbo'
  | 'qwen-audio-turbo-1204'
  | 'qwen-audio-turbo-0807';
type QWenASR =
  | 'qwen-audio-asr-latest'
  | 'qwen-audio-asr'
  | 'qwen-audio-asr-1204';
type QWenMath = 'qwen-math-plus-latest' | 'qwen-math-plus';
type QWenCoder = 'qwen-coder-plus-latest' | 'qwen-coder-plus';

export type ChatModels =
  | QWenMax
  | QWenPlus
  | QWenTurbo
  | QWenLong
  | QWenOmni
  | QWenVL
  | QWenORC
  | QWenAudio
  | QWenASR
  | QWenMath
  | QWenCoder;

export interface DashScopeChatCompletionCreateParamsStreaming
  extends ChatCompletionCreateParamsStreaming {
  enable_search?: boolean;
  model: ChatModels | (string & {});
}




type MessageRole = 'system' | 'user' | 'assistant';

type ImageContent = {
  image_url: {
    url: string;
  };
};

type AudioContent = {
  input_audio: {
    data: string;
    format: string;
  };
};

type VideoContent = {
  video: string[];
};

type MessageContent = {
  type: 'text' | 'image_url' | 'video' | string;
  content: ImageContent | AudioContent | VideoContent | string;
};

type Message = {
  role: MessageRole;
  content: MessageContent | string;
};

type Modalities = ['text' | 'audio'] | ['text'];

type Audio = {
  voice: 'Cherry';
  format: 'wav';
};

type StreamOptions = {
  include_usage: boolean;
};

type ResponseFormat = {
  type: 'text' | 'json_object';
};

type Tools = {
  type: string;
  function: {
    name: string;
    description: string;
    parameters: object;
  };
};

export interface CreateOptions {
  model:
    | QWenMax
    | QWenPlus
    | QWenTurbo
    | QWenLong
    | QWenOmni
    | QWenVL
    | QWenAudio
    | QWenASR
    | QWenMath
    | QWenCoder;
  messages: Message[];
  modalities?: Modalities[];
  audio?: Audio;
  stream: true;
  stream_options?: StreamOptions;
  temperature?: number;
  top_p?: number;
  presence_penalty?: number;
  response_format?: ResponseFormat;
  max_tokens?: number;
  n?: number;
  seed?: number;
  stop?: string | string[];
  tools?: Tools[];
  tool_choice?: string | object;
  parallel_tool_calls?: boolean;
  translation_options?: object;
  enable_search?: boolean;
  'X-DashScope-DataInspection'?: string;
}

type ChatChoices = {
  finish_reason: string;
  index: number;
  logprobs: object | null;
  message: object;
};

type ToolCalls = {
  id: string;
  type: string;
  function: { name: string; arguments: string };
  index: number;
};

type ChoicesMessage = {
  content: string;
  refusal: string | null;
  role: string | 'assistant';
  audio: object | null;
  tool_calls: ToolCalls;
};

type PromptTokensDetails = {
  audio_tokens: number | null;
  cached_tokens: number;
  text_tokens: number;
  video_tokens: number;
  image_tokens: number;
};

type ChatUsage = {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
  completion_tokens_details: object | null;
  prompt_tokens_details: PromptTokensDetails;
};

type Chat = {
  id: string;
  choices: ChatChoices[];
  created: number;
  model: string;
  object: string | 'chat.completion';
  service_tier: string | null;
  system_fingerprint: string | null;
  usage: ChatUsage;
};

type CompletionTokensDetails = {};

type ChatChunk = {
  id: string;
  choices: ChatChoices[];
  created: number;
  model: string;
  object: string | 'chat.completion.chunk';
  service_tier: string | null;
  system_fingerprint: string | null;
  usage: ChatUsage;
};
