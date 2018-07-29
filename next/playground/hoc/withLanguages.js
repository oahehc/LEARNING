import accepts from 'accepts'

export const withLanguages = Page => {
  const WithLanguages = props => <Page {...props} />

  WithLanguages.getInitialProps = async context => {
    if (context.req) {
      console.log('--- server', accepts(context.req).languages());
    } else {
      console.log('--- client', navigator.languages);
    }
    const languages = context.req
      ? accepts(context.req).languages()
      : navigator.languages

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      languages
    }
  }

  WithLanguages.displayName = `WithLanguages(${Page.displayName || Page.name || 'Unknown'})`

  return WithLanguages
}
