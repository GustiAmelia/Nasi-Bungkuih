import * as actions from '../actions/actionTypes';

const initialState = {
  data:[],
  error:'',
  isPending:false,
  isFulfilled: false,
  isRejected: false,
};

const searchMenuReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.getSearch + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actions.getSearch + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        data: action.payload,
        isPending: false,
      };
    case actions.getSearch + '_FULFILLED':
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: action.payload.data.results,
        isRejected: false,
      };
    case actions.clearSearch:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default searchMenuReducers;
