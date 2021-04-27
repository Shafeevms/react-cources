import * as TYPES from './actionTypes';

const initialState = {
  filterBySubject: '',
  filterByGenre: '',
  filterByGrade: '',
  search: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FILTER_BY_SUBJECT:
      return {
        ...state,
        search: '',
        filterBySubject: action.payload
      };
    case TYPES.FILTER_BY_GENRE:
      return {
        ...state,
        search: '',
        filterByGenre: action.payload
      };
    case TYPES.FILTER_BY_GRADE:
      return {
        ...state,
        search: '',
        filterByGrade: action.payload
      };
    case TYPES.SEARCH:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};
