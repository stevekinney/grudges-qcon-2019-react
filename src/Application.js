import React from 'react';
import name from 'random-name';
import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

const Application = () => {
  const [grudges, setGrudges] = React.useState([]);

  const addGrudge = grudge => {
    grudge.id = id();
    grudge.forgiven = false;
    setGrudges([grudge, ...grudges]);
  };

  const toggleForgiveness = id => {
    setGrudges(
      grudges.map(grudge => {
        if (grudge.id === id) {
          return { ...grudge, forgiven: !grudge.forgiven };
        }
        return grudge;
      })
    );
  };

  return (
    <div className="Application">
      <NewGrudge addGrudge={addGrudge} />
      <Grudges grudges={grudges} />
    </div>
  );
};

export default Application;
