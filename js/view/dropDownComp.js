import fillSearchInput from '../controller/fillSearchInputControl';

export default function renderDropDownComp(content, parent){
  let newAnchor = document.createElement('a');
  let newContent = document.createTextNode(`${content.name} - ${content.symbol}`);
  
  newAnchor.appendChild(newContent);
  newAnchor.onclick = fillSearchInput;
  parent.appendChild(newAnchor);
}