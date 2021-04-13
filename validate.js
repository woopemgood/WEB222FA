function validate(event) {
  let validity = true;
  let validLat = document.getElementById("latitude");
  let validLong = document.getElementById("longitude");
  if (isNaN(validLat.value) || validLat.value < -90 || validLat.value > 90) {
    let invalid = document.getElementById("laterror");
    invalid.hidden = false;
    validity = false;
  }
  else {
    let valid = document.getElementById("laterror");
    valid.hidden = true;
  }
  if (isNaN(validLong.value) || validLong.value < -180 || validLong.value > 180) {
    let invalid = document.getElementById("longerror");
    invalid.hidden = false;
    validity = false;
  }
  else {
    let valid = document.getElementById("longerror");
    valid.hidden = true;
  }

  if (validity) {
    return true;
  }
  return false;

  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
