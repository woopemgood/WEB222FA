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
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
