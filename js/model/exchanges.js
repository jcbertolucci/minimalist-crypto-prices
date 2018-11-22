export const dataExchanges = {

  exchanges: [],
  message:"",
  
  getExchanges: function (){
    return this.exchanges;
  },
  setExchanges: function (value) {
    this.exchanges = value;
  },
  getMessage: function () {
    return this.message;
  },
  setMessage: function (value) {
    this.message = value;
  },
  clearData: function () {
    this.message = "";
    this.exchanges = [];
  },
  sortPrice: function () {
    this.exchanges.sort( (a, b) => {
      return a.PRICE - b.PRICE;
    }) 
  },
  sortVolume: function () {
    this.exchanges.sort( (a, b) => {
      return b.VOLUME24HOUR - a.VOLUME24HOUR;
    }) 
  }
}
