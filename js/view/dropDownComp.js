import fillSearchInput from '../controller/fillSearchInputController';

export default function renderDropDownComp(content, parent){
  
  let newAnchor = document.createElement('a');
  let newContent = document.createTextNode(`${content.name} - ${content.symbol}`);
  newAnchor.appendChild(newContent);
  newAnchor.onclick = fillSearchInput;
  parent.appendChild(newAnchor);
   
}