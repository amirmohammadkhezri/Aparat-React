/**
 *
 * SagaExamplePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Button from 'components/Button';

import makeSelectSagaExamplePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchUserAction } from './actions';

const key = 'sagaExamplePage';

export function SagaExamplePage({ dispatch, data }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <h1>test saga</h1>
      <Button onClick={() => dispatch(fetchUserAction(2))}>get user</Button>

      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
}

SagaExamplePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectSagaExamplePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SagaExamplePage);
