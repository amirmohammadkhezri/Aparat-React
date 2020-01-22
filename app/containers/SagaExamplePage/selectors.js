import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sagaExamplePage state domain
 */

const selectSagaExamplePageDomain = state =>
  state.sagaExamplePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SagaExamplePage
 */

const makeSelectSagaExamplePage = () =>
  createSelector(
    selectSagaExamplePageDomain,
    substate => ({
      userId: substate.userId,
      user: substate.user,
      error: substate.error,
    }),
  );

export default makeSelectSagaExamplePage;
export { selectSagaExamplePageDomain };
