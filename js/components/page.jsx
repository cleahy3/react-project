var Login = require('./login.jsx');
var GameArea = require('./gameArea.jsx');
var GameStore = require('../stores/gameStore.js');


var Page = React.createClass ({
    getInitialState: function( ){
      return {
        showHome: false,
        showLogin: false
      }

    },
    componentDidMount: function(){

        GameStore.on('showHome', this.showHomePage);
        GameStore.on('showLogin', this.showLoginPage);
        GameStore.on('submitLogin', this.submitLogin);

    },
    showHomePage: function(){

      this.setState({
        showHome: true,
        showLogin: false,
        submitLogin: false
      })

    },
    showLoginPage: function(){

      this.setState({
        showHome: false,
        showLogin: true,
        submitLogin: false
      })

    },
    submitLogin: function(){

      this.setState({
        showHome: false,
        showLogin: false,
        submitLogin: true
      })

    },
    render: function(){

       var page;
       if (this.state.showHome) {
         page = (
          <h1>You're Home</h1>
         )
       } else if(this.state.showLogin){
         page = (
           <Login />
         )
       } else if(this.state.submitLogin){
         page = (
           <GameArea/>
         )
       }

      return(
        <div>
          {page}
        </div>

      )
    }
});

module.exports = Page;
