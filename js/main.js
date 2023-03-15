import {generatePhotos} from './data.js';
import {PHOTO_COUNT} from './data.js';
import { renderSmallPictures } from './smallPhotos.js';

renderSmallPictures(generatePhotos(PHOTO_COUNT));
