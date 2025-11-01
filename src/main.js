import { getImagesByQuery, KEY } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
const moreBtn = document.querySelector('.js-load-more');
const gallery = document.querySelector('.gallery');
form.addEventListener('submit', searchWord);

let page = 1;
let query = '';

async function searchWord(event) {
  event.preventDefault();

  page = 1;
  if (!input.value.trim()) {
    hideLoader();
    hideLoadMoreButton();

    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      color: 'red',
    });
    return (input.value = '');
  }

  query = input.value;
  try {
    const data = await getImagesByQuery(input.value, page);
    if (data && data.hits.length > 0) {
      clearGallery();
      showLoader();
      createGallery(data.hits);
    } else {
      hideLoadMoreButton();
      throw new Error();
    }
    if (gallery.children.length >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        color: 'green',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    hideLoadMoreButton();
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      color: 'red',
    });
  } finally {
    hideLoader();
  }

  event.target.reset();
}

moreBtn.addEventListener('click', clicLoadMore);

async function clicLoadMore() {
  page++;
  hideLoadMoreButton();

  try {
    showLoader();
    const data = await getImagesByQuery(query, page);
    if (data && data.hits.length > 0) {
      createGallery(data.hits);
    }

    if (gallery.children.length >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        color: 'green',
      });
    }
    const card = document.querySelector('.gallery-list');

    const info = card.getBoundingClientRect();
    const height = info.height;
    window.scrollBy({
      left: 0,
      top: height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      color: 'red',
    });
  } finally {
    showLoadMoreButton();
    hideLoader();
  }
}
