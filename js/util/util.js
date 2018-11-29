const removeChildren = (element) => {
  while (element.hasChildNodes()) {   
    element.removeChild(element.firstChild);
  }
}
const hideDropDown = (element) => {
  element.classList.remove("show-content");
  element.classList.add("hide-content");
}
const showDropDown = (element) => {
  element.classList.remove("hide-content");
  element.classList.add("show-content");
}
const renderComp = (parentId, htmlElement, isElemLonely = true) => {
  /* debugger; */
  let parentElement = document.getElementById(parentId);
  
  if(isElemLonely){
    removeChildren(parentElement);
  }
  parentElement.insertAdjacentHTML('afterbegin', htmlElement); 
}


module.exports = {removeChildren, hideDropDown, showDropDown, renderComp};
