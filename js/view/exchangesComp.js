import {removeChildren, renderComp} from '../util/util';

export default function renderExchangeComp(arrayExchanges){

  /* let h1_html = '<h1>Test</h1>' */
  let bottomDiv = document.getElementById("section-bottom"); 
  /* bottomDiv.insertAdjacentHTML('afterbegin',h1_html); 
    <!-- beforebegin -->
    <p>
      <!-- afterbegin -->
      foo
      <!-- beforeend -->
    </p>
    <!-- afterend -->
  */
  removeChildren(bottomDiv);
  
  if (arrayExchanges.length > 0){
    
    arrayExchanges.map( (exchange) => {
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