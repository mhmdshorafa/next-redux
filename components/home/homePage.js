import React from 'react';
import ReactQuill from './quill';
import withReduxStore from '../../lib/with-redux-store';
const homePage = () => <div> <ReactQuill /></div>;

export default withReduxStore(homePage);

