import styles from './index.css'
const Button = () => (
  <button className={styles.button}>Click me!</button>
)



// -----------------------
import cssModules from 'react-css-modules'
const Button = () => <button styleName="button">Click me!</button>
const EnhancedButton = cssModules(Button, styles)