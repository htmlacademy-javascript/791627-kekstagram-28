const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const getMessageType = () => document.querySelector('.error, .success');
const isEscKey = (evt) => evt.key === 'Escape';

const closeMessage = () => {
  const message = getMessageType();
  if (message) {
    message.remove();
  }

  document.removeEventListener('click', onOutClick);
  document.removeEventListener('keydown', onMessageKeydown);
};

const showErrorMessage = () => {
  const error = errorTemplate.cloneNode(true);
  document.body.append(error);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closeMessage);

  document.addEventListener('click', onOutClick);
  document.addEventListener('keydown', onMessageKeydown);
};

const showSuccessMessage = () => {
  const success = successTemplate.cloneNode(true);
  document.body.append(success);
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', closeMessage);

  document.addEventListener('click', onOutClick);
  document.addEventListener('keydown', onMessageKeydown);
};

function onMessageKeydown (evt) {
  if (isEscKey(evt) && getMessageType()) {
    evt.preventDefault();
    closeMessage();
  }
}

function onOutClick (evt) {
  const type = getMessageType();
  if (evt.target === type) {
    closeMessage();
  }
}

export {getMessageType, showSuccessMessage, showErrorMessage};
