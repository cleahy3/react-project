var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');

var _game = {

};

// var _cards = [
//     {
//       number: 1,
//       suit: "hearts"
//     },
//     {
//       number: 2,
//       suit: "hearts"
//     },
//     {
//       number: 3,
//       suit: "hearts"
//     }
//   ];
//

var GameStore = merge(EventEmitter.prototype , {

  getGame : function () {
      return _game
  }


  // getCards: function(){
  //   return _cards
  // }

});


module.exports = GameStore;

appDispatcher.register(handleAction);

function handleAction(payload){

  switch (payload.action) {
    case Constants.HOME_ACTION :
      GameStore.emit('showHome')
      break;
    case Constants.LOGIN_ACTION :
      GameStore.emit('showLogin');
      break;
    case Constants.SUBMIT:
      GameStore.emit('submitLogin');
      break;
    case Constants.DEAL_CARDS:
      GameStore.emit('dealCards');
      break;

    default:
  }
}
