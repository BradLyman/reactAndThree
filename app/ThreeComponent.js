var Three = require('three');

var ThreeComponent = {
  isActive : false,
  renderer : undefined,
  scene    : undefined,

  componentDidMount : function() {
    var canvas = this.refs.threeCanvas.getDOMNode();

    this.isActive = true;

    this.renderer = new Three.WebGLRenderer({
      canvas : canvas,
      antialias : true
    });
    this.scene = new Three.Scene();

    this.setupThreeResources();

    window.addEventListener('resize', this._handleWindowResize);

    this._handleWindowResize();
    this._render();
  },

  teardownThree : function() {
    this.teardownThreeResources();

    this.isActive = false;
    window.removeEventListener('resize', this._handleWindowResize);
    delete this.renderer;
    delete this.scene;
  },

  _handleWindowResize : function() {
    var canvas = this.refs.threeCanvas.getDOMNode();
    var style  = window.getComputedStyle(canvas, null);
    var w      = Math.floor(parseFloat(style.getPropertyValue('width')));
    var h      = Math.floor(parseFloat(style.getPropertyValue('height')));

    this.renderer.setSize(w, h);
    this.onWindowResize(w, h);
  },

  _render : function() {
    if (this.isActive) {
      window.requestAnimationFrame(this._render);
    }

    this.animationFrame();
  },

  animationFrame : function() {
    console.log('animation frame');
  },

  onWindowResize         : function(width, height) { /* do nothing */ },
  setupThreeResources    : function() { /* do nothing */},
  teardownThreeResources : function() { /* do nothing */ }
};

module.exports = ThreeComponent;
