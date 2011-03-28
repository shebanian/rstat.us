(function() {
  $(document).ready(function() {
    return $("#flash").delay(2000).slideUp('slow');
  });
}).call(this);

var focusOnDiv;
focusOnDiv = function(divId) {
  var divElement;
  divElement = document.getElementById(divId);
  if (divElement !== null && typeof divElement !== 'undefined') {
    return divElement.focus();
  }
};
