export function liveSearch(){
  const formSearch = document.getElementById('form-search');
  const inputSearch = document.getElementById('query_name');
  inputSearch.addEventListener('keyup', (event) =>{
    if (event.target.value.length > 3) {
        formSearch.submit();
    }
  });
}

export function moveCursorToEnd(el) {
  if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
  } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
  }
}
