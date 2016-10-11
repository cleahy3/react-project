var Flop = require('./flop.jsx');
var GameStore = require('../stores/gameStore.js');
var Card = require('./card.jsx');

var Table = React.createClass({
  componentDidMount: function(){

    GameStore.on('dealCards', this.dealCards);

  },
  dealCards: function(){
    console.log("DEAL CARDS HERE");

    var _cards = GameStore.getDeal();

    console.log(_cards)
    this.setState({
      cards: _cards
    });
    //AXIOS REQUEST HERE FOR DEALING CARDS?
  },
  render: function(){


    return (
      <div>
        <span id="poker-table" />
        <p></p>
        <Flop />
      </div>
    )
  }
})

module.exports = Table;
