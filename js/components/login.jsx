var Button = require('./button.jsx');
var Constants = require('../constants/constants.js');

var Login = React.createClass ({
    render: function(){
      return(
        <div>
          <p>Login Page</p>

          <input type="text" name="name" id="login"/><br/>
          <Button value="Submit" action={this.handleClick} />
        </div>

      )
    }
});

module.exports = Login;
