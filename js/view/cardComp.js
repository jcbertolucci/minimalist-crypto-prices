import { renderComp } from '../util/util'

export default function renderCardComp(content){
  let isElemLonely = false;
  let parentId = "section-middle";
  let cardHTML = `<div class="card-exchange">
                    <div class="card-top">
                    </div>
                    <div class="card-content">
                      <div class="price-area">
                        <h1 class="card-title">${content.MARKET}</h1>
                        <h3>${content.TOSYMBOL} ${content.PRICE.toFixed(2)}</h3>
                      </div>
                      <div class="text-area">
                        <h5><span>Change 24h:</span></h5>
                        <h5><span>Volume 24h:</span></h5>
                        <h5><span>High day:</span></h5>
                        <h5><span>Low day:</span></h5>
                      </div>
                      <div class="value-area">
                        ${isItNegative(content.CHANGEPCT24HOUR) ?
                          `<h5 class="negative-color">${content.CHANGEPCT24HOUR.toFixed(4)}<span>%</span></h5>` :
                          `<h5 class="positive-color">${content.CHANGEPCT24HOUR.toFixed(4)}<span>%</span></h5>`
                        }
                        
                        <h5><span>${content.FROMSYMBOL}</span> ${content.VOLUME24HOUR.toFixed(4)}</h5>
                        <h5><span>${content.TOSYMBOL}</span> ${content.HIGH24HOUR.toFixed(4)}</h5>
                        <h5><span>${content.TOSYMBOL}</span> ${content.LOW24HOUR.toFixed(4)}</h5>
                      </div>
                    </div>
                </div>`
  renderComp(parentId, cardHTML, isElemLonely);
}
function isItNegative(number){
  const isNeg = number < 0 ? true : false;
  return isNeg
}