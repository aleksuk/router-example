import { SET_PAGES } from './actions';

function setPages(pages) {
  return {
    type: SET_PAGES,
    payload: pages
  };
}

export default setPages;
