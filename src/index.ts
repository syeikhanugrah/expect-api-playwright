import { APIResponse } from '@playwright/test';
import { assert, Struct } from 'superstruct';

const playwrightApiMatchers = {
  async toHaveSchema(response: APIResponse, schema: Struct<any, any>) {
    try {
      const payload = await response.json();

      assert(payload, schema);

      return {
        pass: true,
        message: () => 'Pass',
      };
    } catch (error) {
      return {
        pass: false,
        message: () => (error as Error).message,
      };
    }
  }
};

export default playwrightApiMatchers;
