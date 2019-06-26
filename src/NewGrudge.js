import React from 'react';

const NewGrudge = () => {
  return (
    <form className="NewGrudge" onSubmit={e => e.preventDefault()}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={''}
      />
      <input
        className="NewGrudge-input"
        placeholder="Reason"
        type="text"
        value={''}
      />
      <input className="NewGrudge-submit button" type="submit" />
    </form>
  );
};

export default NewGrudge;
