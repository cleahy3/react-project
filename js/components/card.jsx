var GameStore = require('../stores/gameStore.js');


var Card = React.createClass({
  render: function(){
    return (
      <div className={this.props.cn}>
        <p>{this.props.number}</p>
        <p>{this.props.suit}</p>
        <div>{this.props.symbol}</div>
      </div>
    )
  }
})

module.exports = Card;
