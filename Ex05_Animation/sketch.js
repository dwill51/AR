// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker;

// create variables to hold each cube
let littleCube1, littleCube2, littleCube3, littleCube4, littleCube5;

// movement speeds for the other cubes
let movementSpeed = 0.05;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  marker = world.getMarker('hiro');

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left and right
  // -0.5, 0, -0.5 is the top left corner
  littleCube1 = new Box({
    x:-0.5, y:0.25, z:-0.5,
    red:255, green:139, blue:0,
    width:0.29, height:0.29, depth:0.29,
    asset:'stonebrick'
  });
  marker.addChild( littleCube1 );

  littleCube2 = new Box({
    x:0.5, y:0.25, z:-0.5,
    red:18, green:231, blue:114,
    width:0.5, height:0.5, depth:0.5,
    asset:'stonebrick'
  });
  marker.addChild( littleCube2 );

  littleCube3 = new Box({
    x:-0.5, y:0.25, z:0.5,
    red:38, green:110, blue:246,
    width:0.4, height:0.4, depth:0.4,
    asset:'stonebrick'
  });
  marker.addChild( littleCube3 );

  littleCube4 = new Box({
    x:0.5, y:0.25, z:0.5,
    red:228, green:41, blue:242,
    width:0.4, height:0.4, depth:0.4,
    asset:'stonebrick'
  });
  marker.addChild( littleCube4 );

  littleCube5 = new Box({
    x:0, y:1.2, z:0,
    red:255, green:211, blue:0,
    width:0.6, height:0.6, depth:0.6,
    asset:'stonebrick'
  });
  marker.addChild( littleCube5 );

  littleCube6 = new Box({
    x:0.7, y:0.3, z:1,
    red:255, green:1, blue:48,
    width:0.3, height:0.3, depth:0.3,
    asset:'stonebrick'
  });
  marker.addChild( littleCube6 );
}


function draw() {
  // spin the top cube
  littleCube5.spinX(3);
  littleCube5.spinY(2);
  littleCube5.spinZ(1);
  littleCube6.spinZ(1);


  // move the other cubes around a bit
  littleCube1.nudge(0, movementSpeed, 0);
  littleCube2.nudge(movementSpeed, 0, 0);
  littleCube3.nudge(0, 0, movementSpeed);
  littleCube4.nudge(-movementSpeed, movementSpeed, 0);

  // flip movement speed
  if (littleCube1.getY() > 1) {
    movementSpeed = -0.01;
  }
  if (littleCube1.getY() < 0) {
    movementSpeed = 0.01;
  }


}
