<<<<<<< HEAD
var Table = require('./table.jsx');
var BetBox = require('./betBox.jsx');
var Constants = require('../constants/constants.js');
var Button = require('./button.jsx')


=======
>>>>>>> 513ad85f64c75ad61a1d82dbf68433e4922ef445
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

      </div>
    )
  }
})

module.exports = GameArea;
