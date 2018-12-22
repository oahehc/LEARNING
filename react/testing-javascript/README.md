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
- test-data-bot -> generate user name & password
- Test Driven Development by Cypress
- mock request
- register -> logout -> login
- register by request
- custom command for register user
- authenticated user
- login by request
- custom command for login
- custom command for register and login
- install react devTools


### Test React Components with Jest and react-testing-library
1. render react component
2. jest-dom
3. dom-testing-library: query input by label text
4. react-testing-library: render
5. avoid memory leaks => cleanup
6. debug
7. fireEvent
8. assert render text
9. renderer => prop update
10. assert not rendered element
11. jest-axe for test accessibility
12. mock api
13. dependency injection
14. Mock react-transition-group
15. Test componentDidCatch
16. Test drive development: form
17. TDD: submit event
18. TDD: call api when submit
19. TDD: redirect by react-router
20. TDD: date
21. test-data-bot
22. error status
23. custom render function
24. Router Provider with createMemoryHistory
25. react-router no-match route
26. custom render function for react-router
27. Test a redux connected
28. Test redux initialized state
29. custom render function for redux component
30. test render prop
31. test react portals
32. test unmount


### Use dom-testing-library to test any JS framework
1. dom-testing-library for react
2. for preact
3. for jquery
4. dojo
5. hyperApp
6. AngularJS
7. Angular
8. vue
9. mithril
10. svelte
11. from-html