import { expect, test } from '@playwright/test';
import { array, integer, object, string } from 'superstruct';

test.describe('Matchers', () => {
  const postSchema = object({
    id: integer(),
    userId: integer(),
    title: string(),
    body: string(),
  });

  const listPostSchema = array(postSchema);

  [
    { api: 'https://jsonplaceholder.typicode.com/posts/1', schema: postSchema, desc: '#1' },
    { api: 'https://jsonplaceholder.typicode.com/posts', schema: listPostSchema, desc: '#2' },
  ].forEach(({ api, schema, desc }) => {
    test(`Verify toHaveSchema: ${desc}`, async ({ request }) => {
      const response = await request.get(api);

      await expect(response).toHaveSchema(schema);
    });
  });
});
