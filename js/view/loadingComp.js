import {removeChildren, renderComp} from '../util/util';

export default function renderLoadingComp(){
  let parentId = "section-bottom";
  let cardsParent = document.getElementById("section-middle");
  let loadingHTML = `<div class="spinner">
                      <div class="dot1"></div>
                      <div class="dot2"></div>
                    </div>`
  
  removeChildren(cardsParent);
  renderComp(parentId, loadingHTML);
}