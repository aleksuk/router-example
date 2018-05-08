import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeActive } from '../actions';

function PagesContainer(props) {
  const { pages, activePage, makeActivePage } = props;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modal</h2>
        <div>
          <ul>
            {pages.map(({ name }) => (
              <li
                className={`${ name === activePage ? 'active': ''}`}
                key={name}
                data-name={name}
                onClick={makeActivePage}
              >
                <Link to={`/pages/${name}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

const mapPropsToState = (state) => ({
  pages: state.pages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  makeActivePage: function (event) {
    const name = event.currentTarget.dataset.name;
    console.log(name);
    dispatch(makeActive(name));
  }
});


export default connect(mapPropsToState, mapDispatchToProps)(PagesContainer);
