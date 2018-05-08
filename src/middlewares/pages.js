import { actions } from '../actions';

const pages = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (actions.MAKE_ACTIVE === action.type) {
    console.log(actions.SET_ACTIVE_PAGE, action.payload);
  }
};


export default pages;
