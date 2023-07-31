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
  active: boolean;
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
  const [active, setActive] = useState(false);
  const [data, setData] = useState<Data>();
  const [url, setUrl] = useState('');
  async function fetchInfo() {
    const response = await axios.get(
      `https://api.consumet.org/anime/gogoanime/info/${params.id}`
    );
    response.data.episodes = response.data.episodes.map((episode: Episode) => {
      return (episode = { ...episode, active: false });
    });
    setData(response.data);
  }

  async function watchUrl(episode: string) {
    const response = await axios.get(
      `https://api.consumet.org/anime/gogoanime/watch/${episode}`
    );
    setUrl(response.data.headers.Referer);
  }

  function clearActivity() {
    if (data) {
      data.episodes.forEach((episode) => {
        episode.active = false;
        console.log(episode);
      });
    }
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
        <div className="flex">
          {data.episodes.map((episode) => {
            return (
              <div key={episode.id} className="flex">
                <button
                  onClick={() => {
                    watchUrl(
                      episode.url.replace('https://gogoanimehd.to//', '')
                    );
                    clearActivity();
                    episode.active = !episode.active;
                  }}
                  className={
                    episode.active
                      ? 'p-2 border border-rose-500 bg-rose-500'
                      : 'p-2 border border-rose-500'
                  }
                >
                  {episode.number}
                </button>
              </div>
            );
          })}
        </div>
        {url && (
          <iframe
            width="480"
            height="315"
            src={url}
            allowFullScreen={true}
          ></iframe>
        )}
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
