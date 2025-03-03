import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { QianfanChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class Qianfan extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions) {
        let baseURL = 'https://qianfan.baidubce.com/v2';
        super(apiKey, baseURL, options);
    }

    override async stream(
        body: QianfanChatCompletionCreateParamsStreaming,
        options?: RequestOptions
    ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
        const client = await this.create();
        return await client.chat.completions.create(body, options);
    }
}
