import axios from 'axios';

const KEY = '52797482-aafa905b189c4ff0c9ee358ec';

function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(({ data }) => {
    return data;
  });
}

export { getImagesByQuery, KEY };
