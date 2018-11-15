import {removeChildren} from '../util/util';

export default function renderNoDataComp(){

  let parent = document.getElementById("section-bottom");
  let noDataHTML = `<div class="no-data">
                      <i class="material-icons">warning</i>
                      <h1>We're Sorry!</h1>
                      <p>No exchanges found for 'Bitcoinamaamoam'</p>
                    </div>`
  removeChildren(parent);

  parent.insertAdjacentHTML('afterbegin', noDataHTML);

}