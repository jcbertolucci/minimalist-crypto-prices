import {dataExchanges} from '../model/exchanges'
import fetchExchanges from '../model/fetchExchanges'

export default function exhangesComponent(coinName, coinSymbol){
  let currency = "AUD";
  Promise.resolve(fetchExchanges(coinSymbol, currency));
}