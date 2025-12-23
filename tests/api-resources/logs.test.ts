// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Userplex from 'userplex';

const client = new Userplex({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logs', () => {
  // Prism tests are disabled
  test.skip('batch', async () => {
    const responsePromise = client.logs.batch();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.logs.batch(
        {
          body: [
            { name: 'name', data: { foo: 'bar' }, timestamp: '2019-12-27T18:11:19.117Z', user_id: 'user_id' },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Userplex.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('new: only required params', async () => {
    const responsePromise = client.logs.new({ name: 'name' });
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
      data: { foo: 'bar' },
      timestamp: '2019-12-27T18:11:19.117Z',
      user_id: 'user_id',
    });
  });
});
