import { ChatCompletionCreateParamsStreaming } from 'openai/resources';

export type ZhiPuText =
    'glm-zero-preview'
    | 'glm-4-plus'
    | 'glm-4-air'
    | 'glm-4-long'
    | 'glm-4-airx'
    | 'glm-4-flashx'
    | 'glm-4-flash'
    | 'glm-4-alltools';

export type ZhiPuVL =
    'glm-4v-plus-0111'
    | 'glm-4v-plus'
    | 'glm-4v'
    | 'glm-4v-flash'
    | 'cogvideox-2'
    | 'cogvideox-flash'
    | 'cogview-4'
    | 'cogview-3-flash';

export type ZhiPuAudio =
    'glm-realtime'
    | 'glm-4-voice';

export type ZhiPuVector =
    'embedding-3'
    | 'embedding-2';

export type ChatModels = ZhiPuText | ZhiPuVL | ZhiPuAudio | ZhiPuVector;

export interface ZhiPuChatCompletionCreateParamsStreaming
    extends ChatCompletionCreateParamsStreaming {
    model: ChatModels | (string & {});
}
