import {dataExchanges} from '../model/exchanges'
import fetchExchanges from '../model/fetchExchanges'

export default function exhangesComponent(coinName, coinSymbol){
  let currency = "USD";
  Promise.resolve(fetchExchanges(coinSymbol, currency));
}