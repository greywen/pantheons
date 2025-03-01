import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { GeminiChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class Gemini extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions) {
        let baseUrl = 'https://generativelanguage.googleapis.com/v1beta/openai/';
        super(apiKey, baseUrl, options);
    }

    override async stream(
        body: GeminiChatCompletionCreateParamsStreaming,
        options?: RequestOptions
    ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
        const client = await this.create();
        return await client.chat.completions.create(body, options);
    }
}
