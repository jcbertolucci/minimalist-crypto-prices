import buttonsEvents from '../util/buttonsEvents'
import { renderComp } from '../util/util'
import dropDownCoinsComponent from '../controller/dropDownCompControl'

//Necessary to the bundle even though it is not being explicitly used
import inputCss from '../../styles/input-comp';
import dropDownCss from '../../styles/drop-down-comp';
import cardsCss from '../../styles/card-comp';
import noDataCss from '../../styles/no-data-comp';
import loadingCss from '../../styles/loading-comp';
import buttonCss from '../../styles/button';

export default function renderMainComp(parentId){
  let compHTML =  `<div id="main-comp" class="wrapper">
                      <section id="section-top" class="flex-top"> 
                        <div id="div-top" class="dropdown">
                          <input id="search-input" class="input" placeholder="Search coin"type="text">                                
                          <div id="myDropdown" class="dropdown-content hide-content">
                          </div>
                        </div>
                        <div class="options-area">
                          <p>Currency:</p>
                          <button id="btn-usd" class="button button-pressed">USD</button>
                          <button id="btn-aud" class="button">AUD</button>
                        </div>
                        <div class="sorting-area">
                          <p>Sort by:</p>
                          <button id="btn-volume" class="button button-disable">Volume</button>
                          <button id="btn-price" class="button button-disable">Lowest Price</button>
                        </div>
                      </section>
                      <section id="section-middle" class="flex-middle"> 
                      </section>
                      <section id="section-bottom" class="flex-bottom"> 
                      </section>
                    </div>`;
  renderComp(parentId, compHTML);
  setDOMEvents();
}
function setDOMEvents(){
  let inputCoin = document.getElementById("search-input");
  let btnUSD = document.getElementById("btn-usd");
  let btnAUD = document.getElementById("btn-aud");
  let btnVolume = document.getElementById("btn-volume");
  let btnPrice = document.getElementById("btn-price");

  inputCoin.oninput = dropDownCoinsComponent;               
  inputCoin.onchange = dropDownCoinsComponent;
  btnVolume.onclick = buttonsEvents.setBtnVolumeEvt;
  btnPrice.onclick = buttonsEvents.setBtnPriceEvt;
}
