var Login = require('./login.jsx');
var GameArea = require('./gameArea.jsx');


var Page = React.createClass ({
    render: function(){
      return(
        <Login />,
        <GameArea />
      )
    }
});

module.exports = Page;
