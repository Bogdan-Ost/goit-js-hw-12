import axios from 'axios';

const KEY = '52797482-aafa905b189c4ff0c9ee358ec';

async function getImagesByQuery(query, page) {
  const { data } = await axios('https://pixabay.com/api/', {
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
  return data;
}

export { getImagesByQuery, KEY };
