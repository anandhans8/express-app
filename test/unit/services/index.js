const assert = require('assert');

const IndexService = require('../../../src/services/v1/user');

suite('IndexService', () => {
  suite('#example()', () => {
    test('should return "example" string', async () => {
      const example = await IndexService.example();
      assert.equal(example, 'example');
    });
  });
});
