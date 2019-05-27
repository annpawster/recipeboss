import React from 'react';
import { RecipeCard } from '../Components/RecipeCard';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const chai = require('chai');
const expect = chai.expect;
const chaiThings = require('chai-things');
chai.use(chaiThings);

configure({ adapter: new Adapter() });

describe('RecipeList Component', () => {
  let recipe = {
    name: "Giada's Lasagna",
    description: 'Delicious 32 Cheese Lasagne',
    instructions: 'Lay down noodles and sauce, bake.',
    image: 'https://live.staticflickr.com/2376/5799408683_9cc6ffc686_b.jpg',
  };
  const wrapper = shallow(<RecipeCard recipe={recipe} />);
  it('should render without throwing an error', function() {
    expect(wrapper.exists()).to.equal(true);
  });

  it('renders only one recipe', function() {
    expect(wrapper.find('CardWrapper')).to.have.length(1);
  });
});
