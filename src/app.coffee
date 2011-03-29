$(document).ready ->
  $("#flash").delay(2000).slideUp('slow')

focusOnDiv = (divId) ->
  divElement = document.getElementById(divId);
  divElement.focus() if divElement != null and typof(divElement) != 'undefined'
  return
