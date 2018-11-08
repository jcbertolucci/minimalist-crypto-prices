export default function removeCssClass(componentId, className){
  let compHTML = document.getElementById(componentId);
  compHTML.classList.remove(className);
}