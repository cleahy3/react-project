var Button = require('./button.jsx');
var Constants = require('../constants/constants.js');
var GameStore = require('../stores/gameStore.js');


var Navigation = React.createClass ({
    getInitialState: function(){
      return{
        loggedIn:false
      }
    },
    componentDidMount: function(){

        GameStore.on('submitLogin', this.loggedIn);
        GaneStore.on('endAction',this.restart);

    },
    restart: function (){
      this.setState({
        loggedIn: false
      });
      this.forceUpdate();
    },
    loggedIn: function(){
      this.setState({
        loggedIn: true
      });
    },
    render: function(){
      console.log(this.state.loggedIn);
      var loginEndBtn;
      if (this.state.loggedIn) {
        loginEndBtn = (
         <Button value="End" constants={Constants.END_ACTION} />
        )
      }
      else {
        loginEndBtn = (
         <Button value="Login" constants={Constants.LOGIN_ACTION} />
        )
      }

      return(
        <nav>
          <ul>
            <Button value="Home" constants={Constants.HOME_ACTION} />
            {loginEndBtn}
          </ul>
        </nav>
      )
    }
});

module.exports = Navigation;
