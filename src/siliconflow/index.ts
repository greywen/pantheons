import { ChatCompletionChunk } from 'openai/resources';
import { OpenAI } from '../openai';
import { RequestOptions, APIPromise } from 'openai/core';
import { Stream } from 'openai/streaming';
import { SiliconflowChatCompletionCreateParamsStreaming } from './types';
import { ClientBaseOptions } from '../core/types';

export class Siliconflow extends OpenAI {
  constructor(apiKey: string, options?: ClientBaseOptions) {
    let baseURL = 'https://api.siliconflow.cn/v1';
    super(apiKey, baseURL, options);
  }

  override async stream(
    body: SiliconflowChatCompletionCreateParamsStreaming,
    options?: RequestOptions
  ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
    const client = await this.create();
    return await client.chat.completions.create(body, options);
  }
}
