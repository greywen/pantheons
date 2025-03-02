import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { LingYiWanWuChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class LingYiWanWu extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions) {
        let baseURL = 'https://api.lingyiwanwu.com/v1';
        super(apiKey, baseURL, options);
    }

    override async stream(
        body: LingYiWanWuChatCompletionCreateParamsStreaming,
        options?: RequestOptions
    ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
        const client = await this.create();
        return await client.chat.completions.create(body, options);
    }
}
