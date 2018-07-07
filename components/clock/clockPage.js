import React from 'react';
import Clock from './clock';
import withReduxStore from '../../lib/with-redux-store';
const ClockPage = ({ clock }) => <div> <Clock {...clock}/></div>

export default withReduxStore(ClockPage);

    