import { actions } from '../actions';

function pages(state = [], action) {
  if (action.type === actions.SET_PAGES) {
    return action.payload;
  }

  return state;
}

export default pages;
