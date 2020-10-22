import {searchMenu} from '../../services/urlApi';

import * as actions from './actionTypes';

export const searchMenuCreator = (name, sortby) => {
  return {
    type: actions.getSearch,
    payload: searchMenu(name, sortby),
  };
};

