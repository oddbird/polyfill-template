const myPolyfill = (css?: string) => {
  console.log('polyfilling!');
  return css;
};

// Expose API
// @@@ This should be replaced with the actual API we want to expose
export default myPolyfill;
