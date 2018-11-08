import util from '../util/util'
import renderDropDownCoins from '../controller/dropDownCompController'

//Necessary to the bundle even though it is not being explicitly used
import inputCss from '../../styles/input-comp';
import dropDownCss from '../../styles/drop-down-comp';
import cardCompCss from '../../styles/card-comp'

export default function renderMainComp(parent){
  let parentElement = document.getElementById(parent);
  let mainElement = document.getElementById("app");
  util.removeChildren(mainElement);
  let loadingCompHTML =  `<div id="main-comp" class="wrapper">
                          <section id="section-top" class="flex-top"> 
                            <div id="div-top" class="dropdown">
                              <input id="search-input" class="input" placeholder="Search coin"type="text">
                              <div id="myDropdown" class="dropdown-content hide-content">
                              </div>
                            </div>
                          </section>
                          <section id="section-middle" class="flex-middle"> 
                            
                          </section>
                          <section id="section-bottom" class="flex-bottom"> 
                            
                          </section></div>`;
  parentElement.insertAdjacentHTML('afterbegin',loadingCompHTML);      
  let inputCoin = document.getElementById("search-input");
  inputCoin.oninput = renderDropDownCoins;               
  inputCoin.onchange = renderDropDownCoins;
}