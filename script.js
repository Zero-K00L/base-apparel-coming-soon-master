var submitBtn = document.querySelector('.submit-btn');
var errorMessage = document.querySelector('.error-msg');
var errorImage = document.querySelector('.error-img');
var submitArrow = document.querySelector('.submit-img');

submitBtn.addEventListener('click', handleFormSubmit);
submitArrow.addEventListener('click', handleFormSubmit);


// Function to check if email is valid
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;

  if (!validateEmail(email)) {
    // If email is invalid, remove the "hidden" class
    errorMessage.classList.remove('hidden');
    errorImage.classList.remove('hidden');
    errorMessage.classList.add('active');
    errorImage.classList.add('active')
    document.getElementById("email").focus();
  } else {
    // If email is valid, add the "hidden" class
    errorMessage.classList.remove('active');
    errorImage.classList.remove('active')
    errorMessage.classList.add('hidden');
    errorImage.classList.add('hidden');
  }
}












