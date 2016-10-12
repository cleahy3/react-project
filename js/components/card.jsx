var GameStore = require('../stores/gameStore.js');


var Card = React.createClass({
  render: function(){
    return (
      <div className={this.props.cn}>
        <p>{this.props.number}
        {this.props.suit}</p>
      </div>
    )
  }
})

module.exports = Card;
