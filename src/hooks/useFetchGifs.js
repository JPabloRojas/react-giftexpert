import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( url ) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {

    getGifs( url )
      .then( imgs => {

        setTimeout( () => {

          setState({
            data: imgs,
            loading: false
          });

        }, 3000)

      });

  }, [ url ])

  return state;
}