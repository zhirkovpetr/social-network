import React from "react";

type ButtonPropsType = {
  title: string
  onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = ({title, onClick}) => {

  const callback = () => {
    onClick()
  }

  return (
    <button onClick={callback}>{title}</button>
  )
}
