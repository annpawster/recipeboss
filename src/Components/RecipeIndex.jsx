import React, { useState, useEffect } from 'react';

import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import { Button } from '@bootstrap-styled/v4';
import { connect } from 'react-redux';
import { gettingAllRecipes } from '../Store/reducer';

const RecipeIndex = ({ recipes, ...props }) => {
  useEffect(() => {});
  return (
    <Background>
      <HomeWrapper>
        <Container>
          <TextBox>
            Welcome to Recipe Boss! Your recipe management database
          </TextBox>
          <Button>Add a Recipe</Button>
          <Button>Search Recipes</Button>
          <HomePageImage
            src="https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg"
            alt="homepagesalad"
          />
          <p>Welcome to Recipe Boss!</p>
        </Container>
        <CardWrapper>
          {recipes.map((recipe, index) => (
            <RecipeCard id={index} {...recipe} key={index} />
          ))}
        </CardWrapper>
        <Button outline color="primary">
          +
        </Button>
        {'Add Recipe'}
      </HomeWrapper>
    </Background>
  );
};

const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = dispatch => ({
  grabAllRecipes: () => dispatch(gettingAllRecipes()),
});
export default RecipeIndex;

export const Background = styled.div`
  background: #101010;
`;

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
  z-index: 1;
  max-height: 350px;
  object-fit: cover;
  overflow: hidden;
`;

const HomeWrapper = styled.div`
  background: #dcdcdc;
  margin-left: 150px;
  margin-right: 150px;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const HomePageImage = styled.img`
  width: 100%;
`;
