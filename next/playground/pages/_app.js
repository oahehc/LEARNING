import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from '../hoc/withRedux'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    console.log('--- _app getInitialProps');
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}
export default withRedux(MyApp)