### Fundamentals of Testing in JavaScript
- create base testing library (test / expect)


### Static Analysis Testing JavaScript Applications
https://github.com/kentcdodds/static-testing-tools/tree/master
- introduce eslint & config
- introduce prettier & config
- eslint-config-prettier
- flow
- husky: pre-commit
- lint-staged


### JavaScript Mocking Fundamentals
https://github.com/kentcdodds/js-mocking-fundamentals
- spyOn / mock / mockImplement / mockRestore


### Configure Jest for Testing JavaScript Applications
https://github.com/kentcdodds/jest-cypress-react-babel-webpack
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
- watch mode
- is-ci-cli
- jest-watch-typeahead
- test environment: client/server
- Running Multiple Configurations
- jest-watch-select-projects
- jest-runner-eslint
- jest --findRelatedTests


### install, configure, and script Cypress for JavaScript web applications
- install cypress & eslint-plugin-cypress
- first cypress test
- Configure cypress.json
- cypress-testing-library
- start-server-and-test
- Debug .then(subject => ...)
- test user registration
- test-data-bot
- 


### Test React Components with Jest and react-testing-library


### Use dom-testing-library to test any JS framework