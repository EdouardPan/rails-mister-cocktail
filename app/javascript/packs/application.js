import 'bootstrap';
import { ChangeColorMenuHome } from '../components/navbar';
import { liveSearch, moveCursorToEnd } from '../components/searchbar';
import '../components/select2';


//Live Search
if (document.querySelector('.home-navbar') != null){
  ChangeColorMenuHome();
  liveSearch();
}

const inputSearch = document.getElementById('query_name');
document.addEventListener('DOMContentLoaded', (event) => {
  inputSearch.focus();
  moveCursorToEnd(inputSearch);
});
