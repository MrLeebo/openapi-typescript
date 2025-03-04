/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/test': {
    get: {
      responses: {
        /** A list of types. */
        200: unknown
      }
    }
  }
}

export interface components {
  schemas: {
    /** @description Object with one property that is a string enum */
    Example: {
      status?: components['schemas']['ExampleStatus']
    }
    /** @enum {string} */
    ExampleStatus: 'ACTIVE' | 'INACTIVE'
  }
}

export interface operations {}

export interface external {}
