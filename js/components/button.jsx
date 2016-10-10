var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var GameStore = require('../stores/gameStore.js')

var Button = React.createClass({
  render: function(){
    return(
      <button onClick={this.handleClick}>{this.props.value}</button>
    )
  },
  handleClick: function(){

      appDispatcher.dispatch({
        action: this.props.constants
      })

    return GameStore.getGame();
  }
})

module.exports= Button;
