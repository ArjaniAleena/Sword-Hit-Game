var apple, appleImg
var wood, woodImg, crackedWood, crackedWoodImg, crackedWood2, crackedWood2Img
var crossSword, crossedSwordImg
var fullSword, fullSwordImg, remainingSword, remainingSwordImg
var sword1,sword1Img
var sword2, sword2Img
var sword3, sword3Img
var sword4,sword4Img
var sword5, sword5Img
var sword6, sword6Img
var sword7, sword7Img
var woodObstacle1, woodObstacle1Img 
var woodObstacle2, woodObstacle2Img
var woodObstacle3, woodObstacle3Img
var woodObstacle4, woodObstacle4Img
var woodObstacle5, woodObstacle5Img
var woodObstacle6, woodObstacle6Img
var PLAY = 1;
var END = 0
var gameState = PLAY;

function preload(){
   
appleImg = loadImage("assets/apple.png")
woodImg = loadAnimation("assets/fullWood.png")
crackedWoodImg = loadImage("assets/crackedWood.png")
crackedWood2Img = loadImage("assets/crackedWood2.png")
//crossedSwordImg = loadImage("assets/crossedSwords.png")
fullSwordImg = loadImage("assets/fullSword.png")
remainingSwordImg = loadImage("assets/remainingSword.png")
sword1Img = loadImage("assets/sword.png")
sword2Img = loadImage("assets/sword.png")
sword3Img = loadImage("assets/sword.png")
sword4Img = loadImage("assets/sword.png")
sword5Img = loadImage("assets/sword.png")
sword6Img = loadImage("assets/sword.png")
sword7Img = loadImage("assets/sword.png")
backgroundImg = loadImage("assets/woodenbg.jpg")
woodObstacle1Img = loadImage("assets/woodObstacle1.png")
woodObstacle2Img = loadImage("assets/woodObstacle2.png")
woodObstacle3Img = loadImage("assets/woodObstacle3.png")
woodObstacle4Img = loadImage("assets/woodObstacle4.png")
woodObstacle5Img = loadImage("assets/woodObstacle5.png")
woodObstacle6Img = loadImage("assets/woodObstacle6.png")
}


function setup(){
createCanvas(600,840)

apple = createSprite(550,40,400,100)
apple.addImage(appleImg)
apple.scale = 0.10

wood = createSprite(300,300,400,400)
wood.addAnimation("wood", woodImg)
wood.scale = 0.4
wood.visible = true

/*crackedWood = createSprite(300,420,400,400)
crackedWood.addImage(crackedWoodImg)
crackedWood.scale = */

/*crackedWood2 = createSprite(300,420,400,400)
crackedWood2.addImage(crackedWood2Img)
crackedWood2.scale = 0. */

/*crossedSword = createSprite(200,40,50,50)
crossedSword.addImage(crossedSwordImg)
crossedSword.scale = 0.13 */

fullSword1 = createSprite(35,720,50,50)
fullSword1.addImage(fullSwordImg)
fullSword1.scale = 0.15
fullSword1.visible = true

fullSword2 = createSprite(35,680,50,50)
fullSword2.addImage(fullSwordImg)
fullSword2.scale = 0.15

fullSword3 = createSprite(35,640,50,50)
fullSword3.addImage(fullSwordImg)
fullSword3.scale = 0.15

fullSword4 = createSprite(35,600,50,50)
fullSword4.addImage(fullSwordImg)
fullSword4.scale = 0.15

fullSword5 = createSprite(35,560,50,50)
fullSword5.addImage(fullSwordImg)
fullSword5.scale = 0.15

fullSword6 = createSprite(35,520,50,50)
fullSword6.addImage(fullSwordImg)
fullSword6.scale = 0.15

fullSword7 = createSprite(35,480,50,50)
fullSword7.addImage(fullSwordImg)
fullSword7.scale = 0.15

remainingSword1 = createSprite(35,720,50,50)
remainingSword1.addImage(remainingSwordImg)
remainingSword1.scale = 0.04
remainingSword1.visible = false

remainingSword2 = createSprite(35,680,50,50)
remainingSword2.addImage(remainingSwordImg)
remainingSword2.scale = 0.04
remainingSword2.visible = false

remainingSword3 = createSprite(35,640,50,50)
remainingSword3.addImage(remainingSwordImg)
remainingSword3.scale = 0.04
remainingSword3.visible = false

remainingSword4 = createSprite(35,600,50,50)
remainingSword4.addImage(remainingSwordImg)
remainingSword4.scale = 0.04
remainingSword4.visible = false

remainingSword5 = createSprite(35,560,50,50)
remainingSword5.addImage(remainingSwordImg)
remainingSword5.scale = 0.04
remainingSword5.visible = false

remainingSword6 = createSprite(35,520,50,50)
remainingSword6.addImage(remainingSwordImg)
remainingSword6.scale = 0.04
remainingSword6.visible = false

remainingSword7 = createSprite(35,480,50,50)
remainingSword7.addImage(remainingSwordImg)
remainingSword7.scale = 0.04
remainingSword7.visible = false

sword1 = createSprite(300,700)
sword1.addImage(sword1Img)
sword1.scale = 0.25

sword2 = createSprite(300,700)
sword2.addImage(sword2Img)
sword2.scale = 0.25
sword2.visible = false

sword3 = createSprite(300,700)
sword3.addImage(sword3Img)
sword3.scale = 0.25
sword3.visible = false

sword4 = createSprite(300,700)
sword4.addImage(sword4Img)
sword4.scale = 0.25
sword4.visible = false

sword5 = createSprite(300,700)
sword5.addImage(sword5Img)
sword5.scale = 0.25
sword5.visible = false

sword6 = createSprite(300,700)
sword6.addImage(sword6Img)
sword6.scale = 0.25
sword6.visible = false

sword7 = createSprite(300,700)
sword7.addImage(sword7Img)
sword7.scale = 0.25
sword7.visible = false 

woodObstacle1 = createSprite(300,300,600,600)
woodObstacle1.addImage(woodObstacle1Img)
woodObstacle1.scale = 0.3
woodObstacle1.visible = false

woodObstacle2 = createSprite(300,300,400,400)
woodObstacle2.addImage(woodObstacle2Img)
woodObstacle2.scale = 0.8
woodObstacle2.visible = false

woodObstacle3 = createSprite(300,300,400,400)
woodObstacle3.addImage(woodObstacle3Img)
woodObstacle3.scale = 0.8
woodObstacle3.visible = false

woodObstacle4 = createSprite(300,300,400,400)
woodObstacle4.addImage(woodObstacle4Img)
woodObstacle4.scale = 0.8
woodObstacle4.visible = false

woodObstacle5 = createSprite(300,300,400,400)
woodObstacle5.addImage(woodObstacle5Img)
woodObstacle5.scale = 0.8
woodObstacle5.visible = false

woodObstacle6 = createSprite(300,300,400,400)
woodObstacle6.addImage(woodObstacle6Img)
woodObstacle6.scale = 0.8
woodObstacle6.visible = false
}

