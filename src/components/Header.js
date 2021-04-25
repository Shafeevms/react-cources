import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <a href="#" className="header__logo"><img alt="логотип" src="./img/logo.svg" className="header__img"/></a>
        <div className="header__wrapper flex">
          <a className="header__link" href="#">Каталог</a>
          <a className="header__link" href="#">Активация</a>
          <a className="header__link" href="#">Вход</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
