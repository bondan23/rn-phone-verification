import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Landing from '@components/Landing';
import renderer from 'react-test-renderer';

describe('<Landing /> Component Test',()=>{
  it('Landing renders correctly', () => {
    //const component = shallow(<Landing />);
    const component = renderer.create(
      <Landing />
    );

    expect(component.toJSON()).toMatchSnapshot()
  });
})
