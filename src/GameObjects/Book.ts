import * as utils from '@dcl/ecs-scene-utils'

export function createBook(building: Entity, position0 = new Vector3(1.1,8.7,6.5)) {

  // properties
  this.currentPage = 0; //what happens if I put the name as "currentPage"?
  const entity = new Entity();
  engine.addEntity(entity);
  entity.setParent(building);

  this.animator = new Animator();
  entity.addComponent(this.animator) //why should the animation be added to the building?

  for(let i = 1; i < 5; i++) {
    this.animator.addClip(new AnimationState(i+"book anim opening",{looping:false,layer:1,speed:1}) )
  }
  this.animator.addClip(new AnimationState("4book anim closing",{looping:false,layer:1,speed:1}) );

  // I add this box because the trigger of the book is so small
  const triggerBox = new Entity();
  triggerBox.addComponent(new Transform({
    position: new Vector3(-0.9, 0, 0),
    scale: new Vector3(1.75, 0.5, 2.5)
  }))
  const box = new BoxShape()
  box.withCollisions = false;
  box.visible=true;
  triggerBox.setParent(entity);
  triggerBox.addComponent(box)
  // make the button invisible
  const myMaterial = new Material()
  myMaterial.albedoColor = new Color4(1, 1, 1, 0)
  triggerBox.addComponent(myMaterial)

  //const t=this;
  triggerBox.addComponent(
    new OnPointerDown(() => {
      this.turnPage();
    })
  )

  entity.addComponent(
    new Transform({
      position: position0,
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(70, 180, 0)
    })
  )

  entity.addComponent(new GLTFShape("src/resources/book animation_003.glb"));

  this.turnPage = function() {
    let clip;
    if(this.currentPage === 3) {
      clip = this.animator.getClip( "4book anim closing");
      this.currentPage=0;
    } else {
      this.currentPage=this.currentPage+1;
      clip = this.animator.getClip( this.currentPage + "book anim opening");
    }

    clip.play();
  }

}
