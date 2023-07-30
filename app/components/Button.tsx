import React from 'react';

interface ButtonProps {
  text: string;
  onclick?(): void;
}

export const Button: React.FC<ButtonProps> = ({ text, onclick }) => {
  return (
    <button className="border border-rose-700" onClick={onclick}>
      {text}
    </button>
  );
};
