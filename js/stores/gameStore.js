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
    getData: function() {
        axios.get('http://178.62.86.6/api/end')
            .then(function(response) {

            });
        axios.post('http://178.62.86.6/api/game', {
                'name': "Terry",
                'name1':'trevor'
            })
            .then(function(response) {

            });
        axios.get('http://178.62.86.6/api/deal')
            .then(function(response) {
                deal = response;
            })
    }

});

module.exports = GameStore;

appDispatcher.register(handleAction);

function handleAction(payload) {

    switch (payload.action) {
        case Constants.HOME_ACTION:
            GameStore.emit('showHome')
            console.log(deal, response);
            break;
        case Constants.LOGIN_ACTION:
            GameStore.emit('showLogin');
            break;
        case Constants.SUBMIT:
            GameStore.emit('submitLogin');
            break;

        default:
    }
}