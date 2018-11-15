import util from '../util/util';
import renderExhanges from './exchangesCompControl'
import renderLoadingComp from '../view/loadingComp'

export default function fillSearchInputComponent(event){
  let clickedCoin = event.target.innerText;
  let coinName = clickedCoin.split('-')[0].trim();
  let coinSymbol = clickedCoin.split('-')[1].trim();
  let searchInputHTML = document.getElementById("search-input");
  let dropDownDiv = document.getElementById("myDropdown");
  
  searchInputHTML.value = coinName;
  util.removeChildren(dropDownDiv);
  util.hideDropDown(dropDownDiv);
  renderLoadingComp();
  renderExhanges(coinName, coinSymbol);  
}