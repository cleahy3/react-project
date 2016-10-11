var Card = require('./card.jsx');

var Flop = React.createClass({
  render: function(){
    return (
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
})

module.exports = Flop;
