import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the deleteUser state domain
 */

const selectDeleteUserDomain = state => state.deleteUser || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DeleteUser
 */

const makeSelectDeleteUser = () =>
  createSelector(
    selectDeleteUserDomain,
    substate => substate,
  );

export default makeSelectDeleteUser;
export { selectDeleteUserDomain };
