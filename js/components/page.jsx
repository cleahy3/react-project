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

    },
    showHomePage: function(){

      this.setState({
        showHome: true,
        showLogin: false
      })

    },
    showLoginPage: function(){

      this.setState({
        showHome: false,
        showLogin: true
      })

    },
    render: function(){

       var page;
       if (this.state.showHome) {
         page = (
          <div>You're Home</div>
         )
       } else if(this.state.showLogin){
         page = (
           <div>Not Home</div>,
           <Login />
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
