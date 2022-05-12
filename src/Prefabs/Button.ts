export class Button extends Entity {

  // new code:
  // what will happen if I don't write these: what are these doing out of constructor? these are properties!
  transform0;
  //myEntity: Entity;
  //myMaterial: Material;
  constructor(book, direction, index, position0 = new Vector3(0, 0, 0)) {
    super();
    let myEntity = this; //what happens if we just work with "this" instead of myEntity?
    myEntity.addComponent(new ConeShape());

    //material and its fields
    this.transform0 = new Transform({ //name transform can make any trouble?
      position: new Vector3(position0.x, position0.y, position0.z),
      rotation: Quaternion.Euler(40, 0, 0),
      scale: new Vector3(0.01, 0.3, 0.3)
    })
    myEntity.addComponent(this.transform0)

    myEntity.addComponent(

      new OnPointerDown((e) => {

        if(direction === "right") //?
          book.goToNextPage();
        else if(direction === "left")
          book.goToPreviousPage();
        else
          null; // Replace this with an error message

      })
    )
  }

  // functions
  add(entity) {

    this.setParent(entity);

  }
}
