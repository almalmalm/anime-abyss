import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimeData } from './Search';

export const Card: React.FC<AnimeData> = (item) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center justify-center my-4"
    >
      <Link href={`/${item.id}`}>
        <Image width={150} height={150} src={item.image} alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
};
