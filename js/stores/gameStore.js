var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');

var axios = require('axios');
var _game = {
    flop: [],
    round: 0,
    pop: 0,
    players: [{
        hand: []
    }, {
        hand: []
    }]
};
var cards = {};
var deal = {};
var player = {};
var playerCards = [];


var GameStore = merge(EventEmitter.prototype, {

        getGame: function() {
            return _game
        },
        getEnd: function() {
            axios.get('http://localhost:3000/end')
                .then(function(response) {

                    return response;

                });
        },
        setGame: function() {
            axios.post('http://localhost:3000/game', [{
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
            axios.get('http://localhost:3000/deal')
                .then(function(response) {
                    _game.players[0].hand.push(response.data.user.hand[0]);
                    _game.players[0].hand.push(response.data.user.hand[1]);
                    _game.flop.push(response.data.flop);

                    return playerCards
                }).catch(function(error) {
                    console.log(error);
                });
        },

        getDeal: function() {


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
        case Constants.END_ACTION:
            GameStore.emit('endAction');
            this.reload();
            break;

        default:
    }
}