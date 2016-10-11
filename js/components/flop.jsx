var Card = require('./card.jsx');

var Flop = React.createClass({
  render: function(){
    if(this.props.cards){
    return (
      <div>
        <Card cn="flopCard1" card={this.props.cards[0]}/>
        <Card cn="flopCard2" card={this.props.cards[1]}/>
        <Card cn="flopCard3" card={this.props.cards[2]}/>
        <Card cn="flopCard4" card={this.props.cards[3]}/>
        <Card cn="flopCard5" card={this.props.cards[4]}/>
      </div>
    )}else{
      return(<div> </div>)
    }
  }
})

module.exports = Flop;
