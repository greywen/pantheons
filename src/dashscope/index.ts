import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { DashScopeChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class DashScope extends OpenAI {
  constructor(apiKey: string, options?: ClientBaseOptions) {
    let baseUrl = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
    super(apiKey, baseUrl, options);
  }

  override async stream(
    body: DashScopeChatCompletionCreateParamsStreaming,
    options?: RequestOptions
  ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
    const client = await this.create();
    return await client.chat.completions.create(body, options);
  }
}
