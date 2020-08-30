/**
 *
 * User
 *
 */

import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { push } from 'connected-react-router';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Button from '@material-ui/core/Button/Button';
import makeSelectUser, { makeSelectUserList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { requestUserList, setCurrentRow, setViewMode } from './actions';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';

function User(props) {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });
  const { dispatch, user, userList } = props;

  useEffect(() => {
    dispatch(requestUserList());
  }, []);

  const handleEditUser = row => event => {
    dispatch(setCurrentRow(row));
    dispatch(setViewMode(false));
    dispatch(push(`/user/edit`));
  };

  const handleDeleteUser = row => event => { 
    dispatch(setCurrentRow(row));
    dispatch(setViewMode(false));
    dispatch(push(`/user/delete`));
  };

  return (
    <div>
      <Route path="/user/create" component={CreateUser} />
      <Route path="/user/edit" component={EditUser} />
      <Route path="/user/delete" component={DeleteUser} />
      {user.viewMode && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Address.City</TableCell>
              <TableCell align="right">Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map(row => (
              <TableRow
                key={row.id}
                hover
                selected={user.currentRow.id === row.id}
              >
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.address.city}</TableCell>
                <TableCell align="right">
                  <Button onClick={handleEditUser(row)} variant="outlined">
                    Edit
                  </Button>
                  <Button onClick={handleDeleteUser(row)} variant="outlined">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  userList: makeSelectUserList(),
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

export default compose(withConnect)(User);
