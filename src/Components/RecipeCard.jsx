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
          <div>
            <p>{recipe.description}</p>
          </div>
          <div>
            <p>{recipe.instructions}</p>
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
  border: #c0c0c0 solid 1px;
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

// style = {{ borderTopLeftRadius: '5px',borderTopRightRadius: '5px' }}
