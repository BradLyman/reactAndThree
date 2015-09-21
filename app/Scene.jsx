var React          = require('react'),
    Three          = require('three'),
    ThreeComponent = require('./ThreeComponent.js'),
    assign         = require('object-assign');

var Scene = React.createClass(assign(ThreeComponent, {
  camera : undefined,
  cube   : undefined,

  setupThreeResources : function() {
    var geometry, material;

    if (!this.camera) {
      this.camera = new Three.PerspectiveCamera(75, 1.0, 1, 1000);
      this.camera.position.z = 5;
    }

    if (!this.cube) {
      geometry = new Three.BoxGeometry(1,1,1);
      material = new Three.MeshBasicMaterial({color : 0x333333});

      this.cube = new Three.Mesh(geometry, material);
      this.scene.add(this.cube);
    }
  },

  animationFrame : function() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  },

  onWindowResize : function(w, h) {
    this.camera.aspect = w/h;
    this.camera.updateProjectionMatrix();
  },

  render : function() {
    return (
      <canvas
        ref="threeCanvas"
        style={{
          minWidth  : '100vw',
          maxWidth  : '100vw',
          minHeight : '80vh',
          maxHeight : '80vh' }} />
    );
  }
}));

module.exports = Scene;


