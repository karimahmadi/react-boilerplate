import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editUser state domain
 */

const selectEditUserDomain = state => state.editUser || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditUser
 */

const makeSelectEditUser = () =>
  createSelector(
    selectEditUserDomain,
    substate => substate,
  );

export default makeSelectEditUser;
export { selectEditUserDomain };
