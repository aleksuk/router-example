import { MAKE_ACTIVE } from './actions';

function makeActive(page) {
  return {
    type: MAKE_ACTIVE,
    payload: page
  };
}

export default makeActive;
