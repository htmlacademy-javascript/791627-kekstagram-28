import {getRandomInteger} from './util.js';

const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 3;
const URL_PHOTO = 'photos/';
const LIKE_VALUE = 300;
const DESCRIPTION = 'Потрясающее фото';

const NAMES = [
  'Алексей',
  'Андрей',
  'Виктор',
  'Геннадий',
  'Денис',
  'Евгений',
  'Игорь',
  'Кирилл',
  'Леонид',
  'Максим',
  'Никита',
  'Олег',
  'Павел',
  'Роман',
  'Сергей',
  'Тимофей',
  'Ульяна',
  'Федор',
  'Харитон',
  'Цветан',
  'Чеслав',
  'Шарлотта',
  'Щербатый',
  'Эммануил',
  'Юлиан'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const makeCommentIdGenerator = () => {
  let currentId = 0;

  return () => {
    currentId += 1;
    return currentId;
  };
};

const commentIdGenerator = makeCommentIdGenerator();

const createComments = () => {
  const randomMessageIndex = getRandomInteger(0, MESSAGE.length - 1);

  return {
    id: commentIdGenerator(),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: MESSAGE[randomMessageIndex],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};

function generateComment (count) {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(createComments(i));
  }

  return result;
}

const createPhotoCard = (index) => {
  const randomLikes = getRandomInteger(1, LIKE_VALUE);

  return {
    id: index + 1,
    url: `${URL_PHOTO}${index + 1}.jpg`,
    description: DESCRIPTION,
    likes: randomLikes,
    comments: generateComment(COMMENTS_COUNT)
  };
};

function generatePhotos (count) {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(createPhotoCard(i));
  }

  return result;
}

export {PHOTO_COUNT, generatePhotos};
