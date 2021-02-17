import React, { useState } from 'react';
import MotorContext from '../MotorContext';

function Provider({ chieldren }) {
  const [burguers, setBurguers] = useState([]);


  const contextValue = {
    burguers,
    setBurguers,
  };

  return (
    <MotorContext.Provider value={ contextValue }>
      { chieldren }
    </MotorContext.Provider>
  )
};

export default Provider;
