import { GET_CARDS_LIST, FILTER } from './actionTypes';
import { ERROR } from './actionTypes';

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
        type: GET_CARDS_LIST,
        payload: items,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: ERROR,
        payload: e.message
      });
    }
  }
);

export const filter = (value) => (
  dispatch => {
    dispatch({
      type: FILTER,
      payload: value
    });
  }
);
