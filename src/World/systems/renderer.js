import * as THREE from 'three';

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.useLegacyLights = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  return renderer;
}

export { createRenderer };
