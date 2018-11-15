import axios from 'axios'
import { dataExchanges } from './exchanges'
import renderCardComp from '../view/cardComp'
import renderNoDataComp from '../view/noDataComp'
import util from '../util/util'

export default async function fetchExchanges(coinSymbol, currency){
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  //new version
  let url = `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${coinSymbol}&tsym=${currency}&limit=20`;
  
  //old version
  //let url = `https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=${coinSymbol}&tsym=${currency}`;  

  await getExchanges(`${proxyUrl}${url}`);
}

//create a model for this
function getExchanges(url){
  //just temporarily
  let parentCards = document.getElementById("section-middle");
  let parentNoData = document.getElementById("section-bottom");

  axios.get(url)
  .then((res)=>{
    dataExchanges.clearData();
    dataExchanges.setExchanges(res.data.Data.Exchanges);
    dataExchanges.setMessage(res.data.Message);
    
    //just temporarily
    util.removeChildren(parentCards);   
    util.removeChildren(parentNoData);

    //TODO - render input before(decoupled) from renderCardComp

    
    dataExchanges.getExchanges().map( (exchange) => {
      renderCardComp(exchange);
    })
  })
  .catch((error)=>{
    //just temporarily
    util.removeChildren(parentCards);   
    util.removeChildren(parentNoData);
    renderNoDataComp();
  })
}