var Button = require('./button.jsx');
var Constants = require('../constants/constants.js');

var Navigation = React.createClass ({
    render: function(){
      return(
        <nav>
          <ul>
            <Button value="Home" constants={Constants.HOME_ACTION} />
            <Button value="Login" constants={Constants.LOGIN_ACTION} />
          </ul>
        </nav>
      )
    }
});

module.exports = Navigation;
