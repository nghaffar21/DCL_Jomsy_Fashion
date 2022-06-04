import * as utils from '@dcl/ecs-scene-utils'
import { Video } from './HideShow';

export function createVideo(building, video="src/resources/video.mp4", position0= new Vector3(7, 10.6, -2.3), rotation0=Quaternion.Euler(0,-90,0), bottom=true, flip=false) {

  const myVideoClip = new VideoClip(video)

   const myVideoTexture = new VideoTexture(myVideoClip)
 myVideoTexture.loop=true;

   const myMaterial = new Material()
   myMaterial.albedoTexture = myVideoTexture
   myMaterial.roughness = 1
   myMaterial.specularIntensity = 0
   myMaterial.metallic = 0

   const screen = new Entity()
   screen.addComponent(new PlaneShape())
   screen.addComponent(
     new Transform({
       position: position0,
       rotation: rotation0,
       scale:new Vector3(5,2.5,1)
     })
   )
   screen.addComponent(myMaterial)
   screen.setParent( building)

   Video(screen,myVideoTexture);











   //let triggerBox = new utils.TriggerBoxShape(new Vector3(10,2,1),new Vector3(1, 1, 1))

//create trigger for entity


// add entity to engine
// screen.addComponent(
//  new utils.TriggerComponent(
//    triggerBox, //shape
//    {
//      onCameraEnter : () => {
//        myVideoTexture.play();
//      },

//      onCameraExit : () => {
//        myVideoTexture.pause();
//      },
//      enableDebug:true
//    }
//  )
// )
//    myVideoTexture.play()

}
