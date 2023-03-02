const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const COMMENT_COUNT = 100;
const COMMENTS_COUNT = 3;
const DESCRIPTION = 'Потрясающее фото';
const URL_PHOTO = 'photos/';
const URL_PHOTO_COUNT = 25;
const LIKE_COUNT = 300;

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

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createComments = () => {
  const randomMessageIndex = getRandomInteger(0, MESSAGE.length - 1);
  const createCommentId = createRandomIdFromRangeGenerator(1, COMMENT_COUNT);

  return {
    id: createCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: MESSAGE[randomMessageIndex],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};

const createPhotoCard = () => {
  const createPhotoId = createRandomIdFromRangeGenerator(1, PHOTO_COUNT);
  const randomLikes = getRandomInteger(1, LIKE_COUNT);
  const createUrlId = createRandomIdFromRangeGenerator(1, URL_PHOTO_COUNT);

  return {
    id: createPhotoId(),
    url: `${URL_PHOTO}${createUrlId()}.jpg`,
    description: DESCRIPTION,
    likes: randomLikes,
    comments: Array.from({length: COMMENTS_COUNT}, createComments)
  };
};

function generatePhotos (count) {
  return Array.from({length: count}, createPhotoCard);
}

generatePhotos(PHOTO_COUNT);

