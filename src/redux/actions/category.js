import {fetchAllCategory} from '../../services/urlApi';

import * as actions from './actionTypes';

export const getAllCategory = ()=>{
  return {
    type : actions.fetchCategory,
    payload :fetchAllCategory(),
  };
};

