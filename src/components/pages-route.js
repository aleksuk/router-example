import React from 'react';
import PagesContainer from './pages-container';


function PagesRoute({ match }) {
  const { name = 'home' } = match.params;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Pages container</h2>
        <div>
          <PagesContainer activePage={name} />
        </div>
      </div>
    </div>
  )
}

export default PagesRoute;
