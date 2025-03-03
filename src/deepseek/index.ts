import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { DeepSeekChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class DeepSeek extends OpenAI {
  constructor(apiKey: string, options?: ClientBaseOptions) {
    let baseURL = 'https://api.deepseek.com';
    super(apiKey, baseURL, options);
  }

  override async stream(
    body: DeepSeekChatCompletionCreateParamsStreaming,
    options?: RequestOptions
  ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
    const client = await this.create();
    return await client.chat.completions.create(body, options);
  }
}
