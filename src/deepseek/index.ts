import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { DeepseekChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class Deepseek extends OpenAI {
  constructor(apiKey: string, options?: ClientBaseOptions) {
    let baseUrl = 'https://api.deepseek.com';
    super(apiKey, baseUrl, options);
  }

  override async stream(
    body: DeepseekChatCompletionCreateParamsStreaming,
    options?: RequestOptions
  ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
    const client = await this.create();
    return await client.chat.completions.create(body, options);
  }
}
