### Fundamentals of Testing in JavaScript
- create base testing library (test / expect)


### Static Analysis Testing JavaScript Applications
- introduce eslint & config
- introduce prettier & config
- eslint-config-prettier
- flow
- husky: pre-commit
- lint-staged


### JavaScript Mocking Fundamentals
- spyOn / mock / mockImplement / mockRestore


### Configure Jest for Testing JavaScript Applications
- install
- @babel/preset-env modules: 'commonjs'
- testEnviroment: 'jest-enviroment-jsdom' || 'jest-enviroment-node',
- moduleNameMapper
- snapshot
- Snapshot Serializers
- babel-plugin-dynamic-import-node
- setupTestFrameworkScriptFile
- moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared']
- create test utils for provider
- "test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand",
- jest --coverage, collectCoverageFrom
- analyze coverage report
- coverage threshold
- codeCov
- 


### install, configure, and script Cypress for JavaScript web applications


### Test React Components with Jest and react-testing-library


### Use dom-testing-library to test any JS framework