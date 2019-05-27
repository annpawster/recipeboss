import React from 'react';
import { ListGroupItem, Button, Col } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletingRecipe } from '../Store/reducer';

export const RecipeList = recipe => {
  return (
    <ListGroupItem className="justify-content-between">
      <Col lg="5">
        <strong>{recipe.name}</strong>, {recipe.description}
      </Col>
      <Col padding="5px">
        <ButtonWrapper>
          <Link
            to={{
              pathname: `/recipes/${recipe.name}`,
              state: recipe.id,
            }}
          >
            <Button color="info" size="sm">
              View/Edit
            </Button>
          </Link>
        </ButtonWrapper>
        <Button
          outline
          color="danger"
          size="sm"
          onClick={() => recipe.delete(recipe.id)}
        >
          Delete
        </Button>
      </Col>
    </ListGroupItem>
  );
};

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(deletingRecipe(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(RecipeList);

const ButtonWrapper = styled.div`
  padding: 5px;
  justify-content: right;
`;
