import { async } from 'q';

//Action Types
const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
const REMOVE_RECIPE = 'REMOVE_RECIPE';
const ADD_RECIPE = 'ADD_RECIPE';

//Action Creator
const getRecipes = recipes => {
  return { type: GET_ALL_RECIPES, recipes };
};

const addRecipe = recipe => {
  return { type: ADD_RECIPE, recipe };
};

//Thunk
export const gettingAllRecipes = recipes => async dispatch => {
  try {
    dispatch(getRecipes(recipes));
  } catch (err) {
    console.log('Ran into an error grabbing all recipes', err);
  }
};
export const addingARecipe = recipe => async dispatch => {
  try {
    dispatch(addRecipe(recipe));
  } catch (err) {
    console.log('Ran into an error adding a recipe', err);
  }
};

//State
const initialState = {
  recipes: [],
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
      };
    case ADD_RECIPE:
      console.log('made it to my reducer');
      return {
        ...state,
        recipes: [...state.recipes, action.recipe],
      };

    default:
      return state;
  }
};

export default reducer;
