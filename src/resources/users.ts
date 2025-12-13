// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  /**
   * Creates or updates an end user in InstantDB with the provided information.
   * Requires a valid API key for authentication.
   */
  identify(body: UserIdentifyParams, options?: RequestOptions): APIPromise<UserIdentifyResponse> {
    return this._client.post('/api/identify', { body, ...options });
  }
}

export interface UserIdentifyResponse {
  /**
   * Operation success status
   */
  success: boolean;

  /**
   * The ID of the identified user
   */
  userId: string;
}

export interface UserIdentifyParams {
  /**
   * User email address
   */
  email: string;

  /**
   * User full name
   */
  name: string;

  /**
   * Unique identifier for the user
   */
  userId: string;

  /**
   * Additional user properties
   */
  properties?: { [key: string]: unknown };
}

export declare namespace Users {
  export { type UserIdentifyResponse as UserIdentifyResponse, type UserIdentifyParams as UserIdentifyParams };
}
