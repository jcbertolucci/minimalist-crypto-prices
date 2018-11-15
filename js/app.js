import renderMainComp from './view/mainComp'
import fecthCoins from './model/fetchCoins'
import polyfill from "babel-polyfill" //enables working with async/await
import { dataCoins } from './model/data'

/* App's entry point */
document.addEventListener('readystatechange', event => {
  fecthCoins();
  renderMainComp("app");
})


