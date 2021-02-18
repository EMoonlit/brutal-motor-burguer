import React, { useState, useEffect } from 'react';
import MotorContext from '../MotorContext';
import fechingApi from '../../services/requestApi';


function Provider({ children }) {
  const [burguersList, setBurguersList] = useState([]);
  const [isLoading, setIsLoaindg] = useState(true);
  const [cartList, setCartList] = useState([])

  useEffect(() => {
    function requestData() {
        fechingApi().then((data) => {
        setBurguersList(data.hamburgueres);
        console.log(burguersList);
        setIsLoaindg(false)
      });
    }
    requestData()
  }, [burguersList])

  const contextValue = {
    burguersList,
    isLoading,
    cartList,
    setBurguersList,
    setIsLoaindg,
    setCartList,
  };

  return (
    <MotorContext.Provider value={ contextValue }>
      { children }
    </MotorContext.Provider>
  )
};

export default Provider;
