import React from "react";
import s from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href={'#pofile'}>Профиль</a>
      </div>
      <div className={s.item}>
        <a href={'#message'}>Сообщения</a>
      </div>
      <div className={s.item}>
        <a href={'#news'}>Новости</a>
      </div>
      <div className={s.item}>
        <a href={'#music'}>Музыка</a>
      </div>
      <div className={s.item}>
        <a href={'#settings'}>Настройки</a>
      </div>
    </nav>
  )
}
