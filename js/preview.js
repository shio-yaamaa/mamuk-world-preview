/* global THREE */

// FirstPersonControls container
const container = document.createElement('div');
container.id = 'preview';
document.body.appendChild(container);

// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth * PREVIEW_WIDTH_RATIO / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * PREVIEW_WIDTH_RATIO, window.innerHeight);
container.appendChild(renderer.domElement);

// FirstPersonControls
const firstPersonControls = new THREE.FirstPersonControls(camera, container);
const clock = new THREE.Clock();
const toggleFirstPersonControls = activate => {
	firstPersonControls.movementSpeed = 0;
	firstPersonControls.lookSpeed = activate ? FIRST_PERSON_CONTROLS_ROLL_SPEED / 2 : 0;
};
toggleFirstPersonControls(true);

// Create the world background
const worldBackgroundTexture = new THREE.TextureLoader().load('test.png');
const worldBackground = new THREE.Mesh(
  new THREE.SphereGeometry(50, 32, 32),
  new THREE.MeshBasicMaterial({map: worldBackgroundTexture, side: THREE.BackSide})
);
scene.add(worldBackground);

// Animate and Render
const animate = () => {
	requestAnimationFrame(animate);
	render();
};

const render = () => {
  firstPersonControls.update(clock.getDelta());
  renderer.render(scene, camera);
};

animate();

setWheelListener();
setWindowListener();

const updateBackgroundImage = imageSrc => {
  worldBackground.material.map = new THREE.TextureLoader().load(event.target.result);
  worldBackground.material.needsUpdate = true;
};