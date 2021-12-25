!function (exports) {
  exports.submitForm = submitForm;

  function submitForm() {
    
    let thisForm = document.querySelector('.email-form');

     let action = "https://t0vhxng9t9.execute-api.ap-south-1.amazonaws.com/default/SEEC-Contact-Form";

    thisForm.querySelector('.loading').classList.add('d-block');
    thisForm.querySelector('.error-message').classList.remove('d-block');
    thisForm.querySelector('.sent-message').classList.remove('d-block');

    let formData = new FormData( thisForm );

    let contactData = {};

    formData.forEach((value, key) => contactData[key] = value);

    fetch(action, {
      method: 'POST',
      body: JSON.stringify(contactData),
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.add('d-block');
      thisForm.reset(); 
    })
    .catch((error) => {
      displayError(thisForm, error);
    });

    return false;
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

}(typeof module === 'undefined' ? window : module.exports);