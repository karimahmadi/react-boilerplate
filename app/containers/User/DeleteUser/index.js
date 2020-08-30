/**
 *
 * DeleteUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import Button from '@material-ui/core/Button/Button';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDeleteUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import { setViewMode } from '../actions';

export function DeleteUser({ user, dispatch }) {
  useInjectReducer({ key: 'deleteUser', reducer });
  useInjectSaga({ key: 'deleteUser', saga });

  const handleCancel = () => {
    dispatch(setViewMode(true));
    dispatch(push(`/user`));
  };
  const handleOk = () => {};
  return (
    <div>
      Delete User
      <Button onClick={handleOk} variant="outlined">
        Ok
      </Button>
      <Button onClick={handleCancel} variant="outlined">
        Cancel
      </Button>
    </div>
  );
}

DeleteUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  deleteUser: makeSelectDeleteUser(),
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

export default compose(withConnect)(DeleteUser);
