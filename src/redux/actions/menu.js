import {fetchAllMenu} from '../../services/urlApi';

import * as actions from './actionTypes';

export const getAllMenus = ()=>{
  return {
    type : actions.fetchMenu,
    payload :fetchAllMenu(),
  };
};

export const itemToCart = (id,images, menu, price,description ) => {
  return {
      type: actions.addMenuToCart,
      payload: {
          id,
          images,
          quantity: 1,
          menu,
          price,
          description,
      },
  };
};

export const incrementCreator = (id)=>{
  return {
    type : actions.increase,
    payload:{
      id,
    },
  };
};

export const decrementCreator = (id)=>{
  return {
    type : actions.decrease,
    payload:{
      id,
    },
  };
};

export const removeCartCreator = ()=>{
  return {
    type : actions.removeItemCart,
  };
};

