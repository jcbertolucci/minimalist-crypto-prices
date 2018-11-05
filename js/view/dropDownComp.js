import removeChildren from './removeChildren';
import fillSearchInput from './fillSearchInput';
import {coins} from '../model/data'


export default function renderDropDownComp(event){

  let inputValue = event.target.value;
  let filteredCoins = [];
  let inputIsempty = (inputValue === "");
  let dropDownDiv = document.getElementById("myDropdown");

  filteredCoins = coins.filter( (coin)  =>{

    return (coin.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            coin.short.toLowerCase().includes(inputValue.toLowerCase()) )

  });

  if(filteredCoins.length > 0 && !inputIsempty){

    removeChildren(dropDownDiv);  

    filteredCoins.map(  (coin) =>{

      let newAnchor = document.createElement('a');
      let newContent = document.createTextNode(`${coin.name} - ${coin.short}`);

      newAnchor.appendChild(newContent);
      newAnchor.onclick = fillSearchInput;
      dropDownDiv.appendChild(newAnchor);

    })

    dropDownDiv.classList.remove("dropdown-content-hide");

  }else{

    removeChildren(dropDownDiv);
    dropDownDiv.classList.add("dropdown-content-hide");

  }  
}