import * as utils from '@dcl/ecs-scene-utils'
import { hud } from 'dcl-builder-hud'
import { Video } from './HideShow';

export function createNFT(building, link, position0, rotation0, scale0 = new Vector3(6,6,1)) {

  const nft = new Entity()
  const shapeComponent = new NFTShape(
    link
  )
  nft.addComponent(shapeComponent)
  nft.addComponent(
    new Transform({
      position: position0,
      rotation: rotation0,
      scale: scale0
    })
  )
  engine.addEntity(nft)

  nft.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      link,
      "Jomsy Fashion NFT"
    )
  })
)
  hud.attachToEntity(nft);

}
