import { getImagesByQuery, KEY } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
form.addEventListener('submit', searchWord);

function searchWord(event) {
  event.preventDefault();
  clearGallery();
  showLoader();
  if (!input.value.trim()) {
    hideLoader();
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      color: 'red',
    });
    return (input.value = '');
  }

  getImagesByQuery(input.value)
    .then(data => {
      if (data && data.hits) {
        createGallery(data.hits);
      } else {
        throw new Error(response.status);
      }
    })
    .catch(error =>
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
      })
    )
    .finally(() => hideLoader());

  event.target.reset();
}
