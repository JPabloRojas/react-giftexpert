import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  
  const baseImport = 'https://api.giphy.com/v1/gifs/search';
  const apiKey = 'YpKzqvaAxkwC5zcEqZY6tVmVK4yBbun2';
  const url = baseImport + `?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
  
  const { data, loading } = useFetchGifs( url );

  return (
    <div className="card-grid">
      <h3 className="card">{ category }</h3>
      { loading ? <p className="animate__animated animate__flash">Loading...</p> : null }
      <ol>
        {
          data.map( img  => (
            <GifGridItem
              key = { img.id }
              //manda las propiedades de las imagenes como una propiedad independiente
              { ...img }
              //img = { img } 
            />
          ))
          }
      </ol>
    </div>
  )
}
