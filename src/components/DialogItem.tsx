import React from "react";
import s from "../pages/dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
  link: string
  name: string
}

export const DialogItem: React.FC<DialogPropsType> = (props) => {
  const {link, name} = props
  return (
    <div className={s.dialog}>
      <NavLink to={link} className={({isActive}) => isActive ? s.active : ''}>
        {name}
      </NavLink>
    </div>
  )
}
