import { ChatCompletionCreateParamsStreaming, ChatCompletionChunk as ChatCompletionChunk$1 } from 'openai/resources';
import { Fetch, Headers, DefaultQuery, RequestOptions, APIPromise } from 'openai/core';
import { Agent } from 'openai/_shims';
import { OpenAI as OpenAI$1 } from 'openai';
import { ChatCompletionChunk } from 'openai/resources/chat/completions';
import { Stream } from 'openai/streaming';

interface ClientBaseOptions {
    baseURL?: string | null | undefined;
    organization?: string | null | undefined;
    project?: string | null | undefined;
    timeout?: number | undefined;
    httpAgent?: Agent | undefined;
    fetch?: Fetch | undefined;
    maxRetries?: number | undefined;
    defaultHeaders?: Headers | undefined;
    defaultQuery?: DefaultQuery | undefined;
    dangerouslyAllowBrowser?: boolean | undefined;
}

declare abstract class ClientBase<StreamBody, StreamResult> {
    protected apiKey: string;
    protected baseURL: string | null;
    protected options?: ClientBaseOptions | undefined;
    constructor(apiKey: string, baseURL?: string | null, options?: ClientBaseOptions | undefined);
    abstract stream(body: StreamBody, options?: RequestOptions): Promise<APIPromise<StreamResult>>;
}

declare class OpenAI extends ClientBase<ChatCompletionCreateParamsStreaming, Stream<ChatCompletionChunk>> {
    constructor(apiKey: string, baseURL?: string, options?: ClientBaseOptions);
    create(): Promise<OpenAI$1>;
    stream(body: ChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk>>>;
}

type QWenMax = 'qwen-max-latest' | 'qwen-max' | 'qwen-max-0125' | 'qwen2.5-Max' | 'qwen-max-0919' | 'qwen-max-0428' | 'qwen-max-0403' | 'qwen-max-0107';
type QWenPlus = 'qwen-plus-latest' | 'qwen-plus' | 'qwen-plus-0125' | 'qwen-plus-0112' | 'qwen-plus-1220' | 'qwen-plus-1127' | 'qwen-plus-1125' | 'qwen-plus-0919' | 'qwen-plus-0806' | 'qwen-plus-0723​' | 'qwen-plus-0624' | 'qwen-plus-0206';
type QWenTurbo = 'qwen-turbo-latest' | 'qwen-turbo';
type QWenLong = 'qwen-long';
type QWenOmni = 'qwen-omni-turbo-latest' | 'qwen-omni-turbo' | 'qwen-omni-turbo-2025-01-19';
type QWenVL = 'qwen-vl-max-latest' | 'qwen-vl-max' | 'qwen-vl-max-0125';
type QWenORC = 'qwen-vl-ocr-latest' | 'qwen-vl-ocr' | 'qwen-vl-ocr-1028';
type QWenAudio = 'qwen-audio-turbo-latest' | 'qwen-audio-turbo' | 'qwen-audio-turbo-1204' | 'qwen-audio-turbo-0807';
type QWenASR = 'qwen-audio-asr-latest' | 'qwen-audio-asr' | 'qwen-audio-asr-1204';
type QWenMath = 'qwen-math-plus-latest' | 'qwen-math-plus';
type QWenCoder = 'qwen-coder-plus-latest' | 'qwen-coder-plus';
type ChatModels$9 = QWenMax | QWenPlus | QWenTurbo | QWenLong | QWenOmni | QWenVL | QWenORC | QWenAudio | QWenASR | QWenMath | QWenCoder;
interface DashScopeChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    enable_search?: boolean;
    model: ChatModels$9 | (string & {});
}

declare class DashScope extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: DashScopeChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

type ChatModels$8 = 'hunyuan-TurboS' | 'hunyuan-turbo' | 'hunyuan-large' | 'hunyuan-large-longcontext' | 'hunyuan-standard' | 'hunyuan-standard-256K' | 'hunyuan-translation' | 'hunyuan-translation-lite' | 'hunyuan-role' | 'hunyuan-functioncall' | 'hunyuan-code' | 'hunyuan-turbo-vision' | 'hunyuan-vision' | 'hunyuan-embedding';
interface HunYuanChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    extra_body?: object;
    model: ChatModels$8 | (string & {});
}

declare class HunYuan extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: HunYuanChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

type ChatModels$7 = 'kimi-latest' | 'moonshot-v1-8k' | 'moonshot-v1-32k' | 'moonshot-v1-128k' | 'moonshot-v1-8k-vision-preview' | 'moonshot-v1-32k-vision-preview' | 'moonshot-v1-128k-vision-preview';
interface MoonshotChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    model: ChatModels$7 | (string & {});
}

declare class Moonshot extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: MoonshotChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

