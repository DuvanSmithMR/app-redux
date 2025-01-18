'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement } from '../store/exampleSlice';
import Link from 'next/link';

export default function Home() {
  const value = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href={'/about'}>About page</Link>
      <h1 className="text-2xl font-bold">Contador: {value}</h1>
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          Incrementar
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}