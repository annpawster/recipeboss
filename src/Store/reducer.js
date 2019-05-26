import axios from 'axios';

//Action Types
const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
const DELETE_RECIPE = 'DELETE_RECIPE';
const ADD_RECIPE = 'ADD_RECIPE';
const EDIT_RECIPE = 'EDIT_RECIPE';

//Action Creator
const getRecipes = recipes => {
  return { type: GET_ALL_RECIPES, recipes };
};

const addRecipe = recipe => {
  console.log('made it to my action creator', recipe);
  return { type: ADD_RECIPE, recipe };
};

const editRecipe = recipe => {
  return { type: EDIT_RECIPE, recipe };
};

const deleteRecipe = recipe => {
  return { type: DELETE_RECIPE, recipe };
};

//Thunk
export const gettingAllRecipes = recipes => dispatch => {
  try {
    dispatch(getRecipes(recipes));
  } catch (err) {
    console.log('Ran into an error grabbing all recipes', err);
  }
};
export const addingARecipe = recipe => dispatch => {
  console.log('made it to my thunk', recipe);

  try {
    dispatch(addRecipe(recipe));
  } catch (err) {
    console.log('Ran into an error adding a recipe', err);
  }
};

export const editingARecipe = recipe => dispatch => {
  try {
    dispatch(editRecipe(recipe));
  } catch (err) {
    console.log('Ran into an error editing a recipe', err);
  }
};

export const deletingRecipe = recipe => dispatch => {
  try {
    dispatch(deleteRecipe(recipe));
  } catch (err) {
    console.log('Ran into an error deleting a recipe', err);
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
        recipes: [action.recipes],
      };
    case ADD_RECIPE:
      if (state.recipes[0]) {
        return { recipes: [...state.recipes, action.recipe] };
      } else {
        return {
          recipes: [action.recipe],
        };
      }
    case EDIT_RECIPE:
      const filtered = state.recipes.filter(rec => {
        return action.recipe.id !== rec.id;
      });
      return { ...state, recipes: [filtered, action.recipe] };
    case DELETE_RECIPE:
      return state;
    default:
      return state;
  }
};

export default reducer;
