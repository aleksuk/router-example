import React from 'react';
import { Link } from 'react-router-dom';

function PublishingModal() {
   return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Publishing</h2>
        <div>
          <Link to="/">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export default PublishingModal;


