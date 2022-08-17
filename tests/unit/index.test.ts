import myPolyfill from '../../src/index.js';
import { sampleCSS } from './../helpers.js';

describe('myPolyfill', () => {
  it('passes', () => {
    const result = myPolyfill(sampleCSS);

    expect(result).toEqual(sampleCSS);
  });
});
