import removeChildren from './removeChildren';
import renderExhanges from './exchangesComp'

export default function fillSearchInput(event){
  let clickedCoin = event.target.innerText;
  let coinName = clickedCoin.split('-')[0].trim();
  let searchInputHTML = document.getElementById("search-input");
  let dropDownDiv = document.getElementById("myDropdown");

  searchInputHTML.value = coinName;
  removeChildren(dropDownDiv);

  dropDownDiv.classList.add("dropdown-content-hide");
  renderExhanges(coinName);
}