var Button = require('./button.jsx');
var Constants = require('../constants/constants.js')

var BetBox = React.createClass({
  render: function(){
    console.log('bet boxxxxx');
    return (
      <div>
        <Button value="Raise" constants={Constants.RAISE_ACTION} />
        <input type="number" id="bet-amount" />
        <Button value="Call" constants={Constants.CALL_ACTION} />
        <Button value="Fold" constants={Constants.FOLD_ACTION} />
      </div>
    )
  }
})

module.exports = BetBox;
