import React from 'react';
import Unsplash from 'unsplash-js';
import axios from 'axios';
import { Input, Button } from '@bootstrap-styled/v4';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_APP_ACCESS_KEY,
  secret: process.env.REACT_APP_APP_SECRET,
});

class ImageSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      selection: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return <>Hey there! Add the search bar</>;
  }
}

export default ImageSearch;
