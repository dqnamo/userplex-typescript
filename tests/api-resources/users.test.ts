// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Userplex from 'userplex';

const client = new Userplex({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Prism tests are disabled
  test.skip('identify: only required params', async () => {
    const responsePromise = client.users.identify({ user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('identify: required and optional params', async () => {
    const response = await client.users.identify({
      user_id: 'user_id',
      email: 'dev@stainless.com',
      name: 'name',
      properties: { foo: 'bar' },
    });
  });
});
