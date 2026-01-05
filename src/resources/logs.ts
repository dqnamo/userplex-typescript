// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Logs extends APIResource {
  /**
   * Log multiple events
   */
  batch(
    params: LogBatchParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<LogBatchResponse> {
    const { body } = params ?? {};
    return this._client.post('/logs', { body: body, ...options });
  }

  /**
   * Log a single event
   */
  new(body: LogNewParams, options?: RequestOptions): APIPromise<LogNewResponse> {
    return this._client.post('/log', { body, ...options });
  }
}

export interface LogBatchResponse {
  success: boolean;
}

export interface LogNewResponse {
  success: boolean;
}

export interface LogBatchParams {
  body?: Array<LogBatchParams.Body>;
}

export namespace LogBatchParams {
  export interface Body {
    name: string;

    data?: { [key: string]: unknown };

    timestamp?: string;

    user_id?: string;
  }
}

export interface LogNewParams {
  name: string;

  data?: { [key: string]: unknown };

  timestamp?: string;

  user_id?: string;
}

export declare namespace Logs {
  export {
    type LogBatchResponse as LogBatchResponse,
    type LogNewResponse as LogNewResponse,
    type LogBatchParams as LogBatchParams,
    type LogNewParams as LogNewParams,
  };
}
