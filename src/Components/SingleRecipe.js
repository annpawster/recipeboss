import React, { useState, useEffect } from 'react';
import { Button, Container } from '@bootstrap-styled/v4';
import { CardWrapper } from './RecipeIndex';
import styled from 'styled-components';
import { ButtonWrapper } from '../Forms/AddRecipe';
import EditRecipe from '../Forms/EditRecipe';
import { connect } from 'react-redux';
import { gettingSingleRecipe } from '../Store/reducer';
import { Link } from 'react-router-dom';

const SingleRecipe = props => {
  const [showModal, setShowModal] = useState(false);

  const viewModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    props.getSingleRecipe(props.location.state);
  }, []);

  const removeRecipe = () => {};
  return props.recipe ? (
    <>
      <Container>
        <h1>{props.recipe.name}</h1>
        <CardWrapper>
          <div>
            <Image src={props.recipe.image} alt="recipe" />
          </div>
          <div>
            <p>Description: {props.recipe.description}</p>
            <p>Instructions: {props.recipe.instructions}</p>
            <ButtonWrapper>
              <Button color="info" onClick={viewModal}>
                Edit
              </Button>
            </ButtonWrapper>
            {showModal ? (
              <EditRecipe
                showModal={showModal}
                viewModal={viewModal}
                recipeInfo={props.recipe}
              />
            ) : null}
            <ButtonWrapper>
              <Link to="/">
                <Button color="info">Go Back</Button>
              </Link>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button outline color="danger" onClick={removeRecipe}>
                Delete
              </Button>
            </ButtonWrapper>
          </div>
        </CardWrapper>
      </Container>
    </>
  ) : (
    'Loading...'
  );
};

const mapStateToProps = state => ({
  recipe: state.singleRecipe,
});

const mapDispatchToProps = dispatch => ({
  getSingleRecipe: id => dispatch(gettingSingleRecipe(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRecipe);

const Image = styled.img`
  width: 250px;
  height: 250px;
`;
