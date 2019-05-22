import React from 'react';
import ReactDOM from 'react-dom';
import RecipeIndex from '../Components/RecipeIndex';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RecipeIndex Component', () => {
  it('renders at least four <RecipeCard /> components', () => {
    const wrapper = shallow(<RecipeIndex />);
    expect(wrapper.find(RecipeCard)).to.have.lengthOf(4);
  });
});
