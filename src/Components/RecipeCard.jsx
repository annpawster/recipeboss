import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@bootstrap-styled/v4';
import { ButtonWrapper } from '../Forms/AddRecipe';
import { connect } from 'react-redux';
import { deletingRecipe } from '../Store/reducer';

export const RecipeCard = recipe => {
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
            state: recipe.id,
          }}
        >
          <ButtonWrapper>
            <Button color="info">View/Edit</Button>
          </ButtonWrapper>
        </Link>
        <ButtonWrapper>
          <Button
            outline
            color="danger"
            onClick={() => recipe.delete(recipe.id)}
          >
            Delete
          </Button>
        </ButtonWrapper>
      </div>
    </CardWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(deletingRecipe(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(RecipeCard);

const CardWrapper = styled.div`
  margin-top: 25px;
  background-color: white;
  width: 300px;
  height: auto;
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

CardWrapper.displayName = 'CardWrapper';
