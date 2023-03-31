import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';
import { setupModels } from './setupModel.js';

async function loadModel() {
    const loader = new GLTFLoader();
    loader.setPath('/static/model/');

    const modelData = await Promise.all([
        loader.loadAsync('Parrot.glb'),
    ]);

    //  console.log('glb data', modelData);

    const model = setupModel(modelData[0]);
    model.position.set(0, 8, 0);

    return model;
}

export { loadModel };