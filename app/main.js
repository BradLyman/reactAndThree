(function() {
  var React = require('react');
  var injectTapEventPlugin = require('react-tap-event-plugin');
  var AppHeader = require('./AppHeader.jsx');

  injectTapEventPlugin();

  React.render(<AppHeader />, document.body);
}());
