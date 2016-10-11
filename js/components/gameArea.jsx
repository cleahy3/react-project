
var Table = require('./table.jsx');
var BetBox = require('./betBox.jsx');
var Constants = require('../constants/constants.js');
var Button = require('./button.jsx')


var GameArea = React.createClass ({
  render: function(){
    return (
      <div>
        <h1>Game Area</h1>
        <Button value="Deal" constants={Constants.DEAL_CARDS} />
        <Table />
        <BetBox />
   
      </div>
    )
  }
})

module.exports = GameArea;
