module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>build', '<rootDir>node_modules'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true,
  root: ['src/tests/*.test.js'],
};
