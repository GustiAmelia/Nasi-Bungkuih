import * as actions from '../actions/actionTypes';

const initialState = {
  menus:[],
  carts:[],
  isPending:false,
  isFulfilled: false,
  isRejected: false,
};

const menuReducers = (state = initialState,action)=>{
  let newCart = [...state.carts];
  switch (action.type){
    case actions.fetchMenu + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.fetchMenu + actions.rejected:
      return {
        ...state,
        isRejected:true,
        error:action.payload,
        isPending:false,
      };
    case actions.fetchMenu + actions.fulfilled:
      return {
        ...state,
        isFulfilled:true,
        menus:action.payload.data.results,
        isPending:false,
      };
    case actions.addMenuToCart:
      const index = state.carts.findIndex((item) => {
        return action.payload.id === item.id;
      });
      if (index >= 0) {
         newCart = [...state.carts.filter(cart=>{
          return cart.id !== action.payload.id;
          }
          )];
        return {
           ...state,
           carts: [...newCart]};
       }
      else {
      return {
        ...state,
        carts: state.carts.concat(action.payload)};
     }
    case actions.removeItemCart:{
      return {
        ...state,
        carts :[],
      };
    }
    case actions.increase:
         const indexQtyInc = state.carts.findIndex((item) => {
            return action.payload.id === item.id;
         });
         newCart[indexQtyInc] = {
            ...newCart[indexQtyInc],
            quantity: state.carts[indexQtyInc].quantity + 1,
         };
         return {
            ...state,
            carts: newCart,
         };
    case actions.decrease:
        const indexQtyDec = state.carts.findIndex((item) => {
          return action.payload.id === item.id;
        });
        newCart[indexQtyDec] = {
          ...newCart[indexQtyDec],
          quantity: state.carts[indexQtyDec].quantity - 1,
        };
        if (newCart[indexQtyDec].quantity > 0){
          return {
            ...state,
            carts:newCart,
          };
        } else {
          return {
            ...state,
            carts:state.carts,
          };
        }
    default:
      return state;
  }
};

export default menuReducers;
