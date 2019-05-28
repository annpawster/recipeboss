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

  return props.recipe ? (
    <>
      <Container>
        <h1>{props.recipe.name}</h1>
        <CardWrapper>
          <div>
            <Image src={props.recipe.image} alt="recipe" />
            <ButtonWrapper>
              <Link to="/">
                <Button color="info">{'<< View All'}</Button>
              </Link>
            </ButtonWrapper>
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
