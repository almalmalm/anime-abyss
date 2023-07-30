import React, { useState } from 'react';
import { useAppDispatch } from '@/app/redux/hooks';
import { useAppSelector } from '@/app/redux/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
} from '@/app/redux/CounterSlice';

export const Counter = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [number, setNumber] = useState(0);

  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center">Counter</h1>
      <p className="flex justify-center">{counter}</p>
      <button
        onClick={() => dispatch(increment())}
        className="border border-slate-500 w-32 self-center"
      >
        increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="border border-slate-500 w-32 self-center"
      >
        decrement
      </button>
      <input
        type="number"
        placeholder="Enter amount"
        className="w-32 self-center border border-slate-500"
        value={number}
        onChange={(event) => setNumber(Number(event.target.value))}
      />
      <button
        onClick={() => dispatch(incrementByAmount(number))}
        className="border border-slate-500 w-32 self-center"
      >
        increment by amount
      </button>
    </div>
  );
};
