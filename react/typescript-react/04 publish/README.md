# Publish a React component with TypeScript
> In this lesson we look at how to create a React Component package using TypeScript.

> Creating a React Package is very similar to creating any other TypeScript Node package and we demonstrate that here.

Here we have a simple bare bones `package.json` for a node module which have named 'fancy'.
***`cat package.json`***
```json
{
  "name": "fancy",
  "version": "0.0.0",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/basarat/typescript-react.git"
  },
  "scripts": {}
}
```

We start off by installing `typescript` / `react` and the types for react as dev dependencies.  
```
npm install typescript react @types/react -D
```
* We add these only as dev dependencies as we want people that will use our package to bring in their own versions for these libraries.

* Next we create a simple `tsconfig.json` file.
* Within the file we specify the `compilerOptions` for  `sourceMap` / `target` / `jsx` / `declaration` and most importantly the output directory for the compiled JavaScript and declaration files using `outDir`.
* We also specify that our source TypeScript files will be in the `src` folder.
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "target": "es5",
    "jsx": "react",
    "declaration": true,
    "outDir": "lib"
  },
  "include": [
    "src"
  ]
}
```

* Next we simply create our root `src/index.tsx` file.
* Within the file we bring in React.
* Next we export a simple `Fancy` component that takes a text prop and renders it into an h1 tag.
```js
import * as React from 'react';

export const Fancy: React.SFC<{ text: string }>
  = (props) => <h1>{props.text}</h1>;

```

* We wrap up our module by making a final set of changes in `package.json`
* We add a hint for our users that they need to provide their own version of `react` by adding to our `peerDependencies`.
```js
  "peerDependencies": {
    "react": ">=16.0.0"
  },
```

* We setup package.json with the path to our output `js` files along with `types` for the output `.d.ts` TypeScript declaration files which in our case is the `outDir` we specified in our `tsconfig.json`
```
"main": "lib",
"types": "lib",
```

* We also setup a build script which simply invokes `tsc` on our `tsconfig.json`
* Add a start script that runs build in watch mode for live development.
```
"build": "tsc -p .",
"start": "npm run build -- -w"
```

* Now lets go ahead and run build once on the console to compile our project.
```
npm run build
```

* At this point if you wanted you could run `npm publish` to push this library to NPM, but we will just use it locally by running `npm link`.
```
npm link
```

* Now lets jump back to our good old hello world react application and use this fancy package.
```
cd ../use
```
* If we had published our package to npm we could use it with `npm install fancy` but since we only linked it locally we can bring it in by running `npm link fancy`. This `npm link` workflow is also a good tool to be aware of for local testing of packages before deploying them to npm.
```
npm link fancy
```

***alm -o && Run the demo***
* We start with a simple basic TypeScript hello world react app.
* We now import the Fancy component into our application. Ofcourse since the Fancy package was written with TypeScript we get nice autocomplete, error checking and all the other benefits we demonstarted in the first lesson.

```js
import { Fancy } from 'fancy';

ReactDOM.render(
  <Fancy text="Hello world"/>,
  document.getElementById('root')
);
```

* As you can see our fancy component works as expected.
