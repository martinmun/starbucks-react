import React from 'react';
import '../css/header.css';
import LOGO from '../images/starbucks.png'
import BTN_HEADER from '../subComponents/BtnHeader';

const Header = () => {
  return (
    <header className="header">
        <div className="header__container-logo">
            <img className="header__container-logo" src={LOGO} alt="logo.png"/>
        </div>
        <nav className="header__nav">
          <BTN_HEADER content={'Inicio'} href={'#inicio'} />
          <BTN_HEADER content={'Cafe'} href={'#cafe'} />
          <BTN_HEADER content={'Sobre Nosotros'} href={'#sobre nosotros'} />
          <BTN_HEADER content={'Delivery'} href={'#delivery'} />
        </nav>
        <div className="header__container-login">
          <i className="bi bi-person-circle"></i>
           
        </div>
        <div className="header__container-user-mobile">
            <i className="bi bi-list"></i>
        </div>
    </header>
  );
};

export default Header;