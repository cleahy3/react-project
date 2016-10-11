var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');

<<<<<<< HEAD
var axios = require('axios');
var _game = {};
var cards = {};
var deal = {}
var player = {};



var GameStore = merge(EventEmitter.prototype, {

        getGame: function() {
            return _game
        },
        getEnd: function() {
            axios.get('http://178.62.86.6/api/end')
                .then(function(response) {
                    console.log(response);
                });
        },
        setGame: function() {
            axios.post('http://178.62.86.6/api/game', [{
                    "name": player.name,
                    "isComputer": false
                }, {
                    "name1": "Comp",
                    "isComputer1": true
                }

            ]).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
        },
        getCards: function() {
            axios.get('http://178.62.86.6/api/deal')
                .then(function(response) {  
                    player.hand=response.data.user.hand;
                    console.log(player);
                }).catch(function(error) {
                    console.log(error);
                });
        }


    })
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

=======
var _game = {

};

var GameStore = merge(EventEmitter.prototype , {

  getGame : function () {
      return _game
  }

});
>>>>>>> 513ad85f64c75ad61a1d82dbf68433e4922ef445

module.exports = GameStore;

appDispatcher.register(handleAction);

<<<<<<< HEAD
function handleAction(payload) {

    switch (payload.action) {
        case Constants.HOME_ACTION:
            GameStore.emit('showHome')
            break;
        case Constants.LOGIN_ACTION:
            GameStore.emit('showLogin');
            break;
        case Constants.SUBMIT:
            GameStore.emit('submitLogin');
            player.name = payload.data;
            console.log(payload.data);
            break;
        case Constants.DEAL_CARDS:
            GameStore.emit('dealCards');
            GameStore.getCards();
            break;

        default:
    }
}
=======
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

    default:
  }
}
>>>>>>> 513ad85f64c75ad61a1d82dbf68433e4922ef445
