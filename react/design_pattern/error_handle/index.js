// wraps all the component's methods into a try...catch block so that they do not make the entire tree fail. *should be disabled in production
import wrapReactLifecycleMethods from 'react-component-errors'
import { config } from 'react-component-errors'

// custom error handler
config.errorHandler = errorReport => { ... }

@wrapReactLifecycleMethods
class MyComponents extends React.Component {
  ...
}