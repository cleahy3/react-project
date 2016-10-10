var AppDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/gameConstants.js');


var NavButton = React.createClass({


	handleClick: function(){
		switch(this.props.name){
			case "home":

				AppDispatcher.dispatch({
		    		action: Constants.HOME
		   		});
			break;

			case "login":
				AppDispatcher.dispatch({
		    		action: Constants.LOGIN
		   		});
			break;

			case "end":
				AppDispatcher.dispatch({
		    		action: Constants.END
		   		});
			break;
		}
	},

	render: function(){
		return(
			<button onClick={this.handleClick}>{this.props.name}</button>
		)
	}

})

module.exports = NavButton;