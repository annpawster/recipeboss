import React, { useEffect, useState } from 'react';

import RecipeCard from './RecipeCard';
import styled from 'styled-components';
// import { Button } from '@bootstrap-styled/v4';
import { connect } from 'react-redux';
import { gettingAllRecipes } from '../Store/reducer';
import AddRecipe from '../Forms/AddRecipe';

const RecipeIndex = ({ recipes, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    props.grabAllRecipes();
  });

  const viewModal = () => {
    setShowModal(!showModal);
  };

  props.state
    ? (recipes = recipes.concat(props.state))
    : (recipes = props.recipes);

  return (
    <Background>
      <HomeWrapper>
        <Container>
          <Welcome>Welcome to Recipe Boss!</Welcome>
          <Button onClick={viewModal}>Add a Recipe</Button>
          {showModal ? (
            <AddRecipe showModal={showModal} viewModal={viewModal} />
          ) : null}
          <HomePageImage
            src="https://cdn.pixabay.com/photo/2018/10/01/12/04/cookbook-3716009_1280.jpg"
            alt="homepagesalad"
          />
          <p>Welcome to Recipe Boss!</p>
        </Container>
        <CardWrapper>
          {recipes.map((recipe, index) => (
            <RecipeCard id={index} {...recipe} key={index} />
          ))}
        </CardWrapper>
      </HomeWrapper>
    </Background>
  );
};

const mapStateToProps = state => ({
  state: state.recipes,
});

const mapDispatchToProps = dispatch => ({
  grabAllRecipes: () => dispatch(gettingAllRecipes()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex);

export const Background = styled.div`
  background: white;
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 15px 45px;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 5px 10px #777;
  &:hover {
    color: white;
    background-color: red;
  }
`;

const Container = styled.div`
  margin-top: 50px;
  position: relative;
  text-align: center;
  z-index: 1;
  max-height: 350px;
  object-fit: cover;
  overflow: hidden;
  color: #303030;
`;

const HomeWrapper = styled.div`
  background: #f5f5f5;
  margin-left: 100px;
  margin-right: 100px;
  box-shadow: 0 15px 10px #777;
  min-height: 800px;
`;

const Welcome = styled.div`
  font-size: 2em;
  position: absolute;
  top: 25%;
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
