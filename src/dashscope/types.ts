import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

type QWenMax =
  'qwen-max-latest'
  | 'qwen-max'
  | 'qwen-max-0125'
  | 'qwen2.5-Max'
  | 'qwen-max-0919'
  | 'qwen-max-0428'
  | 'qwen-max-0403'
  | 'qwen-max-0107';
type QWenPlus =
  'qwen-plus-latest'
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
  'qwen-omni-turbo-latest'
  | 'qwen-omni-turbo'
  | 'qwen-omni-turbo-2025-01-19';
type QWenVL = 'qwen-vl-max-latest' | 'qwen-vl-max' | 'qwen-vl-max-0125';
type QWenORC = 'qwen-vl-ocr-latest' | 'qwen-vl-ocr' | 'qwen-vl-ocr-1028';
type QWenAudio =
  'qwen-audio-turbo-latest'
  | 'qwen-audio-turbo'
  | 'qwen-audio-turbo-1204'
  | 'qwen-audio-turbo-0807';
type QWenASR =
  'qwen-audio-asr-latest'
  | 'qwen-audio-asr'
  | 'qwen-audio-asr-1204';
type QWenMath = 'qwen-math-plus-latest' | 'qwen-math-plus';
type QWenCoder = 'qwen-coder-plus-latest' | 'qwen-coder-plus';

export type ChatModels =
  QWenMax
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