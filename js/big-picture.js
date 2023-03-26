const COMMENT_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureCaption = document.querySelector('.social__caption');
const bigPictureCommentsCount = document.querySelector('.social__comment-count');
const bigPictureCurrentCommentCount = document.querySelector('.comments-count');
const pictureCommentsList = document.querySelector('.social__comments');
const pictureComment = document.querySelector('.social__comment');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const pictureCommentsLoader = document.querySelector('.comments-loader');

let displayedComments = 0;
let comments = [];

const createCommentsCount = () => {
  bigPictureCommentsCount.innerHTML = `${displayedComments} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const createComment = (comment) => {
  const commentSample = pictureComment.cloneNode(true);
  commentSample.querySelector('.social__picture').src = comment.avatar;
  commentSample.querySelector('.social__picture').alt = comment.name;
  commentSample.querySelector('.social__text').textContent = comment.message;
  return commentSample;
};

const renderComments = () => {
  const currentComments = comments.slice(displayedComments, displayedComments + COMMENT_COUNT);
  displayedComments += COMMENT_COUNT;
  displayedComments = Math.min(displayedComments, comments.length);
  currentComments.forEach((comment) => pictureCommentsList.append(createComment(comment)));
  createCommentsCount();

  if (displayedComments >= comments.length) {
    pictureCommentsLoader.classList.add('hidden');
    return;
  }
  pictureCommentsLoader.classList.remove('hidden');
};


const createBigPicture = (picture) => {
  bigPictureImg.src = picture.url;
  bigPictureCaption.textContent = picture.description;
  bigPictureLikes.textContent = picture.likes;
  bigPictureCurrentCommentCount.textContent = picture.comments.length;
};

const showBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  pictureCommentsList.innerHTML = '';
  comments = picture.comments;
  createBigPicture(picture);
  renderComments();
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  pictureCommentsLoader.addEventListener('click', onPictureCommentsLoaderClick);
  document.addEventListener('keydown', onDocumentEscKeydown);

};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  comments = [];
  displayedComments = 0;
};


function onBigPictureCancelClick(evt) {
  evt.preventDefault();
  closeBigPicture();
}

function onPictureCommentsLoaderClick(evt) {
  evt.preventDefault();
  renderComments();
}

function onDocumentEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

export { showBigPicture };
