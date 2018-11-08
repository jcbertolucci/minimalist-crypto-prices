import axios from 'axios'
import { dataCoins } from './data'

export default async function fecthCoins(){
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let url = 'https://api.coinmarketcap.com/v2/listings/'
  await getCoins(`${proxyUrl}${url}`);

  //More elegant way in case we need to chain promises
  /* 
  const coins =  getCoins(`${proxyUrl}https://api.coinmarketcap.com/v2/listings/`);
  const exchanges = getExcahnges(`${proxyUrl}https://api.coinmarketcap.com/v2/exchanges/`); 
  const result = Promise.all([coins, exchanges])

  return result  
  */
}
function getCoins(url){
  axios.get(url)
  .then((response)=>{
    dataCoins.set(response.data.data);
  })
  .catch((error)=>{
    console.log(error);
  })
}