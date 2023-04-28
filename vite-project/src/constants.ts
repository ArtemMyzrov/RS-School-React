export const GLOBAL_WINDOW =
  (typeof self === 'object' && self.self === self && self) ||
  (typeof global === 'object' && global.global === global && global) ||
  this;

export default GLOBAL_WINDOW;