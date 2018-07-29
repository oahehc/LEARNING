import { withLanguages } from '../hoc/withLanguages'

const language = props => (
  <div>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
)

export default withLanguages(language)