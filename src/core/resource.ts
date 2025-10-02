// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Userplex } from '../client';

export abstract class APIResource {
  protected _client: Userplex;

  constructor(client: Userplex) {
    this._client = client;
  }
}
