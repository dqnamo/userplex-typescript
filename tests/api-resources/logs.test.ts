// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Userplex from 'userplex';

const client = new Userplex({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logs', () => {
  // Prism tests are disabled
  test.skip('batch: only required params', async () => {
    const responsePromise = client.logs.batch({ logs: [{ name: 'name', user_id: 'user_id' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batch: required and optional params', async () => {
    const response = await client.logs.batch({
      logs: [
        {
          name: 'name',
          user_id: 'user_id',
          data: { foo: 'bar' },
          properties: { foo: 'bar' },
          timestamp: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('new: only required params', async () => {
    const responsePromise = client.logs.new({ name: 'name', user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('new: required and optional params', async () => {
    const response = await client.logs.new({
      name: 'name',
      user_id: 'user_id',
      data: { foo: 'bar' },
      properties: { foo: 'bar' },
      timestamp: '2019-12-27T18:11:19.117Z',
    });
  });
});
