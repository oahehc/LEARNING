import React from 'react';
import App from './App';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<App />', () => {
  // it('snapshot', () => {
  //   const component = shallow(<App />);
  //   expect(component).toMatchSnapshot();
  // });
  
  it('find', () => {
    const component = shallow(<App />);
    console.log('h1+h2:', component.find('h1+h2'));
    console.log('h1~h2:', component.find('h1~h2'));
    console.log('div~h2:', component.find('div~h2'));


    console.log('find h2:', component.find('.h2'));
    console.log('find then filter:', component.find('.h2').filter('.desc'));
    expect(component.find('.h1').is('.h1')).toBe(true);
  });
});