import { actions } from '../actions';

function publish(state = null, action) {
  if (action.type === actions.PUBLISH) {
    return action.payload;
  }

  return state;
}

export default publish;
