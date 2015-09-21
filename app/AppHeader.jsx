var React        = require('react'),
    ThemeManager = require('./ThemeManager.js'),
    mui          = require('material-ui'),
    AppBar       = mui.AppBar,
    LeftNav      = mui.LeftNav;

var AppHeader = React.createClass({
  childContextTypes : {
    muiTheme : React.PropTypes.object
  },

  getChildContext : function() {
    return {
      muiTheme : ThemeManager.getCurrentTheme()
    };
  },

  render : function() {
    var menuItems = [
      {route : 'about', text : 'About'}
    ];

    var appBar = <AppBar
      title="Stuff"
      onLeftIconButtonTouchTap={this._onLeftButtonTouchTap} />;

    return (
      <div>
        {appBar}
        <LeftNav ref="leftNav"
                 menuItems={menuItems}
                 docked={false}
                 header={appBar}/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  },

  _onLeftButtonTouchTap : function() {
    this.refs.leftNav.toggle();
  }
});

module.exports = AppHeader;
