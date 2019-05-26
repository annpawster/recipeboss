import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CardWrapper } from '../Components/RecipeIndex';

class ImageSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
    this.searchImages = this.searchImages.bind(this);
  }

  componentDidMount() {
    this.searchImages();
  }

  async searchImages() {
    const query = this.props.search.replace(/\s/gm, '+');
    const queryurl = `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${query}`;
    try {
      const { data } = await axios({
        method: 'get', //you can set what request you want to be
        url: queryurl,
        data: { url: queryurl },
        headers: {
          'Ocp-Apim-Subscription-Key': '9af9b804ec6e46448c0a9952a692a9cc',
          Accept: 'application/json',
        },
      });

      const images = data.value.map(element => {
        return element.contentUrl;
      });

      this.setState({
        images: images,
      });
    } catch (error) {
      console.log('Bad request (invalid URL)\n' + queryurl);
      return false;
    }
  }

  render() {
    return this.state.images.length > 1 ? (
      <CardWrapper>
        {this.state.images.map((image, index) => {
          while (index < 9) {
            return (
              <Button onClick={this.props.handleChange} key={index}>
                <Image src={image} name="image" alt="Image" />
              </Button>
            );
          }
        })}
      </CardWrapper>
    ) : (
      'Did not work'
    );
  }
}

export default ImageSearch;

const Image = styled.img`
  width: 100px;
  height: 100px;
  background: black
  &:hover {
    opacity: 0.3;
  }
`;

const Button = styled.button`
  color: white;
  border: 0px;
  margin: 5px;
`;
