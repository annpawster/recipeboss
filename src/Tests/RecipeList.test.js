import React from 'react';
import { RecipeList } from '../Components/RecipeList';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const chai = require('chai');
const expect = chai.expect;
const chaiThings = require('chai-things');
chai.use(chaiThings);

configure({ adapter: new Adapter() });

describe('RecipeList Component', () => {
  it('should render without throwing an error', function() {
    const wrapper = shallow(<RecipeList />);
    expect(wrapper.exists()).to.equal(true);
  });
});
