import { APIResponse } from '@playwright/test';
import { Struct } from 'superstruct';

declare global {
  namespace PlaywrightTest {
    interface Matchers<R> {
      /**
       * Verifies that response body conform the superstruct schema
       */
      toHaveSchema(schema: Struct<any, any>): Promise<void>
    }
  }
}
