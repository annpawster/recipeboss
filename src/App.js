import React, { useState, useEffect } from 'react';
import RecipeIndex from './Components/RecipeIndex';
import './App.css';
import NavBar from './Components/NavBar';
import recipeData from './Components/recipes';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleRecipe from './Components/SingleRecipe';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
    font-family: 'Raleway', sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Column>
          <NavBar />
        </Column>
        <Switch>
          <Column>
            <Route exact path="/" render={() => <RecipeIndex />} />
            <Route path="/recipes/:id" component={SingleRecipe} />
          </Column>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

export const Column = styled.div`
display: flex
flex-direction: column`;