type SiliconflowText = 'deepseek-ai/DeepSeek-R1' | 'Pro/deepseek-ai/DeepSeek-R1' | 'deepseek-ai/DeepSeek-V3' | 'Pro/deepseek-ai/DeepSeek-V3' | 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B' | 'deepseek-ai/DeepSeek-R1-Distill-Qwen-14B' | 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B' | 'deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B' | 'Pro/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B' | 'Pro/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B' | 'deepseek-ai/DeepSeek-V2.5' | 'Qwen/Qwen2.5-72B-Instruct-128K' | 'Qwen/Qwen2.5-72B-Instruct' | 'Qwen/Qwen2.5-32B-Instruct' | 'Qwen/Qwen2.5-14B-Instruct' | 'Qwen/Qwen2.5-7B-Instruct' | 'Qwen/Qwen2.5-Coder-32B-Instruct' | 'Qwen/Qwen2.5-Coder-7B-Instruct' | 'Qwen/Qwen2-7B-Instruct' | 'Qwen/Qwen2-1.5B-Instruct' | 'Qwen/QwQ-32B-Preview' | 'TeleAI/TeleChat2' | 'THUDM/glm-4-9b-chat' | 'Vendor-A/Qwen/Qwen2.5-72B-Instruct' | 'internlm/internlm2_5-7b-chat' | 'internlm/internlm2_5-20b-chat' | 'Pro/Qwen/Qwen2.5-7B-Instruct' | 'Pro/Qwen/Qwen2-7B-Instruct' | 'Pro/Qwen/Qwen2-1.5B-Instruct' | 'Pro/THUDM/chatglm3-6b' | 'Pro/THUDM/glm-4-9b-chat';
type SiliconflowVL = 'Qwen/QVQ-72B-Preview' | 'deepseek-ai/deepseek-vl2' | 'Qwen/Qwen2-VL-72B-Instruct' | 'OpenGVLab/InternVL2-26B' | 'Pro/Qwen/Qwen2-VL-7B-Instruct' | 'Pro/OpenGVLab/InternVL2-8B' | 'TeleAI/TeleMM';
type ChatModels$6 = SiliconflowText | SiliconflowVL;
interface SiliconflowChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    model: ChatModels$6 | (string & {});
}

declare class Siliconflow extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: SiliconflowChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

type ChatModels$5 = 'deepseek-chat' | 'deepseek-reasoner';
interface DeepseekChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    model: ChatModels$5 | (string & {});
}

declare class Deepseek extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: DeepseekChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

type QianFanText = 'ernie-4.0-8k-latest' | 'ernie-4.0-8k-preview' | 'ernie-4.0-8k' | 'ernie-4.0-turbo-8k-latest' | 'ernie-4.0-turbo-8k-preview' | 'ernie-4.0-turbo-8k' | 'ernie-4.0-turbo-128k' | 'ernie-3.5-8k-preview' | 'ernie-3.5-8k' | 'ernie-3.5-128k' | 'ernie-speed-8k' | 'ernie-speed-128k' | 'ernie-speed-pro-128k' | 'ernie-lite-8k' | 'ernie-lite-pro-128k' | 'ernie-tiny-8k' | 'ernie-char-8k' | 'ernie-char-fiction-8k' | 'ernie-novel-8k' | 'deepseek-v3' | 'deepseek-r1' | 'deepseek-r1-distill-qwen-32b' | 'deepseek-r1-distill-qwen-14b' | 'deepseek-r1-distill-qwen-7b' | 'deepseek-r1-distill-qwen-1.5b' | 'deepseek-r1-distill-llama-70b' | 'deepseek-r1-distill-llama-8b' | 'deepseek-r1-distill-qianfan-llama-70b' | 'deepseek-r1-distill-qianfan-llama-8b';
type QianFanVL = 'deepseek-vl2' | 'deepseek-vl2-small';
type ChatModels$4 = QianFanText | QianFanVL;
interface QianFanChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    model: ChatModels$4 | (string & {});
    web_search?: {
        enable: boolean;
        enable_citation: boolean;
        enable_trace: boolean;
    };
}

declare class QianFan extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: QianFanChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

type ChatModels$3 = 'gemini-2.0-flash-thinking-exp' | 'gemini-2.0-flash' | 'gemini-2.0-flash-lite' | 'imagen-3' | 'gemini-1.5-flash' | 'gemini-1.5-flash-8b' | 'gemini-1.5-pro';
interface GeminiChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    model: ChatModels$3 | (string & {});
}

declare class Gemini extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: GeminiChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

type ChatModels$2 = 'llama3.3:latest' | 'llama3.2:latest' | 'llama3.2-vision:latest' | 'deepseek-r1:latest' | 'qwen2.5:latest' | 'qwen2.5-coder:latest' | 'phi4:latest';
interface OllamaChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    model: ChatModels$2 | (string & {});
}

declare class Ollama extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: OllamaChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

type ZhiPuText = 'glm-zero-preview' | 'glm-4-plus' | 'glm-4-air' | 'glm-4-long' | 'glm-4-airx' | 'glm-4-flashx' | 'glm-4-flash' | 'glm-4-alltools';
type ZhiPuVL = 'glm-4v-plus-0111' | 'glm-4v-plus' | 'glm-4v' | 'glm-4v-flash' | 'cogvideox-2' | 'cogvideox-flash' | 'cogview-4' | 'cogview-3-flash';
type ZhiPuAudio = 'glm-realtime' | 'glm-4-voice';
type ZhiPuVector = 'embedding-3' | 'embedding-2';
type ChatModels$1 = ZhiPuText | ZhiPuVL | ZhiPuAudio | ZhiPuVector;
interface ZhiPuChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    model: ChatModels$1 | (string & {});
}

declare class ZhiPu extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: ZhiPuChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

type ChatModels = 'grok-3' | 'grok-2-latest' | 'grok-2-vision-latest';
interface XAIChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsStreaming {
    model: ChatModels | (string & {});
}

declare class XAI extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions);
    stream(body: XAIChatCompletionCreateParamsStreaming, options?: RequestOptions): Promise<APIPromise<Stream<ChatCompletionChunk$1>>>;
}

export { DashScope, Deepseek, Gemini, HunYuan, Moonshot, Ollama, OpenAI, QianFan, Siliconflow, XAI, ZhiPu };
