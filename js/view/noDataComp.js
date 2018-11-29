import {removeChildren, renderComp} from '../util/util';

export default function renderNoDataComp(){
  let inputTxt = document.getElementById("search-input").innerText;
  let parentId = "section-bottom";
  let noDataHTML = `<div class="no-data">
                      <i class="material-icons">warning</i>
                      <h1>We're Sorry!</h1>
                      <p>No exchanges found for '${inputTxt}'</p>
                    </div>`
  
  renderComp(parentId, noDataHTML);
}