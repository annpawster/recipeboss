import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RecipeCard = recipe => {
  return (
    <Link
      to={{
        pathname: `/${recipe.name}`,
        state: recipe,
      }}
    >
      <CardWrapper>
        <Image src={recipe.image} />
        <div>
          <div>
            <h3>{recipe.name}</h3>
          </div>
        </div>
      </CardWrapper>
    </Link>
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
  &:hover {
    color: white;
    background-color: red;
  }
`;

export const Image = styled.img`
  margin-top: 25px;
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 5px;
  z-index: -1;
  &:hover {
    color: white;
    background-color: red;
    opacity: 0;
  }
`;

// style = {{ borderTopLeftRadius: '5px',borderTopRightRadius: '5px' }}
