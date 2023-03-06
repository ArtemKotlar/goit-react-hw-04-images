import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const params = new URLSearchParams({
  key: '32614135-f94da82f42f168ae4ebe671a6',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const getPhotos = async (query, page) => {
  const res = await axios.get(`?q=${query}&page=${page}&${params}`);
  const data = res.data;

  return data;
};
