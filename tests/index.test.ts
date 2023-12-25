import { getLog } from '../src/index';

describe('testing index file', () => {
    test('should return the relevant log', () => {
      expect(getLog()).toBe("unity's index.ts");
    });
});