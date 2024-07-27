import React, { useEffect, useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { CardOld } from './CardOld'

export interface AnimeData {
    id: string
    title: string
    image: string
}

export const SearchOld = () => {
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState<AnimeData[]>([])
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')

    async function fetchSearch() {
        const response = await axios.get(
            `https://api.consumet.org/anime/gogoanime/${searchValue}`
        )
        setData(response.data.results)
    }

    async function watchUrl(name: string) {
        const response = await axios.get(
            `https://api.consumet.org/anime/gogoanime/watch/${name}-episode-1`
        )
        setUrl(response.data.headers.Referer)
    }

    useEffect(() => {
        fetchSearch()
    }, [])

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

            <div className="flex flex-wrap gap-8 mx-16">
                {data &&
                    data.map((item) => {
                        return <CardOld key={item.id} {...item} />
                    })}
            </div>
        </>
    )
}
