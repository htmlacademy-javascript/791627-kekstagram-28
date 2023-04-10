import { renderSmallPictures } from './small-pictures.js';
import { getData, sendData } from './api.js';
import { showAlert, debounce } from './util.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import {setOnFormSubmit, hideModal} from './form.js';
import { init, getFilterPictures } from './sorting.js';


setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderSmallPictures = debounce(renderSmallPictures);
  init(data, debouncedRenderSmallPictures);
  renderSmallPictures(getFilterPictures());
} catch (err) {
  showAlert(err.message);
}
