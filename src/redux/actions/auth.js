import {login,register} from '../../services/urlApi';

import * as actions from './actionTypes';

export const getLogin = (email,password)=>{
  return {
    type:actions.fetchLogin,
    payload:login(email,password),
  };
};


export const getRegister = (username,email,password)=>{
  return {
    type:actions.fetchLogin,
    payload:register(username,email,password),
  };
};

export const logOut = ()=>{
  return {
    type:actions.isLoggedOut,
  };
};
