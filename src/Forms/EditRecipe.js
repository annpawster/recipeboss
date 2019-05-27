import React from 'react';
import { editingARecipe } from '../Store/reducer';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from '@bootstrap-styled/v4';
import styled from 'styled-components';
import ImageSearch from './BingSearch';

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '' || this.props.recipeInfo.name,
      description: '' || this.props.recipeInfo.description,
      instructions: '' || this.props.recipeInfo.instructions,
      image: '' || this.props.recipeInfo.image,
      notSubmitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    const editedRecipe = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      instructions: this.state.instructions,
      id: this.props.recipeInfo.id,
    };

    this.props.edit(editedRecipe);
    this.props.viewModal();
  }

  notSubmitted() {
    this.setState({
      notSubmitted: !this.state.notSubmitted,
    });
  }
  render() {
    return (
      <Modal isOpen={this.props.showModal}>
        <ModalHeader>Edit {this.props.recipeInfo.name}</ModalHeader>
        <ModalBody>
          Use the below form to make updates to this recipe in the database.
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
            </FormGroup>
            <FormGroup>
              <Label>Recipe Instructions</Label>
              <InputWrapper>
                <Input
                  type="text"
                  name="instructions"
                  value={this.state.instructions}
                  onChange={this.handleChange}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <Label>Recipe Image</Label>
              <InputWrapper>
                <ImageSearch
                  handleChange={this.handleChange}
                  search={this.state.name}
                />
              </InputWrapper>
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
            Submit Changes
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
  edit: editedRecipe => dispatch(editingARecipe(editedRecipe)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRecipe);

const InputWrapper = styled.div`
  width: 75%;
`;

export const ButtonWrapper = styled.div`
  padding: 15px;
  background: white;
  border: 0px;
`;
