export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=FXcT22MU2BveLDQ9e17YpxAWbD9f5rwY&q=${category}&limit=40`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
