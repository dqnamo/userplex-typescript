// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  /**
   * Capture an event
   */
  capture(body: EventCaptureParams, options?: RequestOptions): APIPromise<EventCaptureResponse> {
    return this._client.post('/capture', { body, ...options });
  }
}

export interface EventCaptureResponse {
  success: boolean;
}

export interface EventCaptureParams {
  name: string;

  data?: { [key: string]: unknown };

  timestamp?: string;

  user_id?: string;
}

export declare namespace Events {
  export { type EventCaptureResponse as EventCaptureResponse, type EventCaptureParams as EventCaptureParams };
}
