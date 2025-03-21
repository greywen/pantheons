import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { XAIChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class XAI extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions) {
        let baseURL = 'https://api.x.ai/v1';
        super(apiKey, baseURL, options);
    }

    override async stream(
        body: XAIChatCompletionCreateParamsStreaming,
        options?: RequestOptions
    ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
        const client = await this.create();
        return await client.chat.completions.create(body, options);
    }
}
