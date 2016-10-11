var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');

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
                    
                    return response;

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
                
                return response;
            }).catch(function(error) {
                console.log(error);
            });
        },
        getCards: function() {
            axios.get('http://178.62.86.6/api/deal')
                .then(function(response) {
                    player.hand=response.data.user.hand;
                    deal.flop =
                      response.data.flop;
                    deal.user = 
                      response.data.user.hand;
                    deal.computer= 
                      response.data.computer.hand;
                    
                    console.log(deal)
                    return deal
          
                }).catch(function(error) {
                    console.log(error);
                });
               console.log(deal)
               return deal

        },
        
        getDeal: function(){
          return deal
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


module.exports = GameStore;

appDispatcher.register(handleAction);

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
            break;
        case Constants.DEAL_CARDS:
            GameStore.emit('dealCards');
           
            break;

        default:
    }
}
