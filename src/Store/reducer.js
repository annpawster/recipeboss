import recipeData from '../Components/recipes';

//Action Types
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
const DELETE_RECIPE = 'DELETE_RECIPE';
const ADD_RECIPE = 'ADD_RECIPE';
const EDIT_RECIPE = 'EDIT_RECIPE';
const GET_SINGLE_RECIPE = 'GET_SINGLE_RECIPE';

//Action Creator
export const getRecipes = recipes => {
  return { type: GET_ALL_RECIPES, recipes };
};

const addRecipe = recipe => {
  return { type: ADD_RECIPE, recipe };
};

const editRecipe = recipe => {
  return { type: EDIT_RECIPE, recipe };
};

const deleteRecipe = id => {
  return { type: DELETE_RECIPE, id };
};

const getSingleRecipe = id => {
  return { type: GET_SINGLE_RECIPE, id };
};

//Thunk
export const gettingAllRecipes = () => dispatch => {
  try {
    dispatch(getRecipes(recipeData));
  } catch (err) {
    console.log('Ran into an error grabbing all recipes', err);
  }
};
export const addingARecipe = recipe => dispatch => {
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

export const deletingRecipe = id => dispatch => {
  try {
    dispatch(deleteRecipe(id));
  } catch (err) {
    console.log('Ran into an error deleting a recipe', err);
  }
};

export const gettingSingleRecipe = id => dispatch => {
  try {
    dispatch(getSingleRecipe(id));
  } catch (err) {
    console.log('Ran into an error getting a single recipe', err);
  }
};

//State
const initialState = {
  recipes: [],
  singleRecipe: {},
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      if (state.recipes.length > 0) return { ...state };
      else {
        return {
          recipes: action.recipes,
        };
      }
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
      return {
        recipes: filtered.concat(action.recipe),
        singleRecipe: action.recipe,
      };
    case DELETE_RECIPE:
      const allButDeleted = state.recipes.filter(rec => {
        return action.id !== rec.id;
      });
      return { recipes: allButDeleted, singleRecipe: {} };
    case GET_SINGLE_RECIPE:
      const [single] = state.recipes.filter(rec => {
        return action.id === rec.id;
      });
      return { ...state, singleRecipe: single };
    default:
      return state;
  }
};

export default reducer;
