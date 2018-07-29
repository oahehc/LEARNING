import { shallow } from 'enzyme'
import React from 'react'
import Head from 'next/head';
import App from '../index.js';

describe('With Enzyme', () => {
  it('have header', () => {
    const app = shallow(<App />);
    expect(app.find(Head).length).toEqual(1);
  })
})