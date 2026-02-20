// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Userplex from 'userplex';

const client = new Userplex({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // Mock server tests are disabled
  test.skip('capture: only required params', async () => {
    const responsePromise = client.events.capture({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('capture: required and optional params', async () => {
    const response = await client.events.capture({
      name: 'name',
      data: { foo: 'bar' },
      timestamp: '2019-12-27T18:11:19.117Z',
      user_id: 'user_id',
    });
  });
});
