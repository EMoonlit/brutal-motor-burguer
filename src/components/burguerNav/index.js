import React, { useState } from 'react';
import './style';
import StyledBurguerNav from './style';
import RightNav from '../rightNav';

const BurguerNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <StyledBurguerNav isOpen={ isOpen } onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurguerNav>
      < RightNav isOpen={isOpen}/>
    </>
  )
};

export default BurguerNav;
