$(document).ready ->
  $("#flash").delay(2000).slideUp('slow')

focusOnDiv = (divId) -> 
  divElement = document.getElementById(divId);
  divElement .focus() if divElement != null && typeof(divElement ) != 'undefined'