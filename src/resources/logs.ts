// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Logs extends APIResource {
  /**
   * Records multiple log occurrences in a single request. Requires a valid API key
   * for authentication.
   */
  batch(body: LogBatchParams, options?: RequestOptions): APIPromise<LogBatchResponse> {
    return this._client.post('/api/logs/batch', { body, ...options });
  }

  /**
   * Creates or uses an existing log and records a log occurrence for an end user.
   * Requires a valid API key for authentication.
   */
  new(body: LogNewParams, options?: RequestOptions): APIPromise<LogNewResponse> {
    return this._client.post('/api/log', { body, ...options });
  }
}

export interface LogBatchResponse {
  /**
   * Number of logs processed
   */
  count: number;

  /**
   * Operation success status
   */
  success: boolean;
}

export interface LogNewResponse {
  /**
   * Operation success status
   */
  success: boolean;
}

export interface LogBatchParams {
  /**
   * List of logs to track
   */
  logs: Array<LogBatchParams.Log>;
}

export namespace LogBatchParams {
  export interface Log {
    name: string;

    /**
     * External user ID
     */
    user_id: string;

    /**
     * Additional log data
     */
    data?: { [key: string]: unknown };

    /**
     * Alias for data, for compatibility
     */
    properties?: { [key: string]: unknown };

    /**
     * Log timestamp (ISO 8601)
     */
    timestamp?: string;

    [k: string]: unknown;
  }
}

export interface LogNewParams {
  name: string;

  /**
   * External user ID
   */
  user_id: string;

  /**
   * Additional log data
   */
  data?: { [key: string]: unknown };

  /**
   * Alias for data, for compatibility
   */
  properties?: { [key: string]: unknown };

  /**
   * Log timestamp (ISO 8601)
   */
  timestamp?: string;

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
