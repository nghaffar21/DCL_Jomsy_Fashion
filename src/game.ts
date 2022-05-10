import { createNPC } from "./GameObjects/NPC"
import * as utils from '@dcl/ecs-scene-utils'
import { NPC } from '@dcl/npc-scene-utils'
import { Dialog } from '@dcl/npc-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const jomsyfashion = new Entity('jomsyfashion')
engine.addEntity(jomsyfashion)
jomsyfashion.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(1, 1, 1)
})
jomsyfashion.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("c72d363c-f6c2-4735-bd4f-fad1d5224004/jomsyfashion_001.gltf")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
jomsyfashion.addComponentOrReplace(gltfShape2)

// ---------------------- DCL token ------------------------

const dclToken = new Entity()
//engine.addEntity(dclToken)

dclToken.addComponent(new CylinderShape())

const dclTokenTransform = new Transform({
  position: new Vector3(8, 0.5, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.5, 1)
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
  position: new Vector3(5.25, 3, 4.7),
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
createNPC(_scene);
