import { APIPromise, RequestOptions } from 'openai/core';
import { ClientBaseOptions } from './types';

export abstract class ClientBase<StreamBody, StreamResult> {
  constructor(
    protected apiKey: string,
    protected baseURL: string | null = null,
    protected options?: ClientBaseOptions
  ) {}
  abstract stream(
    body: StreamBody,
    options?: RequestOptions
  ): Promise<APIPromise<StreamResult>>;
}
