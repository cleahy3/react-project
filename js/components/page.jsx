var Login = require('./login.jsx');
var GameArea = require('./gameArea.jsx');
var GameStore = require('../stores/gameStore.js');


var Page = React.createClass ({
    getInitialState: function( ){
      return {
        showHome: false
      }

    },
    componentDidMount: function(){

        GameStore.on('showHome', this.showHomePage);

    },
    showHomePage: function(){

      this.setState({
        showHome: true
      })

    },
    render: function(){

       var show;
       if (this.state.showHome) {
         show = (
          <div>You're Home</div>
         )
       } else {
         show = (
           <div>Not Home</div>,
           <Login />,
           <GameArea />
         )
       }

      return(
        <div>
          {show}
        </div>

      )
    }
});

module.exports = Page;
