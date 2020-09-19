import * as actions from '../actions/actionTypes';

const initialState = {
	isLoggedIn:false,
	isPending:false,
	isFulfilled: false,
  isRejected: false,
  data :null,
  isAdmin:false,
};

const authReducers = (state = initialState,action) => {
  switch (action.type){
		case actions.fetchLogin + actions.pending:
      return {
      ...state,
      isPending:true,
      };
		case actions.fetchLogin + actions.rejected:
      return {
      ...state,
      isRejected:true,
      isPending:false,
      data: action.payload,
      };
		case actions.fetchLogin + actions.fulfilled:
      let admin = null;
      let login = null;
      if (action.payload.data.isSuccess){
        if (action.payload.data.results.level_id === 1){
          admin = true;
          login = true;
        } else {
          admin = false;
          login = true;
        }
      } else {
        admin = false;
        login = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: action.payload.data,
        isRejected: false,
        isAdmin: admin,
        isLoggedIn: login,
      };
    case actions.isLoggedOut:
      return {
        ...state,
        data: null,
        isAdmin: false,
        isLoggedIn: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      };
    default:
      return state;
   }
};

export default authReducers;
