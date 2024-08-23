const scriptURL = 'https://script.google.com/macros/s/AKfycbzE7M9W8t5oLURIW26SHA0lcRCF1Dvvy1ChUiUWSc71o0RDSzCFMK5A-P8XYOCPsGipnQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})