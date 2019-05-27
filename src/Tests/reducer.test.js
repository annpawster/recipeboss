import { getRecipes, GET_ALL_RECIPES } from '../Store/reducer';
const chai = require('chai');
const expect = chai.expect;
const chaiThings = require('chai-things');
chai.use(chaiThings);

describe('getRecipes action creator', () => {
  let recipes = [
    {
      name: "Giada's Lasagna",
      description: 'Delicious 32 Cheese Lasagne',
      instructions: 'Lay down noodles and sauce, bake.',
      image: 'https://live.staticflickr.com/2376/5799408683_9cc6ffc686_b.jpg',
    },
    {
      name: "Guy's Kickin Chicken",
      description: "This chicken is kickin'",
      instructions: 'Put every spice on it and then fry.',
      image: 'https://live.staticflickr.com/4778/40733751321_2ec04268f7_b.jpg',
    },
    {
      name: 'Dr. Pepper Steak',
      description: '23 flavors and all of them yum.',
      instructions:
        'Marinade steak in Dr. Pepper for 24 hours. Grill to medium rare.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/8a/Reindeer_steak.jpg',
    },
    {
      name: 'Chicken Picatta',
      description: "I don't actually know what Chicken Picatta is",
      instructions: 'Make chicken Picatta. I think it has Capers',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a6/Chicken_piccata_dinner_cooking_food.jpg',
    },
  ];
  const getRecipesAction = getRecipes(recipes);

  it('returns an object', () => {
    expect(typeof getRecipesAction).to.equal('object');
    expect(Object.getPrototypeOf(getRecipesAction)).to.equal(Object.prototype);
  });

  it('creates an object with `type` and `recipes`', () => {
    expect(getRecipesAction.type).to.equal(GET_ALL_RECIPES);
    expect(Array.isArray(getRecipesAction.recipes)).to.be.true;
    expect(getRecipesAction.recipes[3].name).to.equal('Chicken Picatta');
  });
});