function draw(){
background(backgroundImg)

wood.rotationSpeed = 15

if (gameState === PLAY){
    if (keyDown("SPACE")){
        // when I press space the sword should increase position and rotate.
       sword1.y  = sword1.y  - 70
        } 
        else{
        if (keyDown("UP_ARROW")){
            // when I press space the sword should increase position and rotate.
           sword2.y  = sword2.y  - 70
            } 
        }
        example()
        example2()
        example3()
        example4()
        example5()
   
        
                        
        if(woodObstacle5.isTouching(sword6)){
            woodObstacle5.x = sword6.x
            sword6.rotationSpeed = 15
            remainingSword6.visible = true
            fullSword6.visible = false
            woodObstacle5.visible = false
            woodObstacle6.visible = true
            woodObstacle6.rotationSpeed = 15
            sword6.visible = false
            sword7.visible = true
                 }
                    
                    if(woodObstacle6.isTouching(sword7)){
                    woodObstacle6.x = sword7.x
                    sword7.rotationSpeed = 15
                    remainingSword7.visible = true
                    fullSword7.visible = false
                    woodObstacle6.visible = false
                    woodObstacle7.visible = true
                    woodObstacle7.rotationSpeed = 15
                    sword7.visible = false
                        }
                        
var rand = Math.round(random(1,6))
/*switch (rand) {
  case 1:
   woodObstacle1.addImage(woodObstacle1Img)
    break;
  case 2:
    woodObstacle2.addImage(woodObstacle2Img)
    break;
  case 3:
    woodObstacle3.addImage(woodObstacle3Img)
    break;
  case 4:
    woodObstacle4.addImage(woodObstacle4Img)
    break;
  case 5:
    woodObstacle5.addImage(woodObstacle5Img)
    break;
  case 6:
   woodObstacle6.addImage(woodObstacle6Img)
    break;
    default: break;
}
*/

}
else if(gameState===END){

}
drawSprites()
}

function example(){

    if (wood.isTouching(sword1)) {
        wood.x = sword1.x
        sword1.rotationSpeed = 15
        remainingSword1.visible = true
        fullSword1.visible = false
        wood.visible = false
        woodObstacle1.visible = true
        woodObstacle1.rotationSpeed = 15
        sword1.visible = false
        sword2.visible = true
            } 
          

}

function example2(){
    if(woodObstacle1.isTouching(sword2)){
        woodObstacle1.x = sword2.x
        sword2.rotationSpeed = 15
        remainingSword2.visible = true
        fullSword2.visible = false
        woodObstacle1.visible = false
        woodObstacle2.visible = true
        woodObstacle2.rotationSpeed = 15
        sword2.visible = false
        sword3.visible = true
        if (keyDown("DOWN_ARROW")){
            // when I press space the sword should increase position and rotate.
           sword3.y  = sword3.y  - 70
            } 
       
            }
}

function example3(){
    if(woodObstacle2.isTouching(sword3)){
        woodObstacle2.x = sword3.x
        sword3.rotationSpeed = 15
        remainingSword3.visible = true
        fullSword3.visible = false
        woodObstacle2.visible = false
        woodObstacle3.visible = true
        woodObstacle3.rotationSpeed = 15
        sword3.visible = false
        sword4.visible = true
        if (keyDown("UP_ARROW")){
            // when I press space the sword should increase position and rotate.
           sword4.y  = sword4.y  - 70
            } 
            }

}

function example4(){
     if(woodObstacle3.isTouching(sword4)){
            woodObstacle3.x = sword4.x
            sword4.rotationSpeed = 15
            remainingSword4.visible = true
            fullSword4.visible = false
            woodObstacle3.visible = false
            woodObstacle4.visible = true
            woodObstacle4.rotationSpeed = 15
            sword4.visible = false
            sword5.visible = true
            if (keyDown("DOWN_ARROW")){
                // when I press space the sword should increase position and rotate.
               sword4.y  = sword4.y  - 70
                } 
                }
}

function example5(){
    if(woodObstacle4.isTouching(sword5)){
        woodObstacle4.x = sword5.x
        sword5.rotationSpeed = 15
        remainingSword5.visible = true
        fullSword5.visible = false
        woodObstacle4.visible = false
        woodObstacle5.visible = true
        woodObstacle5.rotationSpeed = 15
        sword5.visible = false
        sword6.visible = true
            }
}