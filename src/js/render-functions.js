// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('span');

const simleGallery = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(images) {
  gallery.insertAdjacentHTML(
    'beforeEnd',
    images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) =>
          `<li class="galerry-list">
        
    <a class="gallery-link" href=${largeImageURL}><img class="gallery-img" src=${webformatURL} alt=${tags}></a>
    <div class="gallery-subcontainer">
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Likes</h3>
      <p class="gallery-subtext">${likes}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Views</h3>
      <p class="gallery-subtext">${views}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Comments</h3>
      <p class="gallery-subtext">${comments}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Download</h3>
      <p class="gallery-subtext">${downloads}</p>
      </div>
    </div>
    </li>`
      )
      .join('')
  );
  simleGallery.refresh();
}

function clearGallery() {
  gallery.textContent = '';
}
function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

export { clearGallery, createGallery, showLoader, hideLoader };
