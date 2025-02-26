import { createNPC } from "./GameObjects/NPC"
import { createBook } from "./GameObjects/Book"
import { createVideo } from "./GameObjects/Panel"
import * as utils from '@dcl/ecs-scene-utils'
import { NPC } from '@dcl/npc-scene-utils'
import { Dialog } from '@dcl/npc-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { hud } from 'dcl-builder-hud'
import { createNFT } from './GameObjects/NFTs'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

// const entity = new Entity('entity')
// engine.addEntity(entity)
// entity.setParent(_scene)
// const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
// gltfShape.withCollisions = true
// gltfShape.isPointerBlocker = true
// gltfShape.visible = false
// entity.addComponentOrReplace(gltfShape)
// const transform2 = new Transform({
//   position: new Vector3(8, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity.addComponentOrReplace(transform2)

const jomsyfashion = new Entity('jomsyfashion')
engine.addEntity(jomsyfashion)
jomsyfashion.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(1, 1, 1)
})
jomsyfashion.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("src/resources/jomsyfashion_building_009.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
jomsyfashion.addComponentOrReplace(gltfShape2)

gltfShape2.visible = true

// jomsyfashion.addComponent(
//   new utils.Delay(1000, () => {
//    // gltfShape2.visible = true;
//   })
// )

// ---------------------- DCL token ------------------------

const dclToken = new Entity()
engine.addEntity(dclToken)

dclToken.addComponent(new CylinderShape())

const dclTokenTransform = new Transform({
  position: new Vector3(14.25, 0.5, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.5, 0.8)
})
dclToken.addComponent(dclTokenTransform)

dclToken.getComponent(CylinderShape).visible = true

let transparentColor = new Color4(0, 0, 0, 0) // To make an object both clickable and invisible, one has to keep the object visible, and set the transparency to full
let buttonMaterial = new Material()
buttonMaterial.albedoColor = transparentColor
dclToken.addComponent(buttonMaterial)

dclToken.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://www.digitalandarchitects.com/")
  })
)

// ---------------------- Jomsy Fashion link 1; on Jomsy fashion logo ------------------------

const jomsyFashionLink1 = new Entity()
engine.addEntity(jomsyFashionLink1)

jomsyFashionLink1.addComponent(new BoxShape())

const jomsyFashionLink1Transform = new Transform({
  position: new Vector3(10.65, 3.2, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2, 0.5)
})
jomsyFashionLink1.addComponent(jomsyFashionLink1Transform)

jomsyFashionLink1.getComponent(BoxShape).visible = true
jomsyFashionLink1.addComponent(buttonMaterial)

jomsyFashionLink1.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://jomsy.com/")
  })
)

// ---------------------- Jomsy Fashion link 2; on Coming Soon logo ------------------------

const jomsyFashionLink2 = new Entity()
//engine.addEntity(jomsyFashionLink2)

jomsyFashionLink2.addComponent(new BoxShape())

const jomsyFashionLink2Transform = new Transform({
  position: new Vector3(8, 1.5, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 1, 0.5)
})
jomsyFashionLink2.addComponent(jomsyFashionLink2Transform)

jomsyFashionLink2.getComponent(BoxShape).visible = true
jomsyFashionLink2.addComponent(buttonMaterial)

jomsyFashionLink2.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://jomsy.com/")
  })
)

// ---------------------- Jomsy Fashion link 3; on Silvie's photo ------------------------

const jomsyFashionLink3 = new Entity()
//engine.addEntity(jomsyFashionLink3)

jomsyFashionLink3.addComponent(new BoxShape())

const jomsyFashionLink3Transform = new Transform({
  position: new Vector3(8.75, 2, 4.7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 5, 0.5)
})
jomsyFashionLink3.addComponent(jomsyFashionLink3Transform)

jomsyFashionLink3.getComponent(BoxShape).visible = true
jomsyFashionLink3.addComponent(buttonMaterial)

jomsyFashionLink3.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://jomsy.com/")
  })
)




// ---------------------- The NPC ----------------------

