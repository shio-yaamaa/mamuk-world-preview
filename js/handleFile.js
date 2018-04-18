const fileInput = document.getElementById('file-input');
const fileValidationError = document.getElementById('file-validation-error');

fileInput.addEventListener('change', function(event) {
  const file = validateFiles(this.files);
  if (file) {
    console.log(file);
    createImage(file, updateBackgroundImage);
  }
});

const validateFiles = function(files) {
  if (!files || files.length === 0) {
    return null;
  }
  if (files.length > 1) {
    toggleValidateError(true, 'Please select a single file😢');
    return null;
  }
  if (files[0].type.split('/')[0] !== 'image') {
    toggleValidateError(true, 'Please select an IMAGE file😢');
    return null;
  }
  toggleValidateError(false, null);
  return files[0];
};

const toggleValidateError = function(show, message) {
  if (show) {
    fileValidationError.style.display = 'block';
    fileValidationError.textContent = message;
  } else {
    fileValidationError.style.display = 'none';
  }
};

const createImage = (file, callback) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = event => {
    callback(event.target.result);
  };
};