import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';

export default class Quill extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quillValue: ''
    };
    if (typeof window !== 'undefined')
      this.ReactQuill = require('react-quill'); // eslint-disable-line
  }

  onChange (e) {
    this.setState({ quillValue: e });
  }

  render () {
    const ReactQuill = this.ReactQuill;
    if (typeof window !== 'undefined' && ReactQuill) {
      return (
        <ReactQuill
          onChange={this.onChange}
          theme='snow'
          value={this.state.quillValue}
        />
      );
    } else {
      return <textarea />;
    }
  }
}
