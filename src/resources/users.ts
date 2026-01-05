// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  /**
   * Identify a user
   */
  identify(body: UserIdentifyParams, options?: RequestOptions): APIPromise<UserIdentifyResponse> {
    return this._client.post('/identify', { body, ...options });
  }
}

export interface UserIdentifyResponse {
  success: boolean;
}

export interface UserIdentifyParams {
  user_id: string;

  attributes?: { [key: string]: unknown };

  email?: string;

  name?: string;
}

export declare namespace Users {
  export { type UserIdentifyResponse as UserIdentifyResponse, type UserIdentifyParams as UserIdentifyParams };
}
