var canvas;
var music;
var surface1,surface2,surface3,surface4,surface5,surface6,box
function preload(){
   // music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(750,590,100,10)
surface1.shapeColor="red"

surface2=createSprite(500,590,100,10)
surface2.shapeColor="blue"

surface3=createSprite(375,590,100,10)
surface3.shapeColor="green"

surface4=createSprite(250,590,100,10)
surface4.shapeColor="yellow"

surface5=createSprite(625,590,110,10)
surface5.shapeColor="brown"

surface6=createSprite(130,590,100,10)
surface6.shapeColor="violet"




    //create box sprite and give velocity
    box=createSprite(400,300,20,20)
    box.shapeColor="black"

    box .velocityX=3
box.velocityY=3
}

function draw() {
    background("cyan");
   
    //create edgeSprite
//music.play()
 

if (surface1.isTouching(box)){
    box.shapeColor="red"
    console.log("red")
}

if (box.isTouching(surface2)){
    box.shapeColor="blue"

}

 if (box.isTouching(surface3)){
    box.shapeColor="green"
}

else if (box.isTouching(surface4)){
    box.shapeColor="yellow"
}

 if (surface5.isTouching(box)){
    box.shapeColor="brown"
    console.log("brown")
}

 if (box.isTouching(surface6)){
    box.shapeColor="violet"
   
}

edges=createEdgeSprites()
box.bounceOff(edges)
box.bounceOff(surface1)
box.bounceOff(surface2)
box.bounceOff(surface3)
box.bounceOff(surface4)
box.bounceOff(surface5)
box.bounceOff(surface6)
drawSprites()
    //add condition to check if box touching surface and make it box
}
