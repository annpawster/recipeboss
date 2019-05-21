import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Option,
  Button,
} from '@bootstrap-styled/v4';
import { connect } from 'react-redux';
import { addingARecipe } from '../Store/reducer';

class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      instructions: '',
      image: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const newRecipe = {
      name: this.state.name,
      description: this.state.description,
      instructions: this.state.instructions,
      image: this.state.image,
    };
    this.props.addRecipe(newRecipe);
  }
  render() {
    console.log('what is this', this.props.state);
    return (
      <Form>
        <FormGroup>
          <Label htmlFor="inline-form-input">Name</Label>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label hidden htmlFor="inline-form-input-group">
            Description
          </Label>
          <Input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inline-form-input-group">Instructions</Label>
          <Input
            type="text"
            name="instructions"
            value={this.state.instructions}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="inline-form-input-group">Image</Label>
          <Input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button color="primary" type="submit" onClick={this.onSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  addRecipe: newRecipe => dispatch(addingARecipe(newRecipe)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRecipe);
