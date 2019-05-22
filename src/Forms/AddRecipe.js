import React from 'react';
import ImageSearch from './UnsplashSearch';
import { connect } from 'react-redux';
import { addingARecipe } from '../Store/reducer';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  FormText,
  Input,
} from '@bootstrap-styled/v4';

class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      image:
        '' ||
        'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80',
      searchImage: false,
      addImage: false,
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
      image: this.state.image,
    };
    this.props.addRecipe(newRecipe);
    this.props.viewModal();
  }

  render() {
    return (
      <Modal isOpen={this.props.showModal}>
        <ModalHeader>Add Recipe</ModalHeader>
        <ModalBody>
          Use the below form to add a new recipe to the database.
          <Form>
            <FormGroup>
              <Label>Recipe Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Recipe Description</Label>
              <Input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <FormText color="muted">
                Brief description of recipe you're adding.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label>Image</Label>
              <Button
                onClick={() =>
                  this.setState({ searchImage: !this.searchImage })
                }
              >
                Search for Image
              </Button>
              <Button
                onClick={() => this.setState({ addImage: !this.addImage })}
              >
                Input URL
              </Button>
              {this.state.searchImage ? (
                <ImageSearch />
              ) : this.state.addImage ? (
                <Input
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
              ) : null}
              <FormText color="muted">
                Brief description of recipe you're adding.
              </FormText>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.onSubmit}>
            Submit New Recipe
          </Button>
          <Button color="secondary" onClick={this.props.viewModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
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
