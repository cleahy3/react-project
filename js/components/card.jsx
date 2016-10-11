var GameStore = require('../stores/gameStore.js');


var Card = React.createClass({
  render: function(){
    return (
      <div className="card">
      	{this.props.card}
      </div>
    )
  }
})

module.exports = Card;
