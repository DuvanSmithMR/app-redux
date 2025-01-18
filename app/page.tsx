'use client';

import Link from 'next/link';
import { usePage } from './usePage';

export default function Home() {
  const { 
    value,
    incremenetB,
    decrementB,
  } = usePage();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href={'/about'}>About page</Link>
      <h1 className="text-2xl font-bold">Contador: {value}</h1>
      <div>
        <button
          onClick={incremenetB}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          Incrementar
        </button>
        <button
          onClick={decrementB}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}