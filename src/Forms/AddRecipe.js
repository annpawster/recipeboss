import React from 'react';
import ImageSearch from './BingSearch';
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
  Alert,
} from '@bootstrap-styled/v4';
import styled from 'styled-components';

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
      showAlert: false,
      notSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAlert = this.handleAlert.bind(this);
    this.notSubmitted = this.notSubmitted.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value || event.target.src,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const newRecipe = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      id: this.props.id,
    };
    this.props.addRecipe(newRecipe);
    this.props.viewModal();
  }

  handleSearch() {
    this.setState({
      searchImage: !this.state.searchImage,
    });
  }
  handleAlert() {
    this.setState({
      showAlert: !this.state.showAlert,
    });
  }

  notSubmitted() {
    this.setState({
      notSubmitted: !this.state.notSubmitted,
    });
  }

  render() {
    return (
      <Modal isOpen={this.props.showModal}>
        <ModalHeader>Add Recipe</ModalHeader>
        <ModalBody>
          Use the below form to add a new recipe to the database.
        </ModalBody>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Recipe Name</Label>
              <InputWrapper>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <Label>Recipe Description</Label>
              <InputWrapper>
                <Input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </InputWrapper>
              <FormText color="muted">
                Brief description of recipe you're adding.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label>Recipe Image</Label>
              {this.state.searchImage ? (
                this.state.name.length > 1 ? (
                  <>
                    <FormText color="muted">
                      Please choose an image below.
                    </FormText>
                    <ImageSearch
                      handleChange={this.handleChange}
                      search={this.state.name}
                    />
                  </>
                ) : (
                  ((
                    <FormText color="muted">
                      Please add in a recipe name
                    </FormText>
                  ),
                  this.handleSearch())
                )
              ) : this.state.addImage ? (
                <InputWrapper>
                  <Input
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange={this.handleChange}
                  />
                </InputWrapper>
              ) : (
                <>
                  <ButtonWrapper>
                    <Button
                      outline
                      color="info"
                      onClick={
                        this.state.name ? this.handleSearch : this.handleAlert
                      }
                    >
                      Select Image
                    </Button>
                    {this.state.showAlert ? (
                      <Alert color="danger" uncontrolled>
                        Please add a recipe name before searching.
                      </Alert>
                    ) : (
                      <FormText color="muted">
                        Select an image from the database.
                      </FormText>
                    )}
                  </ButtonWrapper>
                  <ButtonWrapper>
                    <Button
                      outline
                      color="info"
                      onClick={() =>
                        this.setState({ addImage: !this.state.addImage })
                      }
                    >
                      Input URL
                    </Button>
                    <FormText color="muted">
                      Find an image URL and add it.
                    </FormText>
                  </ButtonWrapper>
                </>
              )}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {this.state.notSubmitted ? (
            <Alert color="danger" uncontrolled>
              Please make sure you've added a recipe name and image before
              submitting edits.
            </Alert>
          ) : null}
          <Button
            color="info"
            onClick={
              this.state.name && this.state.image
                ? this.onSubmit
                : this.notSubmitted
            }
          >
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

const InputWrapper = styled.div`
  width: 75%;
`;

export const ButtonWrapper = styled.div`
  padding: 15px;
  background: white;
  border: 0px;
`;
