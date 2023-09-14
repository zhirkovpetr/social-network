import React from "react";

import s from "./Message.module.css";

export type MessagePropsType = {
  message: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
  const {message} = props
  return (
    <div className={s.message}>{message}</div>
  )
}
