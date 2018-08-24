import React from 'react'
import Sub from '../components/sub';

export default class Nested extends React.Component {
  static getInitialProps ({ req }) {
    console.log('-- Nested getInitialProps');
    return {}
  }

  componentDidMount () {
    console.log('-- Nested componentDidMount');
  }
  
  render () {
    return (
      <div>
        <Sub />
      </div>
    )
  }
}
