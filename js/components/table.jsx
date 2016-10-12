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

  setCardsState: function(cards, flopCards) {
    this.setState({
      cards: cards,
      flop: flopCards,
      isDealt: true
    });
  },

  dealCards: function(){
    console.log("DEAL CARDS HERE");

    var deal = GameStore.getCards();
    var cards = GameStore.getGame().players[0].hand;
    var flopCards = GameStore.getGame().flop;

    return this.setCardsState(cards, flopCards);

    //AXIOS REQUEST HERE FOR DEALING CARDS? NOPE

  },

  render: function(){
    console.log(this.state);
    if (this.state.isDealt) {

      var cardList = this.state.cards.map( function(card, i){
        var className= "user" + i;
        console.log(card)
        return(
           <Card key={i} number={card.Number} suit={card.Suit} cn={className} />
          )
      })
      var flopCards = this.state.flop[0].map( function(card, i){
        var className = "flop"+i;
          return(
            <Card key={i} number={card.Number} suit={card.Suit} cn={className} />
          )
        })
    }


    return (
      <div>
        <span id="poker-table">
        <div className="userCards">{cardList}</div>
        <div className="flopCards">{flopCards}  </div>
        
        </span>
      </div>
    )
  }
})

module.exports = Table;
