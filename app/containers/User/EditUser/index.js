/**
 *
 * EditUser
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
import reducer from './reducer';
import saga from './saga';
import makeSelectUser from '../selectors';
import { setViewMode } from '../actions';

export function EditUser({ user, dispatch }) {
  useInjectReducer({ key: 'editUser', reducer });
  useInjectSaga({ key: 'editUser', saga });

  const handleCancel = () => {
    dispatch(setViewMode(true));
    dispatch(push(`/user`));
  };
  const handleOk = () => {};
  return (
    <div>
      Edit User
      <Button onClick={handleOk} variant="outlined">
        Ok
      </Button>
      <Button onClick={handleCancel} variant="outlined">
        Cancel
      </Button>
    </div>
  );
}

EditUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
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

export default compose(withConnect)(EditUser);
