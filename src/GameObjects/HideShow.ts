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