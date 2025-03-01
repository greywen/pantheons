import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { OllamaChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class Ollama extends OpenAI {
    constructor(apiKey: string, options?: ClientBaseOptions) {
        let baseURL = options?.baseURL || 'http://localhost:11434/v1';
        super(apiKey, baseURL, options);
    }

    override async stream(
        body: OllamaChatCompletionCreateParamsStreaming,
        options?: RequestOptions
    ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
        const client = await this.create();
        return await client.chat.completions.create(body, options);
    }
}
