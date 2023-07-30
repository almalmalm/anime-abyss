'use client';
import React, { useState } from 'react';

interface InputProperties {
  placeholder: string;
  value: string;
  setValue(value: string): void;
}

export const Input: React.FC<InputProperties> = ({
  placeholder,
  value,
  setValue,
}) => {
  return (
    <input
      type="text"
      className="border border-rose-700"
      placeholder={placeholder}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};
