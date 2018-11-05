import removeChildren from './removeChildren';
import {exchanges} from '../model/data'

export default function renderExhanges(coinName){

  let bottomDiv = document.getElementById("section-bottom"); 
  let filteredExchanges = exchanges.filter( (exchange) =>{
    return (exchange.coin.toLowerCase() === coinName.toLowerCase())
  })

  removeChildren(bottomDiv);
  
  if (filteredExchanges.length > 0){
    filteredExchanges.map( (exchange) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("all-border");
      newDiv.classList.add("child-container");

      let newH1 = document.createElement("h1");
      let newContentH1 = document.createTextNode(exchange.name);
      newH1.appendChild(newContentH1);

      let newP = document.createElement("p");
      let newContentP = document.createTextNode(exchange.price);
      newP.appendChild(newContentP);

      newDiv.appendChild(newH1);
      newDiv.appendChild(newP);

      bottomDiv.appendChild(newDiv);
    })
  }
}