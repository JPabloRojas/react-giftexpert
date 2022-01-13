export const getGifs = async( url ) => {

  const response = await fetch( url );
  const { data } = await response.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs;
}