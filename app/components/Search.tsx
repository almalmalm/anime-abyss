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
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  async function fetchSearch() {
    const response = await axios.get(
      `https://api.consumet.org/anime/gogoanime/${searchValue}`
    );
    setData(response.data.results);
  }

  async function watchUrl(name: string) {
    const response = await axios.get(
      `https://api.consumet.org/anime/gogoanime/watch/${name}-episode-1`
    );
    setUrl(response.data.headers.Referer);
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
          <Button text="Clear" />
        </form>
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          className="flex self-center border border-rose-600 w-fit m-8 p-4"
          onClick={() => setUrl('')}
        >
          Watch here {title}
        </a>
      )}

      <div>
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="flex gap-8 items-center justify-center"
              >
                <Image
                  width={150}
                  height={150}
                  src={item.image}
                  alt={item.title}
                />
                <div>{item.title}</div>
                <div>id : {item.id}</div>
                <Button
                  text="watch"
                  onclick={() => {
                    console.log(item.id);
                    watchUrl(item.id);
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                    setTitle(item.title);
                  }}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
