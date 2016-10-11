
var Table = require('./table.jsx');
var BetBox = require('./betBox.jsx');
var Constants = require('../constants/constants.js');
var Button = require('./button.jsx')


var GameArea = React.createClass ({
  render: function(){
    return (
      <div>
        <h1>Game Area</h1>
<<<<<<< HEAD

        <Button value="Deal" constants={Constants.DEAL_CARDS} />
        <Table />
        <BetBox />
      <span id="poker-table" />
=======
        <Button value="Deal" constants={Constants.DEAL_CARDS} />
        <Table />
        <BetBox />
>>>>>>> 03e89236e0a1e984f0588fde5cc6f6509b4d438c
      </div>
    )
  }
})

module.exports = GameArea;
