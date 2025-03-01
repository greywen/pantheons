import { ChatCompletionCreateParamsStreaming } from 'openai/resources';
import { ClientBase } from '../core/baseClient';
import { OpenAI as OpenAIClient } from 'openai';
import { ChatCompletionChunk } from 'openai/resources/chat/completions';
import { APIPromise, RequestOptions } from 'openai/core';
import { Stream } from 'openai/streaming';
import { ClientBaseOptions } from '../core/types';

export class OpenAI extends ClientBase<
  ChatCompletionCreateParamsStreaming,
  Stream<ChatCompletionChunk>
> {
  constructor(
    apiKey: string,
    baseURL = 'https://api.openai.com/v1',
    options: ClientBaseOptions = {}
  ) {
    super(apiKey, baseURL, options);
  }

  public async create() {
    return new OpenAIClient({
      apiKey: this.apiKey,
      baseURL: this.baseURL,
      ...this.options,
    });
  }

  public async stream(
    body: ChatCompletionCreateParamsStreaming,
    options?: RequestOptions
  ): Promise<APIPromise<Stream<ChatCompletionChunk>>> {
    const client = await this.create();
    return await client.chat.completions.create(body, options);
  }
}
