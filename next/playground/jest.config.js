module.exports = {
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  verbose: true,
  testURL: 'http://localhost/'
}
