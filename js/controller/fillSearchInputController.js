import util from '../util/util';
import renderExhanges from './exchangeCompController'

export default function fillSearchInput(event){
  let clickedCoin = event.target.innerText;
  let coinName = clickedCoin.split('-')[0].trim();
  let coinSymbol = clickedCoin.split('-')[1].trim();
  let searchInputHTML = document.getElementById("search-input");
  let dropDownDiv = document.getElementById("myDropdown");
  
  searchInputHTML.value = coinName;
  util.removeChildren(dropDownDiv);
  util.hideDropDown(dropDownDiv);
  renderExhanges(coinName, coinSymbol);  
}