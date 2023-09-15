import React from "react";

import {DialogItem} from "../../components/dialog-item/DialogItem";

import s from './Dialogs.module.css';

export const Dialogs: React.FC = () => {
  return (
    <div className={s.dialogs}>
            <DialogItem />
    </div>
  )
}
