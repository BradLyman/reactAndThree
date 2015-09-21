(function() {
  var React  = require('react'),
      ReactRouter = require('react-router'),
      Router = ReactRouter.Router,
      Route  = ReactRouter.Route;

  var injectTapEventPlugin = require('react-tap-event-plugin');
  var AppHeader = require('./AppHeader.jsx'),
      BadLocation = require('./BadLocation.jsx'),
      Scene       = require('./Scene.jsx');

  injectTapEventPlugin();

  var routes = (
    <Route component={AppHeader} >
      <Route path="/" component={Scene} />
      <Route path="*" component={BadLocation} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, document.body);
}());
