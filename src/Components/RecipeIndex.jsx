import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import { Button, ListGroup } from '@bootstrap-styled/v4';
import { connect } from 'react-redux';
import { gettingAllRecipes } from '../Store/reducer';
import AddRecipe from '../Forms/AddRecipe';
import RecipeList from './RecipeList';

export const RecipeIndex = ({ recipes, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [listView, setlistView] = useState('grid');

  useEffect(() => {
    props.grabAllRecipes();
  }, []);

  const viewModal = () => {
    setShowModal(!showModal);
  };

  const viewMode = mode => {
    setlistView(mode);
  };

  const allRecipes = props.state;

  return (
    <Background>
      <HomeWrapper>
        <Container>
          <Welcome>
            Welcome to Recipe Boss, <strong>User@RecipeBoss.com</strong>!
          </Welcome>
          <ButtonWrapper onClick={viewModal} color="info">
            Add a Recipe
          </ButtonWrapper>
          <LinkWrapper>
            <StyledLink onClick={() => viewMode('list')}>List View </StyledLink>
            ||
            <StyledLink onClick={() => viewMode('grid')}> Grid View</StyledLink>
          </LinkWrapper>
          {showModal ? (
            <AddRecipe
              showModal={showModal}
              viewModal={viewModal}
              id={allRecipes.length}
            />
          ) : null}
          <HomePageImage
            src="https://cdn.pixabay.com/photo/2018/10/01/12/04/cookbook-3716009_1280.jpg"
            alt="homepagesalad"
          />
        </Container>
        {allRecipes ? (
          <strong>You have a total of {allRecipes.length} recipes!</strong>
        ) : null}
        {listView === 'grid' ? (
          <CardWrapper>
            {allRecipes
              ? allRecipes.map((recipe, index) => (
                  <RecipeCard id={index} {...recipe} key={index} />
                ))
              : 'Loading...'}
          </CardWrapper>
        ) : (
          <CardWrapper>
            <ListGroup>
              {allRecipes.map((recipe, index) => (
                <RecipeList id={index} {...recipe} key={index} />
              ))}
            </ListGroup>
          </CardWrapper>
        )}
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

const StyledLink = styled.a`
  text-decoration: none;
  color: #282828;
  &:hover {
    color: #00ccff;
  }

  &.active {
    color: #0099cc;
    text-decoration: underline;
    font-size: 20px;
  }

  &:visited {
    color: #0099cc;
    text-decoration: underline;
    font-size: 20px;
  }
`;
StyledLink.displayName = 'StyledLink';

const LinkWrapper = styled.div`
  padding: 15px 45px;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`;

export const ButtonWrapper = styled(Button)`
  margin: 1em;
  padding: 15px 45px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
`;
ButtonWrapper.displayName = 'ButtonWrapper';

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

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const HomePageImage = styled.img`
  width: 100%;
`;
