var constants = require('../constants/gameConstants.js');
var NavButton = require('./button.jsx');
var Nav = React.createClass({

  render: function(){
		return(
			<div>
				<NavButton name="home" action={constants.HOME} />
				<NavButton name="login" action={constants.LOGIN}/>
				<NavButton name="end" action={constants.END}/>
			</div>
	)

  }

});



module.exports = Nav;

		