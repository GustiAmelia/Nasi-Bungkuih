import * as actions from '../actions/actionTypes';

const initialState = {
  category:[],
  isPending:false,
  isFulfilled: false,
  isRejected: false,
};

const categoryReducers = (state = initialState,action)=>{
  switch (action.type){
    case actions.fetchCategory + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.fetchCategory + actions.rejected:
      return {
        ...state,
        isRejected:true,
        error:action.payload,
        isPending:false,
      };
    case actions.fetchCategory + actions.fulfilled:
      return {
        ...state,
        isFulfilled:true,
        category:action.payload.data.results,
        isPending:false,
      };
    default:
      return state;
  }
};

export default categoryReducers;
