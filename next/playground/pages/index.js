import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

export default class Index extends React.Component {
  // componentDidMount() {
  //   Router.beforePopState(({ url, as, options }) => {
  //     console.log('--- beforePopState', { url, as, options });
  //     // I only want to allow these two routes!
  //     if (as !== '/' || as !== '/other') {
  //       // Have SSR render bad routes as a 404.
  //       window.location.href = as;
  //       return false;
  //     }
  //     return true;
  //   });
  // }
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <p>Hello world!</p>
        <div>
          {['init', 'prefetch', 'language', 'reduxClock', 'nested'].map((name, index) => (
            <div key={index}>
              <Link href={`/${name}`}>
                <a>{name}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}