import { showBigPicture } from './big-picture.js';

const smallPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesContainer = document.querySelector('.pictures');

const createSmallPicture = (picture) => {
  const smallPicture = smallPictureTemplate.cloneNode(true);

  smallPicture.querySelector('.picture__img').src = picture.url;
  smallPicture.querySelector('.picture__comments').textContent = picture.comments.length;
  smallPicture.querySelector('.picture__likes').textContent = picture.likes;
  smallPicture.dataset.smallPictureId = picture.id;

  smallPicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture(picture);
  });
  return smallPicture;
};

const renderSmallPictures = (pictures) => {
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const smallPicture = createSmallPicture(picture);
    picturesFragment.append(smallPicture);
  });
  picturesContainer.append(picturesFragment);
};

export {renderSmallPictures};
