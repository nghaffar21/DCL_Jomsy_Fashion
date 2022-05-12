import * as utils from '@dcl/ecs-scene-utils'

export function Book(building, position = new Vector3(0,0,0)) {

  // properties
  this.currentPage = 0; //what happens if I put the name as "currentPage"?
  const myEntity = new Entity();
  myEntity.setParent(building);




}
