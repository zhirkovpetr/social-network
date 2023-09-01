import React from "react";

type ButtonPropsType = {
  title: string
}

export const Button = (props: ButtonPropsType) => {
  const{title} = props

  return (
    <button>{title}</button>
  )
}
