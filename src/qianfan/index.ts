import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { QianFanChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class QianFan extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions) {
        let baseUrl = 'https://qianfan.baidubce.com/v2';
        super(apiKey, baseUrl, options);
    }

    override async stream(
        body: QianFanChatCompletionCreateParamsStreaming,
        options?: RequestOptions
    ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
        const client = await this.create();
        return await client.chat.completions.create(body, options);
    }
}