// ---------------------- The Elevator ----------------------
let book = new createBook(jomsyfashion);

// ---------------------- The Screen ----------------------
let screen = new createVideo(jomsyfashion);


createNPC(_scene);



const jomsyFashionLink4 = new Entity()
engine.addEntity(jomsyFashionLink4)

jomsyFashionLink4.addComponent(new BoxShape())

const jomsyFashionLink3Transform4 = new Transform({
  position: new Vector3(4.5, 9, 1),
  scale: new Vector3(1, 1, 1),
})
jomsyFashionLink4.addComponent(jomsyFashionLink3Transform4)

jomsyFashionLink4.getComponent(BoxShape).visible = true
jomsyFashionLink4.addComponent(buttonMaterial)

jomsyFashionLink4.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://ebook.fashiondesignentrepreneurshipcourse.com")
  },
    {
      hoverText: "Buy the Book here!"
    }
  ))

// ---------------------- The furniture on the rooftop ----------------------

// furniture set 1
const furniture = new Entity()
engine.addEntity(furniture)

const furnitureTransform = new Transform({
  position: new Vector3(5.6, 7, 7),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.8,0.5,0.8)
})
furniture.addComponent(furnitureTransform)

furniture.addComponent(new GLTFShape("src/resources/Roof_living.glb"));
//hud.attachToEntity(furniture);

// furniture set 2
const furniture2 = new Entity()
engine.addEntity(furniture2)

const furnitureTransform2 = new Transform({
  position: new Vector3(7.1,7,7),
  rotation: Quaternion.Euler(0,180,0),
  scale: new Vector3(0.8, 0.5, 0.8)
})
furniture2.addComponent(furnitureTransform2)

furniture2.addComponent(new GLTFShape("src/resources/Roof_living.glb"));
//hud.attachToEntity(furniture2);

// ---------------------- The NFTs ----------------------
// The two NFTs on the right wall(if you are standing at the entrace, facing the robot)
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507732384874496001", new Vector3(2.3,2.8,6.3), Quaternion.Euler(360,270,360));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507731285362868225", new Vector3(2.3,2.8,11.6), Quaternion.Euler(360,270,360));

// The two NFTs on the walls of the entrance
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507733484386123777", new Vector3(4.8,2.8,2.3), Quaternion.Euler(360,180,0));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507734583897751553", new Vector3(11.1,2.8,2.3), Quaternion.Euler(360,180,0));

// The NFTs on the staircase of the first floor
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507724688293101569", new Vector3(15.4,2.6,4), Quaternion.Euler(360,90,360), new Vector3(4,4,1));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507741180967518209", new Vector3(15.3,4.8,6.8), Quaternion.Euler(360,90,360), new Vector3(4,4,1));

// The NFTs on the second floor
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507723588781473793", new Vector3(5.7,10.7,15.5), Quaternion.Euler(0,360,360));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507722489269846017", new Vector3(10.7,10.7,15.5), Quaternion.Euler(0,360,360));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507720290246590465", new Vector3(11.2,11.7,0.29), Quaternion.Euler(360,180,0));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507721389758218241", new Vector3(4.4,11.7,0.29), Quaternion.Euler(360,180,0));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507721389758218241", new Vector3(15.4,10.3,12.29), Quaternion.Euler(360,90,0)); // the one on the staircase wall

// The NFTs on the staircase of the second floor
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507724688293101569", new Vector3(15.4,10.4,4.59), Quaternion.Euler(360,90,0), new Vector3(4,4,1));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507741180967518209", new Vector3(15.4,13,8.19), Quaternion.Euler(360,90,0), new Vector3(5,5,1));

// The NFTs on the rooftop
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507734583897751553", new Vector3(15.4,17,12.8), Quaternion.Euler(0,90,0));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507735683409379329", new Vector3(15.4,17,8), Quaternion.Euler(0,90,0));
createNFT(jomsyfashion, "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/70792207985028855681838444929965013283356645235908534210838507733484386123777", new Vector3(15.4,17,3.2), Quaternion.Euler(0,90,0));
