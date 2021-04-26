import * as TYPES from './actionTypes';

const URL = 'https://krapipl.imumk.ru:8443/api/mobilev1/update';

export const getCardsList = () => (
  async dispatch => {
    try {
      const resp = await fetch(URL, {
        method: 'POST'
      });
      const { items, errorMessage } = await resp.json();
      if (errorMessage) {
        throw new Error(errorMessage);
      }
      dispatch({
        type: TYPES.GET_CARDS_LIST,
        payload: items,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: TYPES.ERROR,
        payload: e.message
      });
    }
  }
);

export const filter = (value) => (
  dispatch => {
    dispatch({
      type: TYPES.FILTER_BY_SUBJECT,
      payload: value
    });
  }
);

export const search = (value) => (
  dispatch => {
    dispatch({
      type: TYPES.SEARCH,
      payload: value
    });
  }
);
