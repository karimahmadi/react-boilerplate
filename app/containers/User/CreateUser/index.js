/**
 *
 * CreateUser
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
import makeSelectCreateUser from './selectors';
import reducer from './reducer';
import saga from './saga';

export function CreateUser({ user, dispatch }) {
  useInjectReducer({ key: 'createUser', reducer });
  useInjectSaga({ key: 'createUser', saga });

  const handleCancel = () => {
    dispatch(setViewMode(true));
    dispatch(push(`/user`));
  };
  const handleOk = () => {};
  return (
    <div>
      Create User
      <Button onClick={handleOk} variant="outlined">
        Ok
      </Button>
      <Button onClick={handleCancel} variant="outlined">
        Cancel
      </Button>
    </div>
  );
}

CreateUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createUser: makeSelectCreateUser(),
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

export default compose(withConnect)(CreateUser);
