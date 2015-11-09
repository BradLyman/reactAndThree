(function() {
  'use strict';
  console.log('loaded');
  let Three       = require('three'),
      React       = require('react'),
      ReactDOM    = require('react-dom'),
      ReactRouter = require('react-router'),
      Router      = ReactRouter.Router,
      Route       = ReactRouter.Route,
      Link        = ReactRouter.Link;

  const App = React.createClass({
    render : function() {
      return (
        <div>
          <p>App</p>
          <Link to="/Scene">Scene</Link>
          <span> | </span>
          <Link to="/About">About</Link>
          <hr />
          {this.props.children}
        </div>
      );
    },
  });

  const About = React.createClass({
    render : function() {
      return <h3>About</h3>;
    },
  });

  const Scene = React.createClass({
    componentDidMount : function() {
      this.scene = new Three.Scene();
      this.camera = new Three.PerspectiveCamera(
          75, 800/600, 1, 400);
      this.renderer = new Three.WebGLRenderer();
    },

    render : function() {
      return (
        <div style={{ border : '1px solid black' }}>
          <p>Scene</p>
          <canvas
            style={{ width : '100%', height : '100%' }}
            ref="canvas" />
        </div>
      );
    },
  });

  const Routes = (
    <Route path="/" component={App}>
      <Route path="/About" component={About} />
      <Route path="/Scene" component={Scene} />
    </Route>
  );

  ReactDOM.render(<Router>{Routes}</Router>, document.body);
}());
