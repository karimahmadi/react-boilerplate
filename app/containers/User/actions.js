/*
 *
 * User actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_USER_LIST,
  SUCCESS_USER_LIST,
  SET_CURRENT_ROW,
  SET_VIEW_MODE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestUserList() {
  return {
    type: REQUEST_USER_LIST,
  };
}

export function userListFetched(response) {
  return {
    type: SUCCESS_USER_LIST,
    list: response,
  };
}

export function setCurrentRow(row) {
  return {
    type: SET_CURRENT_ROW,
    row,
  };
}

export function setViewMode(mode) {
  return {
    type: SET_VIEW_MODE,
    mode,
  };
}
