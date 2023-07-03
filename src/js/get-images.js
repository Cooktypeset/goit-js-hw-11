import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37979441-f1d7e4c3b344b48b7a2dc7a50';

async function getImages(query, page, perPage) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: page,
  };
  const { data } = await axios.get(`${BASE_URL}`, { params });

  return data;
}

export { getImages };