export default function renderCardComp(content){
  let parent = document.getElementById("section-middle");
  let cardHTML = `<div class="card-exchange">
                    <div class="card-top">
                      <div>
                        <h1>${content.MARKET}</h1>  
                      </div>
                    </div>
                    <div class="card-content">
                      <h3>Price: ${content.TOSYMBOL} ${content.PRICE}</h3>
                      <h5>Volume 24h: ${content.FROMSYMBOL} ${content.VOLUME24HOUR}</h5>
                      <h5>High day: ${content.TOSYMBOL} ${content.HIGH24HOUR}</h5>
                      <h5>Low day: ${content.TOSYMBOL} ${content.LOW24HOUR}</h5>
                    </div>
                </div>`
  parent.insertAdjacentHTML('afterbegin',cardHTML);
}