export default function removeChildren(element){
  while (element.hasChildNodes()) {   
    element.removeChild(element.firstChild);
  }
}