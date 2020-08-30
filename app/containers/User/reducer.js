/*
 *
 * User reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SUCCESS_USER_LIST,
  SET_CURRENT_ROW,
  SET_VIEW_MODE,
} from './constants';

export const initialState = {
  list: [],
  currentRow: {},
  viewMode: true,
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SUCCESS_USER_LIST:
        draft.list = action.list;
        break;
      case SET_CURRENT_ROW:
        draft.currentRow = action.row;
        break;
      case SET_VIEW_MODE:
        draft.viewMode = action.mode;
        break;
    }
  });

export default userReducer;
