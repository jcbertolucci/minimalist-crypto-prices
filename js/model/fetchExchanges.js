import axios from 'axios'
import { dataExchanges } from './exchanges'
import renderCardComp from '../view/cardComp'
import util from '../util/util'

export default async function fetchExchanges(coinSymbol, currency){
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  //new version
  let url = `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${coinSymbol}&tsym=${currency}`;
  
  //old version
  //let url = `https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=${coinSymbol}&tsym=${currency}`;  

  await getExchanges(`${proxyUrl}${url}`);
}

//create a model for this
function getExchanges(url){
  axios.get(url)
  .then((res)=>{
    dataExchanges.clearData();
    dataExchanges.setExchanges(res.data.Data.Exchanges);
    dataExchanges.setMessage(res.data.Message);
    
    //just temporarily
    let parentCards = document.getElementById("section-middle");
    util.removeChildren(parentCards);   

    console.log(dataExchanges.getExchanges());
    dataExchanges.getExchanges().map( (exchange) => {
      renderCardComp(exchange)
    })
  })
  .then(()=>{
    console.log("Done...");
  })
  .catch((error)=>{
    console.log(error);
  })
}