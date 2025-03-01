import { Agent } from 'openai/_shims';
import { DefaultQuery, Fetch, Headers } from 'openai/core';

export interface ClientBaseOptions {
  baseURL?: string | null | undefined;
  organization?: string | null | undefined;
  project?: string | null | undefined;
  timeout?: number | undefined;
  httpAgent?: Agent | undefined;
  fetch?: Fetch | undefined;
  maxRetries?: number | undefined;
  defaultHeaders?: Headers | undefined;
  defaultQuery?: DefaultQuery | undefined;
  dangerouslyAllowBrowser?: boolean | undefined;
}
