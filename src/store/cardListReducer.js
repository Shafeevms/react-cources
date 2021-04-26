import * as TYPES from './actionTypes';

const initialState = {
  data: [],
  er: false,
};

export const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CARDS_LIST:
      return {
        ...state,
        data: action.payload
      };
    case TYPES.ERROR:
      return {
        ...state,
        er: action.payload
      };
    default:
      return state;
  }
};
