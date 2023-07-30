'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface AnimeInfoProps {
  params: { id: string };
}

interface Episode {
  id: string;
  number: number;
  url: string;
}

interface Data {
  title: string;
  description: string;
  episodes: Episode[];
  genres: string[];
  id: string;
  image: string;
  otherName: string;
  releaseData: string;
  status: string;
  subOrDub: string;
  totalEpisodes: number;
  type: string;
  url: string;
}

export default function AnimeInfo({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Data>();
  const [url, setUrl] = useState('');
  async function fetchInfo() {
    const response = await axios.get(
      `https://api.consumet.org/anime/gogoanime/info/${params.id}`
    );
    setData(response.data);
    console.log(response);
  }

  async function watchUrl(episode: string) {
    const response = await axios.get(
      `https://api.consumet.org/anime/gogoanime/watch/${episode}`
    );
    setUrl(response.data.headers.Referer);
  }

  useEffect(() => {
    fetchInfo();
  }, []);
  if (data) {
    return (
      <>
        <img src={data.image} alt="Anime image" />
        <h1>{data.title}</h1>
        <h3>Description</h3>
        <p>{data.description}</p>
        <h3>Episodes</h3>
        <div>
          {data.episodes.map((episode) => {
            return (
              <>
                <div> id: {episode.id}</div>
                <div>{episode.number}</div>
                <div>{episode.url}</div>
                <button
                  onClick={() =>
                    watchUrl(
                      episode.url.replace('https://gogoanimehd.to//', '')
                    )
                  }
                >
                  Watch
                </button>
                <a href={url} target="_blank">
                  Open and watch
                </a>
                <iframe
                  width="480"
                  height="315"
                  src={url}
                  allowFullScreen={true}
                ></iframe>
              </>
            );
          })}
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
