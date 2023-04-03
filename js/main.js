import {generatePhotos} from './data.js';
import {PHOTO_COUNT} from './data.js';
import { renderSmallPictures } from './small-pictures.js';

import './form.js';

renderSmallPictures(generatePhotos(PHOTO_COUNT));
