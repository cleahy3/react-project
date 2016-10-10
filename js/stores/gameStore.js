var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/gameConstants.js');

var _game = [
  
 ];

var GameStore = merge(EventEmitter.prototype , {

  getGame : function() {
    return _game
  }

});

module.exports = GameStore;

appDispatcher.register(handleAction);


function handleAction(payload) {
  //checks the payload for the action variable
  console.log('something changed');
  if(payload.action == Constants.HOME) {
    console.log('HOME');
    GameStore.emit('update');
  }

  if(payload.action == Constants.LOGIN) {
    console.log('LOGIN');
    GameStore.emit('update');
      }
  else if(payload.action == Constants.END) {
    console.log('END');
    GameStore.emit('update');
      }


} 