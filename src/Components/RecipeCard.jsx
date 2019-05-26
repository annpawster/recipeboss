import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@bootstrap-styled/v4';
import { ButtonWrapper } from '../Forms/AddRecipe';

const RecipeCard = recipe => {
  return (
    <CardWrapper>
      <div>
        <h3>{recipe.name}</h3>
      </div>
      <Image src={recipe.image} />
      <div>
        <Link
          to={{
            pathname: `/recipes/${recipe.name}`,
            state: recipe,
          }}
        >
          <ButtonWrapper>
            <Button color="info">View/Edit</Button>
          </ButtonWrapper>
        </Link>
        <ButtonWrapper>
          <Button outline color="danger">
            Delete
          </Button>
        </ButtonWrapper>
      </div>
    </CardWrapper>
  );
};

export default RecipeCard;

const CardWrapper = styled.div`
  margin-top: 25px;
  background-color: white;
  width: 300px;
  height: auto;
  cursor: pointer;
  position: relative;
  border: #f0f0f0 solid 1px;
  box-shadow: 0 5px 5px #dcdcdc;
  border-radius: 7px;
`;

export const Image = styled.img`
  margin-top: 25px;
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 5px;
  z-index: -1;
`;
