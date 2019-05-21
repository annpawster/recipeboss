import React from 'react';
import { Button } from '@bootstrap-styled/v4';

class SingleRecipe extends React.Component {
  render() {
    const recipe = this.props.location.state;
    return (
      <>
        <h1>Hello</h1>
        <div>{recipe.name}</div>
        <div>{recipe.description}</div>
        <div>{recipe.instructions}</div>
        <div>
          <img src={recipe.image} alt="recipe" />
        </div>
        <Button>Edit Recipe</Button>
        <Button>Delete Recipe</Button>
      </>
    );
  }
}

export default SingleRecipe;
