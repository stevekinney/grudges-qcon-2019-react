import React from 'react';
import { GrudgeContext } from './GrudgeContext';

const NewGrudge = () => {
  const { addGrudge } = React.useContext(GrudgeContext);

  const [person, setPerson] = React.useState('');
  const [reason, setReason] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const grudge = { person, reason };
    addGrudge(grudge);
  };

  return (
    <form className="NewGrudge" onSubmit={handleSubmit}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={person}
        onChange={event => setPerson(event.target.value)}
      />
      <input
        className="NewGrudge-input"
        placeholder="Reason"
        type="text"
        value={reason}
        onChange={event => setReason(event.target.value)}
      />
      <input className="NewGrudge-submit button" type="submit" />
    </form>
  );
};

export default NewGrudge;
