


/* ---- Drawing a 2D pumpkin exercise ---

Complete my drawing so that it looks like a Halloween pumpkin:

1. Add another central orange circle on top of the existing one, using the same lighting technique as for the main one - to create that "pumpkin" shape.

2. Add the right eye, and the right yellow iris. 

3. Add a green stem at the top, using the same light/dark overlapping colour for a nice effect. 

Keep these values dynamic. Consider the ordering of the shapes. Explore how the size variables affect other components. 

*/

//Global Variables
var pumpkinX,pumpkinY,pumpkinHeight,pumpkinWidth,pEyeSize,pIrisSize;

function setup() {
  
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
  
  //initialising variables that affect all of the drawn shapes
  //x,y poisition:
  pumpkinX= width/2;
  pumpkinY= height/2;
  
  //height and width of circles
  pumpkinWidth=180;
  pumpkinHeight=pumpkinWidth-60;
  
  //variables that affect eye size 
  pEyeSize= pumpkinHeight-80;
  pIrisSize= pEyeSize-30;
}

function draw() {
    
    background(215);


    //PUMPKIN
  
    //Create a stem with dark and light overlapping shapes
    noStroke()
    fill(21, 79, 17)
    triangle(pumpkinX,pumpkinY-50,pumpkinX-20,pumpkinY-80,pumpkinX+20,pumpkinY-80)
    noStroke()
    fill(33, 120, 26)
    triangle(pumpkinX,pumpkinY-60,pumpkinX-10,pumpkinY-75,pumpkinX+10,pumpkinY-75)

  
    //back ellipse dark orange
    noStroke();
    fill(180, 52, 37);
    ellipse(pumpkinX,pumpkinY,pumpkinWidth,pumpkinHeight);
    
    //back ellipse light
    noStroke();
    fill(240, 90, 40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-10,pumpkinHeight-10);
  
    //Create another dark orange middle ellipse to make it look more pumpkin-y
    noStroke();
    fill(180,52,37) 
    ellipse(pumpkinX,pumpkinY,pumpkinWidth-50,pumpkinHeight+10)

    //Create another light orange middle ellipse to make it look more pumpkin-y
    noStroke();
    fill(240, 90, 40) 
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-60,pumpkinHeight)
  
    //nose
	fill(150,25,0);
  	triangle(pumpkinX-15, pumpkinY+20, pumpkinX, pumpkinY-5, pumpkinX+15, pumpkinY+20);
  
    //left eye - add a right eye here
	noStroke();
    fill(0, 0, 0);
    ellipse(pumpkinX-35,pumpkinY-20,pEyeSize,pEyeSize);
    fill(0, 0, 0);
    ellipse(pumpkinX+35,pumpkinY-20,pEyeSize,pEyeSize);

  
    //eye pupils - add a left pupil here
	noStroke();
    fill(248, 239, 47);
    ellipse(pumpkinX-35,pumpkinY-20,pIrisSize,pIrisSize);
    fill(248, 239, 47);
    ellipse(pumpkinX+35,pumpkinY-20,pIrisSize,pIrisSize);

  
    
}
