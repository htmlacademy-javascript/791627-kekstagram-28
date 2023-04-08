import { renderSmallPictures } from './small-pictures.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import {setOnFormSubmit, hideModal} from './form.js';


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
  renderSmallPictures(data);
} catch (err) {
  showAlert(err.message);
}
