import { connect } from 'react-redux';

import Clock from '../components/clock/clockPage';

import * as clockActions from '../actions/clockActions/clockActions';

const mapStateToProps = (store) => {
  return {  clock: store.clock }
}

export default connect(mapStateToProps, {
  clockActions
})(Clock);

