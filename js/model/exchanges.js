export const dataExchanges = {
  exchanges: [],
  message:"",
  getExchanges: function () {
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
  clearData: function (){
    this.message = "";
    this.exchanges = []
  }
}