import {dataCoins} from '../model/data'
import renderDropDownComp from '../view/dropDownComp'
import util from '../util/util';

export default function dropDownCoinsComponent(event){
  let inputValue = event.target.value;
  let arrayCoins = dataCoins.get();
  let dropDownDiv = document.getElementById("myDropdown");
  let inputIsempty = (inputValue === "");

  arrayCoins = arrayCoins.filter( (coin)  =>{
    return (coin.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(inputValue.toLowerCase()) )
  });

  if(arrayCoins.length > 0 && !inputIsempty){
    formatText(arrayCoins);
    util.removeChildren(dropDownDiv);  
    arrayCoins.map(  (coin) =>{
      renderDropDownComp(coin, dropDownDiv)       
    })
    util.showDropDown(dropDownDiv);
  }else{
    util.removeChildren(dropDownDiv);
    util.hideDropDown(dropDownDiv);
  } 
}
function formatText(arrCoins){
  return arrCoins.map( (coin) => {
    coin.name = coin.name.charAt(0).toUpperCase() + coin.name.slice(1).toLowerCase();
    coin.symbol = coin.symbol.toUpperCase();
  }) 
}