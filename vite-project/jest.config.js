const config = {
  verbose: true,
};

module.exports = config;

module.exports = async () => {
  return {
    verbose: true,
  };
};

const { defaults } = require('jest-config');
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // ...
};
