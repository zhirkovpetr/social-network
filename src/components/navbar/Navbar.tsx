import React from "react";

import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className={'nav'}>
      <div>
        <a href={'#pofile'}>Профиль</a>
      </div>
      <div>
        <a href={'#message'}>Сообщения</a>
      </div>
      <div>
        <a href={'#news'}>Новости</a>
      </div>
      <div>
        <a href={'#music'}>Музыка</a>
      </div>
      <div>
        <a href={'#settings'}>Настройки</a>
      </div>
    </nav>
  )
}
