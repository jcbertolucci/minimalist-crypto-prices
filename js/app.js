  import dropDownComp from './view/dropDownComp'
    
  /* Event Listeners */
  document.addEventListener('DOMContentLoaded', function(){
    let inputCoin = document.getElementById("search-input");
    inputCoin.oninput = dropDownComp;
  },false)

  
  



