var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');

var _game = {

};

var GameStore = merge(EventEmitter.prototype , {

  getGame : function () {
      return _game
  }

});

module.exports = GameStore;

appDispatcher.register(handleAction);

function handleAction(payload){
  switch (payload.action) {
    case Constants.HOME_ACTION :
      console.log("HOME CLICKED");
      break;
    case Constants.LOGIN_ACTION :
      console.log("LOGIN CLICKED");
      break;
    case Constants.SUBMIT:
      console.log("SUBMIT CLICKED");
      break;

    default:
  }
}
