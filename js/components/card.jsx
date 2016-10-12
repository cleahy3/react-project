var GameStore = require('../stores/gameStore.js');


var Card = React.createClass({
  render: function(){
    return (
      <div className="card">
        <p>Number</p>
        {this.props.number}
      </div>
    )
  }
})

module.exports = Card;
