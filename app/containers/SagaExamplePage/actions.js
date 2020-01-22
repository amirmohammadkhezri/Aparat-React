/*
 *
 * SagaExamplePage actions
 *
 */

import {
  FETCH_USER_ACTION,
  FETCH_USER_SUCCESS_ACTION,
  FETCH_USER_FAIL_ACTION,
} from './constants';

export function fetchUserAction(userId) {
  return {
    type: FETCH_USER_ACTION,
    userId,
  };
}

export function fetchUserSuccessAction(user) {
  return {
    type: FETCH_USER_SUCCESS_ACTION,
    user,
  };
}

export function fetchUserFailAction(error) {
  return {
    type: FETCH_USER_FAIL_ACTION,
    error,
  };
}
