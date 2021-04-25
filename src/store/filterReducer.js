import { FILTER } from './actionTypes';

const initialState = '';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return action.payload;
  }
  return state;
};
