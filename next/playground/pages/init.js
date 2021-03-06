import React from 'react';
import Router from 'next/router';

export default class extends React.Component {
  static async getInitialProps(param) {
    console.log('--- getInitialProps', { param });
    const userAgent = param.req ? param.req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return (
      <>
        <div>Hello World {this.props.userAgent}</div>
        <div>
          Click <span onClick={() => Router.push('/')}>here</span> to index
        </div>
      </>
    );
  }
}
