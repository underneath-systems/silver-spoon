function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("El nombre no puede estar vacio.");
    return false;
  }
}
