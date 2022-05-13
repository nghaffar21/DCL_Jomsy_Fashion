import * as utils from '@dcl/ecs-scene-utils'
import { NPC } from '@dcl/npc-scene-utils'
import { Dialog } from '@dcl/npc-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'

export function createNPC(building, robotOriginalPosition=new Vector3(8, 0, 4)) {

  let robotHeight = 0;
  //let robotOriginalPosition = new Vector3(4, robotHeight, 8) // the original position of the Robot
  let delay = 10000; // delay of n thousand means that the robot will wait for n seconds before coming back to its original position
  let movementDuration = 5; // movementDuration of n means that it takes n seconds for the robot to go from one position to another position

// The NPC Dialog
let Greeting: Dialog[] = [
    {
      name: 'greeting',
      text: 'Heey! My name is Zoe. I am a fashion model in the Jomsy world!',
    },

    {
      name: 'main menu',
      text: 'Let me show you around a bit..',
      isQuestion: true,
      buttons: [
        {
          label: "About",
          triggeredActions: () => {
            robot.followPath({
              path: [robotOriginalPosition, new Vector3(10, 0, 8)],
              loop: false,
              totalDuration: 4,
              curve: true,
              startingPoint: 0,
              onFinishCallback: () => {
                //robot.stopWalking(2)
                //robot.playAnimation("idle animation")
                //rotate the robot to face the user
                let RobotStartRot = robot.getComponent(Transform).rotation
                let RobotEndRot = Quaternion.Euler(0, 180, 0)

                // Rotate entity
                robot.addComponent(new utils.RotateTransformComponent(RobotStartRot, RobotEndRot, 1))
              }
            })
          },
          goToDialog: "follow me1"
        },

        {
          label: "Jomsy Book",
          goToDialog: "follow me2"
        },

        {
          label: "Visit Jomsy",
          triggeredActions: () => {
            openExternalURL("https://jomsy.com/")
          },
          goToDialog: "main menu"
        },

        {
          label: "Creators of building",
          triggeredActions: () => {
            openExternalURL("https://www.digitalandarchitects.com/")
          },
          goToDialog: "main menu"
        }
      ]
    },

  // ------- Dialog for Jomsy History -------

  {
    name: "follow me1",
    text: 'Follow me..'
  },

  {
    name: 'history intro',
    text: 'Let me tell you a bit about history of Jomsy...',
    isQuestion: true,
    buttons: [
      {label: "Go on..",
        triggeredActions: () => {

        },
        goToDialog: "story1"
      }]
  },

  {
    name: 'story1',
    text: "It all started more than 10 years ago in Los Angeles, California: the “sunshine state”, with the creation of JOMSY and its first branch: Jomsy Fashion.",
  },

  {
    name: 'story2',
    text: "Jomsy Fashion was nominated: innovative company of the year, by the Los Angeles Business Journal, for its contribution to young fashion designers without experience and training, thanks to a methodology that opens the doors to this particularly difficult industry.",
    triggeredByNext: () => {
      robot.followPath({
        loop: false,
        totalDuration: 4,
        curve: true,
        startingPoint: 0,
        path: [new Vector3(10, 0, 8), robotOriginalPosition],
      })
    }
  },

  {
    name: "done1",
    text: "Do you want to give us a visit?",
    isQuestion: true,
    buttons: [
      {label: "Sure!",
        triggeredActions: () => {
          openExternalURL("https://jomsy.com/")
        },
        goToDialog: "main menu"
      },
      {label: "Later",
        triggeredActions: () => {
      },
      goToDialog: "main menu"
      }
    ],
    isEndOfDialog: true
  },

  // ------- Dialog for Jomsy Book -------

  {
    name: "follow me2",
    isQuestion: true,
    buttons: [
      {label: "Ok!",
        triggeredActions: () => {},
        goToDialog: "main menu"
      }],
    text: 'Jomsy book is finally ready! Go upstairs and check it out!',
    isEndOfDialog: true
  }
]

  // Import the NPC
  let robot = new NPC( {position: robotOriginalPosition, rotation: Quaternion.Euler(0, 180, 0), scale: new Vector3(1, 1, 1)}, "src/resources/Model_animation character_009.glb",
    () => {
        robot.stopWalking()
        robot.talk(Greeting) // second parameter: the index of the first dialog box // third parameter: number of seconds until the dialog box closes
    },
    {
      idleAnim: "idle animation",
      walkingAnim: "walk animation",
      faceUser: true,
      continueOnWalkAway: false, // on false, the conversation is closed when the player walks away
      reactDistance: 4, // in a radius of 8, the conversation box stays
      //onlyClickTrigger: true, // if true, the robot will not be activated by pressing E nor by walking near it. It will be activated only by user's click on the robot
      textBubble: false
    }
  )
  //robot.setParent(building); // the problem with setting the building as a

}
