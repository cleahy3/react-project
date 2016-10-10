var constants = require('../constants/gameConstants.js')
var Nav = React.createClass({

  render: function(){
		return(
			<button name="home" action={constants.HOME} />
			<button name="login" action={constants.LOGIN}/>
			<button name="end" action={constants.END}/>

	)

  }

});



module.exports = Nav;

		