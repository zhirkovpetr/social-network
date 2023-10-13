import React from 'react';

import s from './Header.module.css';

export const Header: React.FC = () => (
  <header className={s.header}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO2SeTQHtzL024EkApdOOoQ1QlTxBsqKCSQ&usqp=CAU"
      alt="logotype"
    />
  </header>
);
