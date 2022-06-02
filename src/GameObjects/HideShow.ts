import * as utils from '@dcl/ecs-scene-utils';
let Hidebook = true;

export function ShowHideObjects(myEntity: Entity, triggerPos: Vector3, triggerSize: Vector3): void {

  let currentO = myEntity.getComponent(GLTFShape);
  if (Hidebook) {
    currentO.visible = false;
    log("book is hide for the first time ");
    Hidebook = false;
  }

  const triggerBox = new utils.TriggerBoxShape(triggerSize, triggerPos)
  myEntity.addComponent(
    new utils.TriggerComponent(triggerBox, {
      onCameraEnter: () => {
        currentO.visible = true;

        log('book is visible');

      },
      onCameraExit: () => {
        currentO.visible = false;
        log('book is invisible');
      },
    // enableDebug: true,
    })

  )
}
export function Video(myEntity: Entity,video: VideoTexture): void {

  const triggerPosition = new Vector3(1.5, 1.5, 8);
  const triggerSize = new Vector3(15,7, 19);
  const triggerBox = new utils.TriggerBoxShape(triggerSize, triggerPosition)
  myEntity.addComponent(
    new utils.TriggerComponent(triggerBox, {
      onCameraEnter: () => {
        video.play();
      },
      onCameraExit: () => {
        video.pause();
      },
    // enableDebug: true,
    })

  )
}

