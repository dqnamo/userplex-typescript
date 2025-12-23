// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Logs extends APIResource {
  batch(
    params: LogBatchParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<LogBatchResponse> {
    const { body } = params ?? {};
    return this._client.post('/logs', { body: body, ...options });
  }

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
  /**
   * A list of logs to ingest
   */
  body?: Array<LogBatchParams.Body>;
}

export namespace LogBatchParams {
  export interface Body {
    /**
     * Log name
     */
    name: string;

    /**
     * Additional log data
     */
    data?: { [key: string]: unknown };

    /**
     * Log timestamp (ISO 8601)
     */
    timestamp?: string;

    /**
     * External user ID
     */
    user_id?: string;

    [k: string]: unknown;
  }
}

export interface LogNewParams {
  /**
   * Log name
   */
  name: string;

  /**
   * Additional log data
   */
  data?: { [key: string]: unknown };

  /**
   * Log timestamp (ISO 8601)
   */
  timestamp?: string;

  /**
   * External user ID
   */
  user_id?: string;

  [k: string]: unknown;
}

export declare namespace Logs {
  export {
    type LogBatchResponse as LogBatchResponse,
    type LogNewResponse as LogNewResponse,
    type LogBatchParams as LogBatchParams,
    type LogNewParams as LogNewParams,
  };
}
