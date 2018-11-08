import {dataExchanges} from '../model/exchanges'
import renderExchangeComponent from '../view/exchangesComp'
import fetchExchanges from '../model/fetchExchanges'

export default function renderExhanges(coinName, coinSymbol){
  let currency = "AUD";
  let renderHTML = Promise.resolve(fetchExchanges(coinSymbol, currency));
  
  //renderExchangeComponent(filteredExchanges);  
}