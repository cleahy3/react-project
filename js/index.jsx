var Page = require('./components/page.jsx');
var Navigation = require('./components/nav.jsx');

ReactDOM.render(
  <Page />,
  document.getElementById('app')
);

ReactDOM.render(
  <Navigation / >,
  document.getElementById('nav')
);
