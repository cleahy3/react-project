var Flop = require('./flop.jsx');
var GameStore = require('../stores/gameStore.js');
var Card = require('./card.jsx');
var cardObj;
var Table = React.createClass({
  getInitialState: function(){
    return {
      game: GameStore.getGame(),
      isDealt: false
    }
  },
  componentWillMount: function(){
    //GameStore.getCards();
  },

  componentDidMount: function(){
    GameStore.on('dealCards', this.setCardsState);
  },

  setCardsState: function() {
    this.setState({
      game: GameStore.getGame(),
      isDealt: true
    });
  },

  render: function(){
    if(this.state.game !== {}){
      if (this.state.isDealt) {
        var playerCards = this.state.game.players[0].hand;
        var flopCards = this.state.game.flop;

        var cardList = playerCards.map( function(card, i){
          var className= "user" + i;
          card = cardHandle(card);
          console.log(card)
          return(
             <Card key={i} number={card.number} symbol={card.symbol} cn={className} />
            )
        })
        var flop = flopCards.map( function(card, i){
          var className = "flop"+i;
          card = cardHandle(card);

            return(
              <Card key={i} number={card.number} symbol={card.symbol} cn={className} />
            )
          })
      }
    }
    else{
      var cardList = "Click Deal";
      var flop = "Click Deal";
    }

    return (
      <div>
        <span id="poker-table"></span>
        <div className="userCards">{cardList}</div>
        <div className="flopCards">{flop}  </div>
        <Flop />
      </div>
    )
  }
});

function cardHandle(card){
    var symbol;
    var cardColour;
    var number;

    if (card.Suit == "Diamonds"){
         symbol = String.fromCharCode(9830);
         cardColour = "#FF0000 ";
     } else if
     (card.Suit=="Spades"){
       symbol = String.fromCharCode(9829);
       cardColour = "#000000 ";
     } else if(card.Suit=="Hearts"){
       symbol = String.fromCharCode(9829);
       cardColour = "#FF0000 ";
     } else if
       (card.Suit=="Clubs"){
       symbol = String.fromCharCode(9827);
       cardColour = "#000000 ";
     }
       number = card.Number;
     switch (card.Number){
       case 11:
       number = "J";
       break;

       case 12:
       number = "Q";
       break;

       case 13:
       number = "K";
       break;

       case 14:
       number = "A";
       break;
   }
   return card={ cardColour: cardColour,
     number:number, symbol:symbol};

 };


module.exports = Table;
