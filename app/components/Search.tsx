import React, { useEffect, useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import axios from 'axios';
import Image from 'next/image';

interface Data {
  id: string;
  title: string;
  image: string;
}

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState<Data[]>([]);

  async function fetchSearch() {
    const response = await axios.get(
      `https://api.consumet.org/anime/gogoanime/${searchValue}`
    );
    console.log(response.data);
    setData(response.data.results);
  }

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <form action="" className="flex gap-2" onChange={fetchSearch}>
          <Input
            placeholder="Search for anime"
            value={searchValue}
            setValue={setSearchValue}
          />
          <Button />
        </form>
      </div>
      <div>
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id + '1'}
                className="flex gap-8 items-center justify-center"
              >
                <Image
                  width={150}
                  height={150}
                  src={item.image}
                  alt={item.title}
                  key={item.id + ' img'}
                />
                <div key={item.id}>{item.title}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};
