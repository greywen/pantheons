import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { HunYuanChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class HunYuan extends OpenAI {
  constructor(apiKey: string, options?: ClientBaseOptions) {
    let baseUrl = 'https://api.hunyuan.cloud.tencent.com/v1';
    super(apiKey, baseUrl, options);
  }

  override async stream(
    body: HunYuanChatCompletionCreateParamsStreaming,
    options?: RequestOptions
  ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
    const client = await this.create();
    return await client.chat.completions.create(body, options);
  }
}
