import { AnimationMixer } from 'three';

function setupModel(data) {
  const model = data.scene.children[0];
  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.tick = (delta) => mixer.update(delta);

  return model;
};

function setupModels(data) {
  var models, clips = [];
  data.forEach(function(e) {
    const model = e.scene.children[0];
    const clip = e.animations[0];
    models.push(model);

    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(clip);

    action.play();

    model.tick = (delta) => mixer.update(delta);
    
  })

  return models;
};

export { setupModel, setupModels };