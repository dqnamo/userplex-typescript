// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  identify(body: UserIdentifyParams, options?: RequestOptions): APIPromise<UserIdentifyResponse> {
    return this._client.post('/identify', { body, ...options });
  }
}

export interface UserIdentifyResponse {
  success: boolean;
}

export interface UserIdentifyParams {
  /**
   * External user ID
   */
  user_id: string;

  /**
   * Additional user attributes
   */
  attributes?: { [key: string]: unknown };

  /**
   * User email
   */
  email?: string;

  /**
   * User name
   */
  name?: string;

  [k: string]: unknown;
}

export declare namespace Users {
  export { type UserIdentifyResponse as UserIdentifyResponse, type UserIdentifyParams as UserIdentifyParams };
}
