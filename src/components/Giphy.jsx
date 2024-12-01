import React, { useEffect, useRef, useState } from 'react'
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

import _ from "lodash";
import { MagnifyingGlass } from '@phosphor-icons/react';

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

export default function Giphy() {
    const gridRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [gifs, setGifs] = useState([]); //strore gifs

    const fetchGifs = async (offset) => {
      return gf.search(value, {offset, limit: 10});
    }

    const debouncedfetchGifs = _.debounce(async () => {
      setIsLoading(true);
      setError(null); //clear any previous error

      try {
        const newGifs = await fetchGifs(0);
        setGifs(newGifs.data);
      } catch(error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    useEffect(() => {
      //fetch gifs
      const fetchInitialGifs = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const initialGifs = await fetchGifs(0);
          setGifs(initialGifs.data);
        } catch(error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchInitialGifs();
    }, []);

    const handleGifClick = (gif, e) => {
      e.preventDefault();
      const GifUrl = gif.images.original.url;
      console.log(GifUrl);
    }

    return (
      <div ref={gridRef} className='w-full mt-3'>
          <input 
              type="text"
              placeholder='Search for a Gif...'
              className='border border-stroke dark:border-strokedark rounded-md p-2 w-full mb-2 outline-none bg-transparent'
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                debouncedfetchGifs(); //call debounce function on every change
              }}
          />
  
          {isLoading && <p>Loading...</p>}
          
          {error && <p className='text-red'>Error: {error}</p>}
          
          <div className='h-48 overflow-auto no-scrollbar'>
              {gifs.length > 0 ? <Grid 
                  width={gridRef.current?.offsetWidth} 
                  columns={8} 
                  gutter={6} 
                  fetchGifs={fetchGifs} 
                  key={value} 
                  onGifClick={handleGifClick}
                  data={gifs}
              /> : <div className='flex flex-col items-center justify-center h-full space-y-2'>
                    <MagnifyingGlass size={48} weight='bold' />
                    <span className='text-xl text-body font-semibold'>Search for Gifs</span>
                   </div>}
          </div>
      </div>
  )
}
