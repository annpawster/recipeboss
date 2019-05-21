import React, { useState, useEffect } from 'react';

import RecipeIndex from './Components/RecipeIndex';
import './App.css';
import NavBar from './Components/NavBar';
import recipeData from './Components/recipes';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleRecipe from './Components/SingleRecipe';
import AddRecipe from './Forms/AddRecipe';
import EditRecipe from './Forms/AddRecipe';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
    font-family: 'Raleway', sans-serif;
  }
`;

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <NavBar />
        <Switch>
          <Route exact path="/add" component={AddRecipe} />
          <Route exact path="/edit" component={EditRecipe} />

          <Route
            exact
            path="/"
            render={props => <RecipeIndex recipes={recipes} />}
          />
          <Route path="/:id" component={SingleRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
