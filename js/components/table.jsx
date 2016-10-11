var Flop = require('./flop.jsx');
var GameStore = require('../stores/gameStore.js');

var Table = React.createClass({
  componentDidMount: function(){

    GameStore.on('dealCards', this.dealCards);

  },
  dealCards: function(){
    console.log("DEAL CARDS HERE");
    //AXIOS REQUEST HERE FOR DEALING CARDS?
  },
  render: function(){
    return (
      <div>
        <span id="poker-table" />
        <Flop />
      </div>
    )
  }
})

module.exports = Table;
