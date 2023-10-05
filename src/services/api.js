import axios from 'axios';
// const BASE_URL = 'https://pixabay.com/api';
// const API_KEY = '38828352-a415a8248b03313c93049703f';

// export const getImages = (searchText, page = 1) => {
//   fetch(
//     `${BASE_URL}/?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//     return console.log(response.json());
//   });
// };

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export const findImagesByText = async (searchText, page = 1) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${searchText}&page=${page}&key=38828352-a415a8248b03313c93049703f&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
