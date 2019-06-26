import React from 'react';

const Grudge = ({ grudge }) => {
  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input type="checkbox" checked={grudge.forgiven} /> Forgiven
        </label>
      </div>
    </article>
  );
};

export default Grudge;
