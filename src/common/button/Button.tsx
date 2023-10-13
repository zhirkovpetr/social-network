import React from 'react';

type ButtonPropsType = {
  title: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonPropsType> = ({ title, onClick }) => {
  const callback = (): void => {
    onClick();
  };

  return (
    <button type="button" onClick={callback}>
      {title}
    </button>
  );
};
