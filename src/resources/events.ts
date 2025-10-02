// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  /**
   * Creates or uses an existing event and records an event occurrence for an end
   * user. Requires a valid API key for authentication.
   */
  track(body: EventTrackParams, options?: RequestOptions): APIPromise<EventTrackResponse> {
    return this._client.post('/api/event', { body, ...options });
  }
}

export interface EventTrackResponse {
  /**
   * The event ID
   */
  eventId: string;

  /**
   * The event occurrence ID
   */
  occurrenceId: string;

  /**
   * Whether the operation was successful
   */
  success: boolean;
}

export interface EventTrackParams {
  /**
   * Event name
   */
  event: string;

  /**
   * External user ID
   */
  userId: string;

  /**
   * Event metadata
   */
  properties?: { [key: string]: unknown };

  /**
   * Event timestamp (ISO 8601)
   */
  timestamp?: string;
}

export declare namespace Events {
  export { type EventTrackResponse as EventTrackResponse, type EventTrackParams as EventTrackParams };
}
