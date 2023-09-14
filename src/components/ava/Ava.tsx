import React from "react";

import s from './Ava.module.css';

export const Ava: React.FC = () => {
  return (
        <img
          className={s.ava}
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpeZY1nC4gK2CwE8nOHtg-73KR2xdkvoeqbUHv4JpLk1ogVeaUOrDQIwqGII3RrTyNRA&usqp=CAU'}
          alt={'profile'}/>
  )
}
