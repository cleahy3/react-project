var Flop = require('./flop.jsx');
var GameStore = require('../stores/gameStore.js');
var Card = require('./card.jsx');
var isDealt= false;
var cardObj;
var Table = React.createClass({
  getInitialState: function(){
    return {
      cards: {}
    }
  },
  componentWillMount: function(){

    //GameStore.getCards();
  },

  componentDidMount: function(){

    GameStore.on('dealCards', this.dealCards);

  },

  setCardsState: function(cards) {
    isDealt = true;
    this.setState({
      cards: cards
    });
  },

  dealCards: function(){
    console.log("DEAL CARDS HERE");

    var deal = GameStore.getCards();

    var _cards = deal;
    return this.setCardsState(_cards);

    //AXIOS REQUEST HERE FOR DEALING CARDS?

  },

  render: function(){
    console.log(JSON.parse(this.state.cards));

    var userCards = JSON.parse(JSON.stringify(this.state.cards));
    console.log(JSON.stringify(userCards.user));
    console.log(userCards);
    if (isDealt) {

      var cardList = this.state.userCards.map( function(card, i){

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
