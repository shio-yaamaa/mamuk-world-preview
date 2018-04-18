const setWheelListener = () => {
  /*let wheelTimer;
  
  // Wheel event
  renderer.domElement.addEventListener('wheel', event => {
  	firstPersonControls.moveState.forward = event.wheelDelta > 0 ? 1 : 0;
  	firstPersonControls.moveState.back = event.wheelDelta > 0 ? 0 : 1;
  	firstPersonControlsflyControls.updateMovementVector();
  	
  	clearTimeout(wheelTimer);
  	wheelTimer = setTimeout(() => {
  		firstPersonControls.moveState.forward = 0;
  		firstPersonControls.moveState.back = 0;
  		firstPersonControls.updateMovementVector();
  	}, 200);
  });*/
}

const setWindowListener = () => {
  // Window adjustments
  window.addEventListener('resize', event => {
  	camera.aspect = window.innerWidth * PREVIEW_WIDTH_RATIO / window.innerHeight;
  	camera.updateProjectionMatrix();
  	renderer.setSize(window.innerWidth * PREVIEW_WIDTH_RATIO, window.innerHeight);
  });
  renderer.domElement.addEventListener('mouseleave', () => {
  	toggleFirstPersonControls(false);
  });
  renderer.domElement.addEventListener('mouseenter', () => {
  	toggleFirstPersonControls(true);
  });
};