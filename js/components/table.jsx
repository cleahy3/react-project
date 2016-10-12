var Flop = require('./flop.jsx');
var GameStore = require('../stores/gameStore.js');
var Card = require('./card.jsx');
var cardObj;
var Table = React.createClass({
  getInitialState: function(){
    return {
      cards: {},
      isDealt: false
    }
  },
  componentWillMount: function(){

    //GameStore.getCards();
  },

  componentDidMount: function(){

    GameStore.on('dealCards', this.dealCards);

  },

  setCardsState: function(cards) {
    this.setState({
      cards: cards,
      isDealt: true
    });
  },

  dealCards: function(){
    console.log("DEAL CARDS HERE");

    var deal = GameStore.getCards();
    var cards = GameStore.getGame().players[0].hand;

    return this.setCardsState(cards);

    //AXIOS REQUEST HERE FOR DEALING CARDS?

  },

  render: function(){

    if (this.state.isDealt) {

      var cardList = this.state.cards.map( function(card, i){

        console.log('mapping like a badman')
        return(
          <Card key={i} number={card.number}/>
          )
      })
    }


    return (
      <div>
        <span id="poker-table"></span>
        <div>{cardList}</div>
        <Flop />
      </div>
    )
  }
})

module.exports = Table;
