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
  clearGallery();

  page = 1;
  if (!input.value.trim()) {
    hideLoader();
    hideLoadMoreButton();

    iziToast.info({
      message: 'Please enter a search term',
      position: 'topRight',
      color: 'green',
    });
    input.value = '';
    return;
  }
  showLoader();

  query = input.value;
  try {
    const data = await getImagesByQuery(input.value, page);
    if (data && data.hits.length > 0) {
      createGallery(data.hits);
    } else {
      hideLoadMoreButton();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
      });
      return;
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
    event.target.reset();
  } catch (error) {
    hideLoadMoreButton();
    iziToast.error({
      message: 'Something went wrong. Try again',
      position: 'topRight',
      color: 'red',
    });
  } finally {
    hideLoader();
  }
}

moreBtn.addEventListener('click', clicLoadMore);

async function clicLoadMore() {
  page++;

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
    hideLoader();
  }
}
