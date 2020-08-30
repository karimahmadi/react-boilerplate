import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createUser state domain
 */

const selectCreateUserDomain = state => state.createUser || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateUser
 */

const makeSelectCreateUser = () =>
  createSelector(
    selectCreateUserDomain,
    substate => substate,
  );

export default makeSelectCreateUser;
export { selectCreateUserDomain };
