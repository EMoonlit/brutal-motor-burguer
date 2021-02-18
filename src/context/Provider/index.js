import React, { useState, useEffect } from 'react';
import MotorContext from '../MotorContext';
import fechingApi from '../../services/requestApi';

function Provider({ chieldren }) {
  const [burguersList, setBurguersList] = useState([]);
  const [isLoading, setIsLoaindg] = useState(true);
  
  const requestData = () => {
    fechingApi().then((data) => {
      setBurguersList(data.hamburgueres);
      setIsLoaindg(false)
    });
  }

  useEffect(() => {
    requestData()
  }, [])

  const contextValue = {
    burguersList,
    isLoading,
    setBurguersList,
    setIsLoaindg,
  };

  return (
    <MotorContext.Provider value={ contextValue }>
      { chieldren }
    </MotorContext.Provider>
  )
};

export default Provider;
