exports.removeChildren = (element) => {
  while (element.hasChildNodes()) {   
    element.removeChild(element.firstChild);
  }
}
exports.hideDropDown = (element) => {
  element.classList.remove("show-content");
  element.classList.add("hide-content");
}
exports.showDropDown = (element) =>{
  element.classList.remove("hide-content");
  element.classList.add("show-content");
}
