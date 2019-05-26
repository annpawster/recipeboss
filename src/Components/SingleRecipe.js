import React, { useState } from 'react';
import { Button, Container } from '@bootstrap-styled/v4';
import { CardWrapper } from './RecipeIndex';
import styled from 'styled-components';
import { ButtonWrapper } from '../Forms/AddRecipe';
import EditRecipe from '../Forms/EditRecipe';

const SingleRecipe = props => {
  const [showModal, setShowModal] = useState(false);

  const viewModal = () => {
    setShowModal(!showModal);
  };

  const recipe = props.location.state;
  console.log('am I showing the modal?', showModal);

  return (
    <>
      <Container>
        <h1>{recipe.name}</h1>
        <CardWrapper>
          <div>
            <Image src={recipe.image} alt="recipe" />
          </div>
          <div>
            <p>Description: {recipe.description}</p>
            <p>Instructions: {recipe.instructions}</p>
            <ButtonWrapper>
              <Button color="info" onClick={viewModal}>
                Edit
              </Button>
            </ButtonWrapper>
            {showModal ? (
              <EditRecipe
                showModal={showModal}
                viewModal={viewModal}
                recipeInfo={recipe}
              />
            ) : null}
            <ButtonWrapper>
              <Button outline color="danger">
                Delete
              </Button>
            </ButtonWrapper>
          </div>
        </CardWrapper>
      </Container>
    </>
  );
};

export default SingleRecipe;
const Image = styled.img`
  width: 250px;
  height: 250px;
`;
