import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from '../src/test/Card';

describe('<Card /> Component Test',()=>{
  it('card must be renders correctly without props', () => {
    const component = shallow(<Card />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('card must be renders correctly with props', () =>{
    const component = shallow(<Card text='Hello Bondan!'/>);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onPress when pressed', ()=>{
    const onPress = jest.fn();
    const component = shallow(<Card onPress={onPress}/>);
    //component.find('TouchableOpacity').simulate('press');
    component.instance().onPress()
    expect(onPress).toBeCalled()
    expect(component.state().counter).toEqual(1);
  });
})
