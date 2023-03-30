import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 1000);

  camera.position.set(100, 10, 300);

  return camera;
}

export { createCamera };
