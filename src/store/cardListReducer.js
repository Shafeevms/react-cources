import { ERROR, GET_CARDS_LIST } from './actionTypes';

const initialState = {
  data: [],
  er: false,
};

export const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS_LIST:
      return {
        ...state,
        data: action.payload
      };
    case ERROR:
      return {
        ...state,
        er: action.payload
      };
    default:
      return state;
  }
};
