import React from 'react';
import logo from './../../../assets/svg/logo.svg';
import './index.scss';

function Logo() {
  return (
    <div className='logo'>
        <a href="/"><img src={logo} alt="logo" /></a>
        
    </div>
  )
}

export default Logo
