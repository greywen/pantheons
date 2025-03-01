import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { ZhiPuChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class ZhiPu extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions) {
        let baseURL = 'https://open.bigmodel.cn/api/paas/v4';
        super(apiKey, baseURL, options);
    }

    override async stream(
        body: ZhiPuChatCompletionCreateParamsStreaming,
        options?: RequestOptions
    ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
        const client = await this.create();
        return await client.chat.completions.create(body, options);
    }
}
