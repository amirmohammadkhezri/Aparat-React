/*
 *
 * SagaExamplePage reducer
 *
 */
import produce from 'immer';
import {
  FETCH_USER_ACTION,
  FETCH_USER_SUCCESS_ACTION,
  FETCH_USER_FAIL_ACTION,
} from './constants';

export const initialState = {
  userId: null,
  user: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const sagaExamplePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_USER_ACTION:
        draft.userId = action.userId;
        draft.error = null;
        draft.user = null;
        break;

      case FETCH_USER_SUCCESS_ACTION:
        draft.userId = null;
        draft.error = null;
        draft.user = action.user;
        break;

      case FETCH_USER_FAIL_ACTION:
        draft.userId = null;
        draft.error = action.error;
        draft.user = null;
        break;
    }
  });

export default sagaExamplePageReducer;
