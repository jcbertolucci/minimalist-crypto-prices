import { dataExchanges } from '../model/exchanges'
import util from './util'
import renderCardComp from '../view/cardComp'

const setBtnPriceEvt = (e) => {
  dataExchanges.sortPrice();
  reorderCards();
}
const setBtnVolumeEvt = (e) => {
  dataExchanges.sortVolume();
  reorderCards();  
}
const setBtnEnable = () => {
  let btnVolume = document.getElementById('btn-volume');
  let btnPrice = document.getElementById('btn-price');

  btnVolume.classList.remove('button-disable');
  btnPrice.classList.remove('button-disable');
}
const setBtnDisable = () => {
  let btnVolume = document.getElementById('btn-volume');
  let btnPrice = document.getElementById('btn-price');

  btnVolume.classList.add('button-disable');
  btnPrice.classList.add('button-disable');
}
function getCardExchangeOrder(obj, value){
  let newIndex = 1
  let exchangeName = value.querySelector(".card-title").textContent;

  obj.forEach((item, index) =>{
    if(item.MARKET == exchangeName){
      //to increment the array order once it starts at 0 and grid order at 1
      return newIndex += index;
    } 
  });
  return newIndex;
}
function reorderCards(){
  let parentCards = document.getElementById("section-middle");
  let allCards = parentCards.querySelectorAll(".card-exchange");
  let order = 0;

  allCards.forEach((item) =>{
    order = getCardExchangeOrder(dataExchanges.getExchanges(), item);
    item.style.order = order 
  });
}

module.exports = {setBtnPriceEvt, setBtnVolumeEvt, setBtnEnable, setBtnDisable}