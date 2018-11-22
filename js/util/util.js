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


module.exports = {removeChildren, hideDropDown, showDropDown};
